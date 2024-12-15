// src/app/dashboard/faq/FaqPage.tsx
"use client";
import { useState } from 'react';
import FaqList from '@/components/Dashboard/faq/FaqList';
import AddFaq from '@/components/Dashboard/faq/AddFaq';

const FaqPage = () => {
  const [faqs, setFaqs] = useState<unknown[]>([]);
console.log(faqs)
  return (
    <div className='w-full h-full py-20'>
      
      <AddFaq setFaqs={setFaqs} />
      <FaqList setFaqs={setFaqs} />
    </div>
  );
};

export default FaqPage;
