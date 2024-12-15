// src/app/dashboard/faq/FaqList.tsx

import { useState, useEffect } from 'react';
import EditFaq from './EditFaq';

const FaqList = () => {
  const [faqs, setFaqs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);

  useEffect(() => {
    // Fetch all FAQs on page load
    const fetchFaqs = async () => {
      const response = await fetch('/api/faq');
      const data = await response.json();
      setFaqs(data);
    };
    fetchFaqs();
  }, []);

  const deleteFaq = async (id: string) => {
    const response = await fetch(`/api/faq`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  id }),
    });
    if (response.ok) {
      setFaqs(faqs.filter((faq) => faq._id !== id));
    } else {
      alert('Error deleting FAQ');
    }
  };

  const startEditing = (faq: unknown) => {
    setSelectedFaq(faq);
    setIsEditing(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">FAQs</h2>

      {faqs.length === 0 ? (
        <p className="text-center text-gray-500">No FAQs found.</p>
      ) : (
        <ul className="space-y-4">
          {faqs.map((faq) => (
            <li key={faq._id} className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <strong className="text-xl font-semibold">{faq.question}</strong>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEditing(faq)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteFaq(faq._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isEditing && selectedFaq && (
        <EditFaq faq={selectedFaq} setIsEditing={setIsEditing} setFaqs={setFaqs} />
      )}
    </div>
  );
};

export default FaqList;
