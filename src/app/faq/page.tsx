"use client";
import Image from "next/image";
import { useState } from "react";

import { SlArrowDown } from "react-icons/sl";
import image from "../../../public/images/faq.png";
import Footer from "../../../components/Footer";
import Link from "next/link";

const data = [
  {
    question: "What services does Hello Atithi provide me in India?",
    answer:
      "Hello Atithi offers various services to foreign tourists visiting India.These services include visa assistance, resolving safety and health issues, journey research and planning, personalized journey plans, limitless alterations to journey plans, Indian SIM cards, Indian (NRO) bank accounts (pay as local), basic Hindi language learning, unbiased information, and             24/7 journey support all over India.",
  },
  {
    question:
      "What is the charges for accessing the services, and how long does it last?",
    answer:
      "The charges for accessing Hello Atithi's services starts from is $5 per day (single user) during your stay in India.",
  },
  {
    question: "Can Hello Atithi assist in obtaining an Indian visa?",
    answer: "Yes, Hello Atithi will assist you in obtaining an Indian visa.",
  },
  {
    question:
      "How does Hello Atithi ensure safety and health during my trip to India??",
    answer:
      "Hello Atithi provides assistance in resolving safety and health issues during your trip to India. They also offer unbiased information to ensure that you have a safe and enjoyable trip.",
  },
  {
    question:
      "Does Hello Atithi provide personalized journey plans based on my interests?",
    answer: "No, Hello Atithi does not provides personalized journey plans.",
  },
  {
    question:
      "Can the journey plan be altered during the trip, and is there a limit to the number of alterations allowed?",
    answer:
      "Yes, the journey plan can be altered during the trip, and there is no limit to the number of alterations allowed.",
  },
  {
    question:
      "Does Hello Atithi assist in obtaining an Indian SIM card and opening a local bank account for me?",
    answer:
      "Yes, Hello Atithi will assist you in obtaining an Indian SIM card and opening a local bank account to pay as local. This is included in the India Readiness Kit.",
  },
  {
    question: "Does Hello Atithi provide basic Hindi language training to me?",
    answer:
      "Yes, Hello Atithi provides basic Hindi language training to you if you wish to learn it.",
  },
  {
    question:
      "How does Hello Atithi help me save up to 30% on travel expenses?",
    answer:
      "Hello Atithi will assist you in availing various travel-related services without paying commission to third-party vendors, which sometimes goes up to 30%. We also help minimize the commission on various other services.",
  },
  {
    question:
      "Is the 24/7 journey support available throughout India, and what kind of support does it provide?",
    answer:
      "Yes, the 24/7 journey support is available throughout India and provides various kinds of support such as resolving travel-related queries, emergency assistance, coordination with local authorities. and help you make informed decisions during your trip.",
  },
];

export default function FAQ() {
  // Set up an array of boolean values for each FAQ's open/close state
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(true));

  // Toggle function for each FAQ item based on its index
  const toggleAnswer = (index) => {
    setIsOpen((prev) => prev.map((open, i) => (i === index ? !open : open)));
  };

  return (
    <div className="font-author">
   
      <div className="h-[449px]">
        <Image src={image} alt="Services" className="h-[449px] object-cover" />
      </div>
      <div className="my-5 w-[90%] md:w-[80%] mx-auto">
        <h1 className="mt-16 mb-16 md:text-center text-[20px] md:text-4xl font-semibold text-main-red">
          YOUR BURNING QUESTIONS, ANSWERED
        </h1>
        <div className="flex flex-col gap-5 mt-5">
          {data.map((item, index) => (
            <div key={item.question}>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="mb-5 text-lg md:text-3xl font-medium">
                  {item.question}
                </h2>
                <SlArrowDown
                  className={`font-bold transition-transform duration-300 ${
                    isOpen[index] ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`transition-all duration-500 ${
                  isOpen[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[0px] h-0"
                }`}
              >
                {isOpen[index] && (
                  <p className="mb-5 text-base md:text-lg">{item.answer}</p>
                )}
              </div>
              <div
                className={`w-full border border-main-red transition-all duration-500 ease-in-out`}
              ></div>
            </div>
          ))}
          <Link href={"/trip-form"} className="mx-auto">
            <button className="px-4 py-4 w-fit mx-auto lg:px-[20.5px] text-[20px] sm:text-[18px] sm:py-[17px] font-medium bg-main-red text-white uppercase shadow-btn">
            START MY SAFE
JOURNEY
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden  mt-5 mb-16  md:flex items-center">
        <div className="w-[25%] border-[3px] border-main-red"></div>
        <div className=" w-[50%] border-2 border-main-red">
          <div className="py-5 px-10 text-[18px] italic text-center ">
            Can't find it? Don't worry. Just because it's not here, doesn't mean
            we can't do it. <br></br> WhatsApp us on +91 8630351715 <br></br> WE
            ARE HERE 24x7.
          </div>

          <div className="mb-[-28px] flex justify-center">
            <button className=" mx-auto shadow-btn hover:bg-red-800 rounded-[10px] px-10 py-3 uppercase text-[20px] font-medium text-white bg-main-red">
              Contact Us
            </button>
          </div>
        </div>
        <div className="w-[25%] border-[3px] border-main-red "></div>
      </div>
 
    </div>
  );
}
