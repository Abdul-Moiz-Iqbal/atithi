"use client";
import { FormContextProvider } from "@/context/FormContext";
import Navbar from "../../../components/Navbar";
import NavlinkBar from "../../../components/NavlinkBar";

import TravelerForm from "../../../components/trip-form/TravlerForm";


const Payment = () => {
  return (
    <div className="font-author">
      <Navbar />
      <NavlinkBar />
      <FormContextProvider>
        <TravelerForm />
        
        <div className="my-20 flex justify-evenly">
          <button className="px-5 py-2 lg:px-[20.5px] text-[14px] sm:text-[18px] sm:py-[17px] font-semibold border-2 hover:bg-[rgba(255,0,0,0.1)] border-main-red  text-main-red uppercase shadow-btn">
            Submit & Pay on arrival
          </button>
          <button className="px-5 py-2 lg:px-[20.5px] text-[14px] sm:text-[18px] sm:py-[17px] font-semibold border-2 hover:bg-[rgba(255,0,0,0.1)] border-main-red  text-main-red uppercase shadow-btn">
            Submit & Pay on now
          </button>
        </div>
        
      </FormContextProvider>
      
    </div>
  );
};

export default Payment;
