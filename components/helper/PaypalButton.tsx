
"use client";
import React from "react";
import {
  FUNDING,
  PayPalButtons,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";

interface PaypalButtonProps {
  amount: string;
  onSuccess: (details: unknown) => void;
  isDisabled: boolean;
}

const PaypalButton = ({ amount, onSuccess ,isDisabled}: PaypalButtonProps) => {
  const [isProcessing, setIsProcessing] = React.useState(false);

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
        currency: "USD",
      }}
    >
      <PayPalButtons
      disabled={isDisabled}
 
      forceReRender={[amount]}
      
        fundingSource={FUNDING.PAYPAL}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          setIsProcessing(true);
          return actions.order.capture().then(async (details) => {
            setIsProcessing(false);
            // Send orderID to your server for validation
            const response = await fetch("/api/paypal/validate-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderID: data.orderID }),
            });
            const result = await response.json();

            if (result.success) {
              onSuccess(details);
            } else {
              console.error("Payment validation failed:", result.error);
              alert("Payment validation failed. Please contact support.");
            }
          });
        }}
        onCancel={() => {
          console.log("Payment cancelled by the user.");
          alert("Payment was cancelled. Please try again.");
        }}
        onError={(err) => {
          setIsProcessing(false);
          console.error("Error during payment:", err);
          alert(
            "An error occurred during the payment process. Please try again."
          );
        }}
      />
      {isProcessing && <p>Processing payment, please wait...</p>}
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
