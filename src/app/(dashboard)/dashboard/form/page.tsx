
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const FormsPage = () => {
  const [formsData, setFormsData] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedFormId, setExpandedFormId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedFormId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await fetch("/api/form/userTrip", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setFormsData(data);
      } catch (err: unknown) {
        setError(err.message || "An error occurred while fetching forms.");
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading forms...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-50 w-full">
      <h1 className="text-2xl font-bold mb-4">Trip Forms</h1>
      {formsData.length === 0 ? (
        <p>No forms found.</p>
      ) : (
        <div className="grid gap-4">
          {formsData.map((form) => (
            <div
              key={form._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{form.user_name}</p>
                  <p className="text-sm text-gray-500">{form.email}</p>
                  <p className="text-sm text-gray-700">
                    Total: ${form.totalPrice}
                  </p>
                  <p
                    className={`text-sm ${
                      form.paymentDetails?.status === "COMPLETED"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {form.paymentDetails?.status === "COMPLETED"
                      ? "Payment Completed"
                      : "Payment Pending"}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleExpand(form._id)}
                    className="text-blue-500 underline"
                  >
                    {expandedFormId === form._id ? "Collapse" : "Expand"}
                  </button>
                  <Link
                    href={`/dashboard/form/${form._id}`}
                    className="text-blue-500 underline"
                  >
                    View More
                  </Link>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedFormId === form._id && (
                <div className="mt-4 bg-gray-100 p-4 rounded">
                  <p>
                    <strong>Regions:</strong>{" "}
                    {form.regions?.join(", ") || "N/A"}
                  </p>
                  <p>
                    <strong>Month:</strong> {form.month}
                  </p>
                  <p>
                    <strong>Year:</strong> {form.year}
                  </p>
                  <p>
                    <strong>Days:</strong> {form.days}
                  </p>
                  <p>
                    <strong>Plan:</strong> {form.planDetails?.title} ($
                    {form.planDetails?.price})
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormsPage;
