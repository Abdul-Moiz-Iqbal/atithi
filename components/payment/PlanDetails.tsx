"use client";
import {  useState } from "react";

import { useFormContext } from "@/context/FormContext";
import CustomDropdown from "../../ui/dropdown/FormDropdown";
import Button from "../../ui/Button/Button";

const PlanDetails = () => {
  const { selectedPlan } = useFormContext();

  const [selectedDays, setSelectedDays] = useState<number>(1);

  const days = Array.from({ length: 180 }, (_, index) => ({
    label: `${index + 1} Day${index + 1 > 1 ? "s" : ""}`,
    value: (index + 1).toString(),
  }));

  return (
    <div className="w-full sm:w-[80%]  mx-auto mt-8     rounded-[20px] ">
      <div className="flex flex-col gap-1 ">
        <h1 className=" font-semibold text-[20px] sm:text-[30px] tracking-wide">
          Plan Details
        </h1>

        <div className="mt-5 flex flex-col gap-2">
          <label className="text-base sm:text-[20px]">Your Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 sm:w-[90%] border border-b-2 border-main-red placeholder:text-[20px]"
          />
        </div>

        {/* Country input */}

        <div className="mt-3 flex flex-col gap-2">
          <label className="text-base sm:text-[20px]">Email</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="p-2 sm:w-[90%] border border-main-red placeholder:text-[18px]"
          />
        </div>

        <div className="mt-3   w-fit">
        {/* Days Dropdown */}
        <label className="text-lg sm:text-[20px]">How Long for?</label>
        <CustomDropdown
          options={days.map((day) => ({
            label: day.label,
            value: day.value,
          }))}
          placeholder="Number of days in India"
          onOptionSelect={(value) => setSelectedDays(value)}
        />
      </div>
   
        <div className="mt-3 text-[20px]">Plan Charges</div>
        <div className=" text-main-red text-[30px] font-semibold">
          ${" "}
          <span className="pl-2">
            {selectedDays * selectedPlan?.price || 0}
          </span>
        </div>
        <div className="my-5 w-full border-[0.1px] border-main-red"></div>
        <div className="px-4 sm:px-0 flex justify-between text-lg font-normal">
            <p>Total amount  (Inc. all taxes)</p>
            <div className="  text-[25px]">
                ${" "}
          <span className="pl-">
            {selectedDays * selectedPlan?.price || 0}
          </span>
        </div>
        </div>
        <Button className="mt-8 w-[90%] sm:w-[80%] py-[10px] mx-auto font-normal normal-case " text="Proceed to Pay"/>
        <div className="mt-2 text-lg mx-auto">(Secured payment by PayPal)</div>
      </div>
    </div>
  );
};

export default PlanDetails;
