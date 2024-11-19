"use client";

import Image from "next/image";
import image from "../../../public/images/sucess.png";
const Sucess = () => {
  return (
    <div className="font-author  px-5 sm:px-0">
      <div className="my-8 sm:my-20  h-[60vh] sm:h-[70vh]  sm:w-[80%] mx-auto sm:py-10 sm flex flex-col justify-end items-center shadow-card-red rounded-[20px]">
        <div className="flex flex-col items-center">
          <Image src={image} width={78} height={78} alt="Servies" />
          <h1 className="mt-3 font-semibold text-lg sm:text-[30px] tracking-[1.5px] uppercase text-center">
            Details Submitted
          </h1>
          <p className="mt-1 font-light text-base sm:text-lg">
            We will get back to you in next 12 hrs.{" "}
          </p>
        </div>

        <button className="mt-[20%] mb-10 sm:px-32 px-10 py-1 sm:py-[10px] sm:mb-0 sm:mt-[10%] text-white text-lg  bg-main-red">
          Return to Home Page
        </button>
      </div>
    </div>
  );
};

export default Sucess;
