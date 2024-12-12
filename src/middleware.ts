import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: Request) {
  const cookieHeader = req.headers.get('cookie');
  const token = cookieHeader
    ?.split(';')
    .find((c) => c.trim().startsWith('token='))
    ?.split('=')[1];

  const url = req.nextUrl;

  // Allow access to `/dashboard/login`
  if (url.pathname === '/dashboard/login') {
    return NextResponse.next();
  }

  if (!token) {
    console.log('No token found, redirecting to /dashboard/login');
    return NextResponse.redirect(new URL('/dashboard/login', req.url));
  }

  try {
    // Use `TextEncoder` to encode the secret for `jose`
    const secret = process.env.JWT_SECRET!;
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret)); // Use this if your JWT_SECRET is already encoded properly.
    
    console.log('Verified Token Payload:', payload);

    // Optional: Check user role
    if ((payload as unknown).role !== 'admin') {
      console.log('User is not admin, redirecting to /dashboard/login');
      return NextResponse.redirect(new URL('/dashboard/login', req.url));
    }
  } catch (error) {
    console.error('Error verifying token:', error);
    return NextResponse.redirect(new URL('/dashboard/login', req.url));
  }

  console.log('Token verified, proceeding to requested route');
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Protect all `/dashboard` routes
};
