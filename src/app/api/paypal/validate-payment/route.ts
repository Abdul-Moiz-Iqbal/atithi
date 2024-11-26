import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const { orderID } = await req.json();
  console.log("Order ID:", orderID);

  try {
    // First, check the current status of the order
    const orderResponse = await axios.get(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
          ).toString("base64")}`,
        },
      }
    );

    const orderStatus = orderResponse.data.status;
    console.log("Current order status:", orderStatus);

    // If the order is already captured, skip the capture attempt
    if (orderStatus === "COMPLETED") {
      console.log("Order already captured!");
      return NextResponse.json(
        { success: true, error: "Order already captured." },
        { status: 200 }
      );
    }

    // If the order hasn't been captured yet, proceed with the capture
    const captureResponse = await axios.post(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`,
      {},
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
          ).toString("base64")}`,
        },
      }
    );

    return NextResponse.json({ success: true, data: captureResponse.data });

  } catch (error: unknown) {
    console.error("Payment Validation Error:", error.response?.data || error);
    const message =
      error.response?.data?.message || "Unknown error occurred during validation";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
