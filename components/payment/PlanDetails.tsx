// "use client";
// import {  useState } from "react";

// import { useFormContext } from "@/context/FormContext";
// import CustomDropdown from "../../ui/dropdown/FormDropdown";
// import Button from "../../ui/Button/Button";
// import PaypalButton from "../helper/PaypalButton";
// import { useRouter } from "next/navigation";
// import { set } from "mongoose";

// const PlanDetails = () => {
//   const router = useRouter()
//   const { selectedPlan, formData,setFormData } = useFormContext();

//   const [selectedDays, setSelectedDays] = useState<number>(1);
//   const [errors, setErrors] = useState({});
//   const [payPalDisabled, setPayPalDisabled] = useState(true);

//   const days = Array.from({ length: 180 }, (_, index) => ({
//     label: `${index + 1} Day${index + 1 > 1 ? "s" : ""}`,
//     value: (index + 1).toString(),
//   }));

//   const handleSuccess = (details:any) => {
//     console.log("seccess")
//     router.push('/sucess')
//   }

//   const nameOnChange = (e) => {
//     if(e.target.value.trim().length >= 3){
//       setErrors((prevErrors) => ({ ...prevErrors, user_name: "" }));
//     }else{
//       setErrors((prevErrors) => ({ ...prevErrors, user_name: "Please enter a valid name" }));
//     }

//   }
//   const emailOnChange = (e) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (emailRegex.test(e.target.value.trim())) {
//         setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
//       }else{
//         setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter a valid email" }));
//       }
//   }

//   const daysHandler = (value) => {

//     setFormData((prevData: any) => ({ ...prevData, days: +value.value }));
//     setSelectedDays(+value.value);

//   }

//   return (
//     <div className="w-full sm:w-[80%]  mx-auto mt-8     rounded-[20px] ">
//       <div className="flex flex-col gap-1 ">
//         <h1 className=" font-semibold text-[20px] sm:text-[30px] tracking-wide">
//           Plan Details
//         </h1>

//         <div className="mt-5 flex flex-col gap-2">
//           <label className="text-base sm:text-[20px]">Your Name</label>
//           <input
//             type="text"
//             value={formData?.user_name}
//             onChange={nameOnChange}
//             placeholder="Full Name"
//             className="p-3 sm:w-[90%] border border-b-2 border-main-red placeholder:text-[20px]"
//           />
//         </div>
//         {errors.user_name && (
//           <p className="text-red-500 text-sm">{errors.user_name}</p>
//         )}

//         {/* Country input */}

//         <div className="mt-3 flex flex-col gap-2">
//           <label className="text-base sm:text-[20px]">Email</label>
//           <input
//             type="text"
//             value={formData?.email}
//             onChange={emailOnChange}
//             placeholder="example@gmail.com"
//             className="p-2 sm:w-[90%] border border-main-red placeholder:text-[18px]"
//           />
//         </div>
//         {errors.email && (
//           <p className="text-red-500 text-sm">{errors.email}</p>
//         )}

//         <div className="mt-3   w-fit">
//         {/* Days Dropdown */}
//         <label className="text-lg sm:text-[20px]">How Long for?</label>
//         <CustomDropdown
//           options={days.map((day) => ({
//             label: day.label,
//             value: day.value,
//           }))}
//           placeholder="Number of days in India"
//           // onOptionSelect={(value) => setSelectedDays(value)}
//           onOptionSelect={daysHandler}
//         />
//       </div>

//         <div className="mt-3 text-[20px]">Plan Charges</div>
//         <div className=" text-main-red text-[30px] font-semibold">
//           ${" "}
//           <span className="pl-2">
//             {selectedDays * selectedPlan?.price || 0}
//           </span>
//         </div>
//         <div className="my-5 w-full border-[0.1px] border-main-red"></div>
//         <div className="px-4 sm:px-0 flex justify-between text-lg font-normal">
//             <p>Total amount  (Inc. all taxes)</p>
//             <div className="  text-[25px]">
//                 ${" "}
//           <span className="pl-">
//             {selectedDays * selectedPlan?.price || 0}
//           </span>
//         </div>
//         </div>
//         {/* <Button className="mt-8 w-[90%] sm:w-[80%] py-[10px] mx-auto font-normal normal-case " text="Proceed to Pay"/> */}

//         <PaypalButton amount={selectedDays * selectedPlan?.price} isDisabled={false} onSuccess={handleSuccess}/>

//         <div className="mt-2 text-lg mx-auto">(Secured payment by PayPal)</div>
//       </div>
//     </div>
//   );
// };

// export default PlanDetails;

"use client";
import { useEffect, useState } from "react";
import { useFormContext } from "@/src/context/FormContext";
import CustomDropdown from "../../ui/dropdown/FormDropdown";
import PaypalButton from "../helper/PaypalButton";
import { useRouter } from "next/navigation";

const PlanDetails = () => {
  const router = useRouter();
  const { selectedPlan, formData, setFormData } = useFormContext();

  const [selectedDays, setSelectedDays] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<string>("1");
  const [errors, setErrors] = useState({});
  const [payPalDisabled, setPayPalDisabled] = useState(true);

  const days = Array.from({ length: 180 }, (_, index) => ({
    label: `${index + 1} Day${index + 1 > 1 ? "s" : ""}`,
    value: (index + 1).toString(),
  }));
  console.log("Form Data:", formData);
  console.log("Days:", selectedDays);
  console.log("PLan:", selectedPlan);

  useEffect(() => {
    const validateForm = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isNameValid = formData?.user_name?.trim().length >= 3;
      const isEmailValid = emailRegex.test(formData?.email || "");
      const isDaysValid = selectedDays > 0;

      setErrors({
        user_name: isNameValid ? "" : "Please enter a valid name",
        email: isEmailValid ? "" : "Please enter a valid email",
      });

      return isNameValid && isEmailValid && isDaysValid;
    };
    const isValid = validateForm();
    setTotalAmount(selectedDays * selectedPlan?.price);
    console.log("Total Amount", totalAmount);
    setPayPalDisabled(!isValid);
  }, [formData, selectedDays, selectedPlan?.price, totalAmount]);

  const handleSuccess = async (details: unknown) => {
    console.log("details: ", details);
    const updatedFormData = {
      ...formData,
      planDetails: selectedPlan,
      pay: true,
      paymentDetails: details,
      totalPrice: formData?.days * selectedPlan?.price,
    };

    console.log("Proceeding with Pay on Arrival...");
    console.log("Form Data:", formData);
    try {
      const resp = await fetch("/api/form/userTrip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      router.push("/sucess");
    }
  };

  const nameOnChange = (e) => {
    setFormData((prevData: unknown) => ({
      ...prevData,
      user_name: e.target.value,
    }));
  };

  const emailOnChange = (e) => {
    setFormData((prevData: unknown) => ({
      ...prevData,
      email: e.target.value,
    }));
  };

  const daysHandler = (value) => {
    setFormData((prevData: unknown) => ({ ...prevData, days: +value.value }));
    setSelectedDays(+value.value);
  };

  return (
    <div className="w-full sm:w-[80%] mx-auto mt-8 rounded-[20px]">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-[20px] sm:text-[30px] tracking-wide">
          Plan Details
        </h1>

        <div className="mt-5 flex flex-col gap-2">
          <label className="text-base sm:text-[20px]">Your Name</label>
          <input
            type="text"
            value={formData?.user_name}
            onChange={nameOnChange}
            placeholder="Full Name"
            className="p-3 sm:w-[90%] border border-b-2 border-main-red placeholder:text-[20px]"
          />
          {errors?.user_name && (
            <p className="text-red-500 text-sm">{errors?.user_name}</p>
          )}
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <label className="text-base sm:text-[20px]">Email</label>
          <input
            type="text"
            value={formData?.email}
            onChange={emailOnChange}
            placeholder="example@gmail.com"
            className="p-2 sm:w-[90%] border border-main-red placeholder:text-[18px]"
          />
          {errors?.email && (
            <p className="text-red-500 text-sm">{errors?.email}</p>
          )}
        </div>

        <div className="mt-3 w-fit">
          <label className="text-lg sm:text-[20px]">How Long for?</label>
          <CustomDropdown
            options={days.map((day) => ({
              label: day.label,
              value: day.value,
            }))}
            placeholder="Number of days in India"
            onOptionSelect={daysHandler}
          />
        </div>

        <div className="mt-3 text-[20px]">Plan Charges</div>
        <div className="text-main-red text-[30px] font-semibold">
          ${" "}
          <span className="pl-2">
            {selectedDays * selectedPlan?.price || 0}
          </span>
        </div>

        <div className="my-5 w-full border-[0.1px] border-main-red"></div>
        <div className="px-4 sm:px-0 flex justify-between text-lg font-normal">
          <p>Total amount (Inc. all taxes)</p>
          <div className="text-[25px]">
            $ <span>{selectedDays * selectedPlan?.price || 0}</span>
          </div>
        </div>

        <PaypalButton
          amount={selectedDays * selectedPlan?.price}
          isDisabled={payPalDisabled}
          onSuccess={handleSuccess}
        />

        <div className="mt-2 text-lg mx-auto">(Secured payment by PayPal)</div>
      </div>
    </div>
  );
};

export default PlanDetails;
