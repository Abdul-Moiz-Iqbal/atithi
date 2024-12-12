
// "use client";
// import { useEffect, useState } from "react";
// import ShadowCard from "../../ui/Card/ShadowCard";
// import { useFormContext } from "@/context/FormContext";


// const TravelerForm = () => {

//   const { setCountryCode } = useFormContext();
//   const [userCountry, setUserCountry] = useState<string>("Select Country");
 

//   useEffect(() => {
//     fetch("https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code")
//       .then((response) => response.json())
//       .then((data) => {
//         setCountryCode(data.userSelectValue.value);
//         setUserCountry(data.userSelectValue.label);
//         console.log(data);
//       })
//       .catch((error) => console.error("Error fetching countries:", error));
//   }, [setCountryCode]);

//   // const handleCountryChange = (value) => {
//   //   setCountryCode(value);
//   // };

//   return (
//     <ShadowCard className="sm:w-[80%] mx-auto mt-5 sm:mt-10 py-10 px-5 sm:p-10 rounded-[20px] shadow-card-red">
//       <div className="flex flex-col gap-1">
//         <h1 className="uppercase font-semibold text-[20px] sm:text-[35px] tracking-wide">
//           Traveller Details
//         </h1>
//         <div className="w-full border-[0.1px] border-main-red"></div>

//         <div className="mt-5 flex flex-col gap-5">
//           <label className="text-base sm:text-[20px]">Your Name</label>
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="p-2 sm:w-[60%] border border-main-red placeholder:text-[18px]"
//           />
//         </div>

//         {/* Country input */}
     
//         <div className="mt-5 flex flex-col gap-5">
//           <label className="text-base sm:text-[20px]">Your Country</label>
//           <input
//             type="text"
//             placeholder="Country Name"
//             value={userCountry}
//             onChange={(e) => setUserCountry(e.target.value)}
//             className="p-2 w-fit border border-main-red placeholder:text-[18px]"
//           />
//         </div>

//         <div className="mt-5 flex flex-col gap-3">
//           <label className="text-base sm:text-[20px]">Email address</label>
//           <input
//             type="text"
//             placeholder="example@gmail.com"
//             className="p-2 sm:w-[60%] border border-main-red placeholder:text-[18px]"
//           />
//         </div>
//       </div>
//     </ShadowCard>
//   );
// };

// export default TravelerForm;
"use client";
import { useEffect, useState } from "react";
import ShadowCard from "../../ui/Card/ShadowCard";
import { useFormContext } from "@/src/context/FormContext";

const TravelerForm = () => {
  const { setCountryCode, setFormData,formData, formError, setFormError } = useFormContext();

  const [userCountry, setUserCountry] = useState<string>("Select Country");

  

  // Fetch country list and default country on load
  useEffect(() => {
    fetch("https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch countries");
        return response.json();
      })
      .then((data) => {
        
        setCountryCode(data.userSelectValue.value);
        setFormData((prevData: unknown) => ({ ...prevData, country: data.userSelectValue.label }));
        setUserCountry(data.userSelectValue.label);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setFormError((prevErrors) => ({
          ...prevErrors,
          countryFetch: "Unable to load country data. Please try again later.",
        }));
      });
  }, [setFormData,setFormError,setCountryCode]);

  // Update form data in context
  const handleInputChange = (key: string, value: string) => {
    setFormData((prevData: unknown) => ({ ...prevData, [key]: value }));

    // Dynamic error clearing
    if (key === "user_name" && value.trim().length >= 3) {
      setFormError((prevErrors) => ({ ...prevErrors, user_name: "" }));
    }
    if (key === "country" && value.trim().length >= 2) {
      setFormError((prevErrors) => ({ ...prevErrors, country: "" }));
    }
    if (key === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value.trim())) {
        setFormError((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    }
    
  };

  // Validate fields
  const validateField = (key: string, value: string) => {
    if (key === "user_name") {
      if (!value.trim()) return "Name is required.";
      if (value.length < 3) return "Name must be at least 3 characters.";
      // if(value.length >=3 ) return "";
    }
    if (key === "country") {
      if (!value.trim() || value === "Select Country") return "Country is required.";
    }
    if (key === "email") {
      if (!value.trim()) return "Email is required.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address.";
    }
    return "";
  };

  // Blur handler to validate fields
  const handleBlur = (key: string, value: string) => {
    const error = validateField(key, value);
    if (error) {
      setFormError((prevErrors) => ({ ...prevErrors, [key]: error }));
    }
  };

  return (
    <ShadowCard className="sm:w-[80%] mx-auto mt-5 sm:mt-10 py-10 px-5 sm:p-10 rounded-[20px] shadow-card-red">
      <div className="flex flex-col gap-1">
        <h1 className="uppercase font-semibold text-[20px] sm:text-[35px] tracking-wide">
          Traveller Details
        </h1>
        <div className="w-full border-[0.1px] border-main-red"></div>

        {/* Name Input */}
        <div className="mt-5 flex flex-col gap-1">
          <label className="text-base sm:text-[20px]">Your Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={formData?.user_name}
            className={`p-2 sm:w-[60%] border ${
              formError?.user_name ? "border-red-500" : "border-main-red"
            } placeholder:text-[18px]`}
            onChange={(e) => handleInputChange("user_name", e.target.value)}
            onBlur={(e) => handleBlur("user_name", e.target.value)}
          />
          {formError?.user_name && (
            <p className="text-red-500 text-sm mt-1">{formError.user_name}</p>
          )}
        </div>

        {/* Country Input */}
        <div className="mt-5 flex flex-col gap-1">
          <label className="text-base sm:text-[20px]">Your Country</label>
          <input
            type="text"
            placeholder="Country Name"
            value={userCountry}
            onChange={(e) => {
              setUserCountry(e.target.value);
              handleInputChange("country", e.target.value);
            }}
            onBlur={() => {
              handleBlur("country", userCountry);
            }}
            className={`p-2 w-fit border placeholder:text-[18px] border-main-red`}
          />
          {formError?.country && (
            <p className="text-red-500 text-sm mt-1">{formError.country}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mt-5 flex flex-col gap-1">
          <label className="text-base sm:text-[20px]">Email Address</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={formData?.email}
            className={`p-2 sm:w-[60%] border  placeholder:text-[18px] border-main-red`}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onBlur={(e) => handleBlur("email", e.target.value)}
          />
          {formError?.email && (
            <p className="text-red-500 text-sm mt-1">{formError.email}</p>
          )}
        </div>
      </div>
    </ShadowCard>
  );
};

export default TravelerForm;
