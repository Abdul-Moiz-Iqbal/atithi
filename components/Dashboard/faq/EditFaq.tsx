// src/app/dashboard/faq/EditFaq.tsx

import { useState } from 'react';

const EditFaq = ({
  faq,
  setIsEditing,
  setFaqs,
}: {
  faq: unknown;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setFaqs: React.Dispatch<React.SetStateAction<unknown[]>>;
}) => {
  const [question, setQuestion] = useState(faq.question);
  const [answer, setAnswer] = useState(faq.answer);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`/api/faq`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, answer, id:faq._id }),
    });

    const data = await response.json();
    if (response.ok) {
      setFaqs((prevFaqs) => prevFaqs.map((f) => (f._id === faq._id ? data : f)));
      setIsEditing(false);
    } else {
      alert('Error updating FAQ');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Edit FAQ</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-between space-x-4">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Update FAQ
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="w-full py-2 px-4 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditFaq;
