import { NextResponse } from 'next/server';

export function GET() {
  const response = NextResponse.json({ message: 'Logged out successfully' });
  response.cookies.delete('token');
  return response;
}