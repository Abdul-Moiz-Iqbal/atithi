"use client";
import {  useState } from "react";

import { useFormContext } from "@/context/FormContext";
import CustomDropdown from "../../ui/dropdown/FormDropdown";

const TravelerForm = () => {
  const { selectedPlan } = useFormContext();

  const [selectedDays, setSelectedDays] = useState<number>(1);

  const days = Array.from({ length: 180 }, (_, index) => ({
    label: `${index + 1} Day${index + 1 > 1 ? "s" : ""}`,
    value: (index + 1).toString(),
  }));

  return (
    <div className="sm:w-[80%] mx-auto mt-5 sm:mt-10 py-10 px-5 sm:p-10 rounded-[20px] ">
      <div className="flex flex-col gap-1">
        <h1 className=" font-semibold text-[20px] sm:text-[30px] tracking-wide">
          Plan Details
        </h1>

        <div className="mt-5 flex flex-col gap-2">
          <label className="text-base sm:text-[20px]">Your Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 sm:w-[60%] border border-main-red placeholder:text-[18px]"
          />
        </div>

        {/* Country input */}

        <div className="mt-3 flex flex-col gap-2">
          <label className="text-base sm:text-[20px]">Email</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="p-2 w-fit border border-main-red placeholder:text-[18px]"
          />
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <label className="text-base sm:text-[20px]">How long for?</label>
          <CustomDropdown
            options={days.map((day) => ({
              label: day.label,
              value: day.value,
            }))}
            placeholder="Number of days in India"
            onOptionSelect={(value) => setSelectedDays(value)}
          />
        </div>
        <div className="mt-7 text-[20px]">Plan Charges</div>
        <div className=" text-main-red text-[30px] font-semibold">
          ${" "}
          <span className="pl-2">
            {selectedDays * selectedPlan?.price || 0}
          </span>
        </div>
        <div className="w-full border-[0.1px] border-main-red"></div>
        <div className="flex justify-between">
            <p>Total amount  (Inc. all taxes)</p>
            <div className=" text-main-red text-[30px] font-semibold">
          ${" "}
          <span className="pl-2">
            {selectedDays * selectedPlan?.price || 0}
          </span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TravelerForm;