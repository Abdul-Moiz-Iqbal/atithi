// import { NextRequest, NextResponse } from "next/server";
// import dbConnect from "../../../../../config/database";
// import UserTrip from "../../../../../models/UserTrip";

// // Define TypeScript interface for the request body
// interface UserTripRequestBody {
//   user_name: string;
//   email: string;
//   country: string;
//   regions: string[];
//   month: string;
//   year: number;
//   comment?: string;
//   planDetails?: {
//     title: string;
//     price: number;
//   };
//   totalPrice: number;
//   pay: boolean;
//   days: number;
//   paymentDetails: object;
// }

// export async function POST(req: NextRequest) {
//   try {
//     // Parse the request body
//     const body: UserTripRequestBody = await req.json();
//     console.log("Request Body:", body);

//     // Validate required fields
//     // const { user_name, email, country, regions, month, year, totalPrice,pay,days } = body;
//     // if (
//     //   !user_name ||
//     //   !email ||
//     //   !country ||
//     //   !regions ||
//     //   !Array.isArray(regions) ||
//     //   !month ||
//     //   !year ||
//     //   !totalPrice ||
//     //   !pay ||
//     //   days
//     // ) {
//     //   return NextResponse.json(
//     //     { error: "Missing required fields or invalid regions format" },
//     //     { status: 400 }
//     //   );
//     // }

//     // Validate `month` and `year` values
   

//     // Connect to the database
//     await dbConnect();

//     // Create the new user trip in the database
//     const userTrip = await UserTrip.create(body);

//     // Respond with the created user trip
//     return NextResponse.json(userTrip, { status: 201 });
//   } catch (err: any) {
//     console.error("Error in POST /api/form/userTrip:", err);

//     // Handle Mongoose validation errors
//     if (err.name === "ValidationError") {
//       console.error("Error in POST /api/form/userTrip:", err.errors);
//       return NextResponse.json(
//         { error: "Validation failed", details: err.errors },
//         { status: 400 }
//       );
//     }

//     // Handle other errors
//     return NextResponse.json(
//       { error: "Internal server error", details: err.message },
//       { status: 500 }
//     );
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../../config/database";
import UserTrip from "../../../../../models/UserTrip";

// Define TypeScript interface for the request body
interface UserTripRequestBody {
  user_name: string;
  email: string;
  country: string;
  regions: string[];
  month: string;
  year: number;
  comment?: string;
  planDetails?: {
    title: string;
    price: number;
  };
  totalPrice: number;
  pay: boolean;
  days: number;
  paymentDetails: object;
}

// Handle GET requests
export async function GET() {
  try {
    await dbConnect(); // Ensure database connection

    // Fetch all forms from the database
    const forms = await UserTrip.find();
    return NextResponse.json(forms, { status: 200 });
  } catch (err: unknown) {
    console.error("Error fetching forms:", err);
    return NextResponse.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    await dbConnect(); // Ensure database connection

    const body: UserTripRequestBody = await req.json();
    console.log("Request Body:", body);

    // Create a new user trip in the database
    const userTrip = await UserTrip.create(body);

    // Respond with the created user trip
    return NextResponse.json(userTrip, { status: 201 });
  } catch (err: unknown) {
    console.error("Error creating user trip:", err);

    // Handle Mongoose validation errors
    if (err.name === "ValidationError") {
      return NextResponse.json(
        { error: "Validation failed", details: err.errors },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}
