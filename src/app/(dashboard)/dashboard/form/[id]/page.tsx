// 'use client'
// import { usePathname, useRouter } from "next/navigation";
// import path from "path";
// const formsData = [
//     // Sample data for forms (replace with API response later)
//     {
//       id: "1",
//       user_name: "Maryam Nawab",
//       email: "rafaymalk0@gmail.com",
//       totalPrice: 60,
//       status: "COMPLETED",
//       details: {
//         regions: ["North East States", "Assam"],
//         month: "February",
//         year: 2024,
//         days: 4,
//         planDetails: { title: "Group (up to 4)", price: 15 },
//       },
//     },
//     {
//       id: "2",
//       user_name: "John Doe",
//       email: "john.doe@example.com",
//       totalPrice: 120,
//       status: "PENDING",
//       details: {
//         regions: ["South States"],
//         month: "March",
//         year: 2024,
//         days: 6,
//         planDetails: { title: "Solo", price: 20 },
//       },
//     },
//   ];
// const FormDetails = () => {
//   const pathname = usePathname();
//   console.log(pathname)
//   const id  = pathname.split("/").slice(-1)[0];
//     console.log(id)
//   // Example API fetch (replace with actual fetch logic)
//   const form = formsData.find((form) => form.id === id);
//     console.log(form)
//   if (!form) {
//     return <p>Form not found!</p>;
//   }

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Form Details</h1>
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <p><strong>Name:</strong> {form.user_name}</p>
//         <p><strong>Email:</strong> {form.email}</p>
//         <p><strong>Total Price:</strong> ${form.totalPrice}</p>
//         <p><strong>Status:</strong> {form.status}</p>
//         <hr className="my-4" />
//         <p><strong>Regions:</strong> {form.details.regions.join(", ")}</p>
//         <p><strong>Month:</strong> {form.details.month}</p>
//         <p><strong>Year:</strong> {form.details.year}</p>
//         <p><strong>Days:</strong> {form.details.days}</p>
//         <p>
//           <strong>Plan:</strong> {form.details.planDetails.title} (${form.details.planDetails.price})
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FormDetails;

'use client'
import { useParams, } from "next/navigation";
import React, { useState, useEffect } from "react";

// Define the type for the API data (you can adjust this based on your actual response structure)
interface PaymentDetails {
  status: string;
  id: string;
  purchase_units: Array<{
    amount: {
      currency_code: string;
      value: string;
    };
    shipping: {
      address: {
        address_line_1: string;
        admin_area_2: string;
        admin_area_1: string;
        postal_code: string;
        country_code: string;
      };
    };
  }>;
  payer: {
    name: {
      given_name: string;
      surname: string;
    };
    email_address: string;
  };
}

interface PlanDetails {
  title: string;
  price: number;
}

interface FormData {
  _id: string;
  user_name: string;
  email: string;
  country: string;
  regions: string[];
  month: string;
  year: number;
  days: number;
  totalPrice: number;
  pay: boolean;
  planDetails: PlanDetails;
  paymentDetails: PaymentDetails;
  createdAt: string;
  updatedAt: string;
}

const FormDetailsPage = ( ) => {
    const params = useParams<{id: string}>()
    
    console.log(params)
  const [data, setData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the data when the component mounts
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await fetch(`/api/form/userTrip/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch form data");
        }
        const result = await response.json();
        console.log("data:", result.pay)
        setData(result);
      } catch (err: unknown) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFormData();
  }, [params]);

  if (loading) {
    return <div className="p-6 text-center">Loading form details...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  if (!data) {
    return <div className="p-6 text-center">Form not found.</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Form Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">User Details</h2>
        <p>
          <strong>Name:</strong> {data.user_name}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Country:</strong> {data.country}
        </p>
        <p>
          <strong>Comment:</strong> {data?.comment}
        </p>
        <p>
          <strong>Payment:</strong> {data?.pay?"Payment Completed" :' Payment not Done' }
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Trip Details</h2>
        <p>
          <strong>Regions:</strong> {data.regions.join(", ")}
        </p>
        <p>
          <strong>Month:</strong> {data.month}
        </p>
        <p>
          <strong>Year:</strong> {data.year}
        </p>
        <p>
          <strong>Days:</strong> {data.days}
        </p>
        <p>
          <strong>Plan:</strong> {data.planDetails.title} (${data.planDetails.price})
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Payment Details</h2>
        <p>
          <strong>Status:</strong> {data.paymentDetails?.status}
        </p>
        <p>
          <strong>Amount:</strong> {data.paymentDetails?.purchase_units[0].amount.currency_code}{" "}
          {data.paymentDetails?.purchase_units[0].amount.value}
        </p>
        <p>
          <strong>Transaction ID:</strong> {data.paymentDetails?.id}
        </p>
        <p>
          <strong>Payer Name:</strong> {data.paymentDetails?.payer.name.given_name}{" "}
          {data.paymentDetails?.payer.name.surname}
        </p>
        <p>
          <strong>Payer Email:</strong> {data.paymentDetails?.payer.email_address}
        </p>
        <p>
          <strong>Shipping Address:</strong>{" "}
          {data.paymentDetails?.purchase_units[0].shipping.address.address_line_1},{" "}
          {data.paymentDetails?.purchase_units[0].shipping.address.admin_area_2},{" "}
          {data.paymentDetails?.purchase_units[0].shipping.address.admin_area_1} -{" "}
          {data.paymentDetails?.purchase_units[0].shipping.address.postal_code},{" "}
          {data.paymentDetails?.purchase_units[0].shipping.address.country_code}
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Timestamps</h2>
        <p>
          <strong>Created At:</strong> {new Date(data.createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong> {new Date(data.updatedAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default FormDetailsPage;
