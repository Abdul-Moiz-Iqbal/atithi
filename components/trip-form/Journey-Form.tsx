// "use client";
// import { useEffect, useState } from "react";
// import ShadowCard from "../../ui/Card/ShadowCard";
// import { TiArrowSortedDown } from "react-icons/ti";

// const JourneyForm = () => {
//   const [countries, setCountries] = useState<{ label: string; value: string }[]>([]);
//   const [selectedCountry, setSelectedCountry] = useState<string>("");
//   const [userCountry, setUserCountry] = useState<string>("");
//   const [selectedMonth, setSelectedMonth] = useState<string>("");
//   const [selectedYear, setSelectedYear] = useState<string>("");

//   useEffect(() => {
//     fetch("https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code")
//       .then((response) => response.json())
//       .then((data) => {
//         setCountries(data.countries);
//         setUserCountry(data.userSelectValue.label);
//         console.log(data);
//       })
//       .catch((error) => console.error("Error fetching countries:", error));
//   }, []);

//   const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCountry(e.target.value);
//   };

//   const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedMonth(e.target.value);
//   };

//   const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedYear(e.target.value);
//   };

//   // Generate months and years for dropdowns
//   const months = [
//     { label: "January", value: "01" },
//     { label: "February", value: "02" },
//     { label: "March", value: "03" },
//     { label: "April", value: "04" },
//     { label: "May", value: "05" },
//     { label: "June", value: "06" },
//     { label: "July", value: "07" },
//     { label: "August", value: "08" },
//     { label: "September", value: "09" },
//     { label: "October", value: "10" },
//     { label: "November", value: "11" },
//     { label: "December", value: "12" },
//   ];

//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 10 }, (_, index) => ({
//     label: (currentYear + index).toString(),
//     value: (currentYear + index).toString(),
//   }));

//   return (
//     <ShadowCard className={"w-[80%] mx-auto mt-10 p-10 rounded-[20px] shadow-card-red"}>
//       <div className="flex flex-col gap-6">
//         <h1 className="uppercase font-semibold text-[35px] tracking-wide">Journey Details</h1>
//         <div className="w-full border-[0.1px] border-main-red"></div>

//         <div className="flex flex-col gap-4">
//           <label className="text-[20px]">Select your country</label>
//           <div className="w-fit flex items-center border border-main-red rounded-md overflow-hidden">
//             <select
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               className="appearance-none w-full p-2 text-[20px] pr-10 bg-white"
//             >
//               <option value={userCountry}>{userCountry}</option>
//               {countries.map((country) => (
//                 <option key={country.value} value={country.value}>
//                   {country.label}
//                 </option>
//               ))}
//             </select>
//             <div className="flex items-center p-2 text-gray-600">
//               <TiArrowSortedDown className="text-main-red text-2xl"/>
//             </div>
//           </div>
//         </div>
//         <label className="text-[20px]">When would you like to go?</label>
//         <div className="flex flex-row gap-5">

//           <div className="flex flex-col gap-4">
//             <select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               className="p-2 border border-main-red text-[20px]"
//             >
//               <option value="">Select Month</option>
//               {months.map((month) => (
//                 <option key={month.value} value={month.value}>
//                   {month.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex flex-col gap-4">
//             <select
//               value={selectedYear}
//               onChange={handleYearChange}
//               className="p-2 border border-main-red text-[20px]"
//             >
//               <option value="">Select Year</option>
//               {years.map((year) => (
//                 <option key={year.value} value={year.value}>
//                   {year.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//       </div>
//     </ShadowCard>
//   );
// };

// export default JourneyForm;

"use client";
import { useEffect, useState } from "react";
import ShadowCard from "../../ui/Card/ShadowCard";
import { TiArrowSortedDown } from "react-icons/ti";
import { useFormContext } from "@/context/FormContext";

import PricingCard from "../PricingCard";
import FormDropdown from "../../ui/dropdown/FormDropdown";

const JourneyForm = () => {
  const { countryCode } = useFormContext();
  console.log("From j", countryCode);

  const [states, setStates] = useState<
    { id: string; name: string; iso2: string }[]
  >([]);

  const [selectedState, setSelectedState] = useState<string>("");

  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  useEffect(() => {
    if (countryCode) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
        {
          headers: {
            "X-CSCAPI-KEY":
              "YUN4SG5oZWFUZmJ6cTJlVEdUcmtQTmFkRDVyNEpUQUF1YVN3Vk5EMg==", // Replace with actual API key if needed
          },
          redirect: "follow",
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setStates([...data]);
          console.log("states:", data);
        })
        .catch((error) => console.error("Error fetching countries:", error));
    }
  }, [countryCode]);
  


  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const months = [
    { label: "January", value: "01" },
    { label: "February", value: "02" },
    { label: "March", value: "03" },
    { label: "April", value: "04" },
    { label: "May", value: "05" },
    { label: "June", value: "06" },
    { label: "July", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => ({
    label: (currentYear + index).toString(),
    value: (currentYear + index).toString(),
  }));

  return (
    <ShadowCard
      className={"sm:w-[80%] mx-auto mt-10 py-10 px-5 sm:p-10 rounded-[20px] shadow-card-red"}
    >
      <div className="flex flex-col gap-2">
        <h1 className="uppercase font-semibold text-[20px] sm:text-[35px] tracking-wide">
          Journey Details
        </h1>
        <div className="w-full border-[0.1px] border-main-red"></div>

        {/* Country and State Dropdowns */}

        <div className="flex flex-col gap-4 mt-4">
          <label className="text-base sm:text-[20px] ">Select your state/province</label>
          <div className="w-fit flex items-center border border-main-red  overflow-hidden cursor-pointer">
            <select
              value={selectedState}
              onChange={handleStateChange}
              className="appearance-none w-full p-2 text-[20px] pr-10 bg-white cursor-pointer"
            >
              <option value="" className="">Select State/Province</option>
              {states.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
            <div className="flex items-center p-2 text-gray-600">
              <TiArrowSortedDown className="text-main-red text-2xl" />
            </div>
          </div>
        </div>

        {/* Date Selection */}
        <label className="text-base sm:text-[20px]">When would you like to go?</label>

        {/* new drop dwon   */}
        <div className="flex flex-row gap-5">
          {/* Month Dropdown */}
          <div className="w-fit flex items-center border border-main-red rounded-md overflow-hidden cursor-pointer  ">
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className="appearance-none w-full p-2 text-[20px] pr-10 bg-white cursor-pointer"
            >
              <option value="">Select Month</option>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
            <div className="flex items-center p-2 text-gray-600">
              <TiArrowSortedDown className="text-main-red text-2xl" />
            </div>
          </div>

          {/* Year Dropdown */}
          <div className="w-fit flex items-center border border-main-red rounded-md overflow-hidden cursor-pointer">
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="appearance-none w-full p-2 text-[20px] pr-10 bg-white cursor-pointer"
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
            <div className="flex items-center p-2 text-gray-600">
              <TiArrowSortedDown className="text-main-red text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <PricingCard className="w-full mt-8 mb-10" />
      <label className=" text-base sm:text-[20px]">How Long for?</label>

      <FormDropdown />

      {/* <label className="mt-10 bg-red-50 text-[20px]">Plan Charges</label> */}
      <div className="mt-7  text-[20px]">Plan Charges</div>
      <div className="mt-3 text-main-red text-[30px] font-semibold ">
        $ <span className="pl-2">80</span>
      </div>
      <div className="mt-4  text-[20px]">Any Other Comments? </div>
      <textarea
        placeholder="Any differently abled or elderly traveler, any do’s or don'ts, any specific requirement"
        rows={7}
        className="w-full sm:w-[60%] mt-6 p-2 border border-main-red placeholder:text-[20px]"
      ></textarea>
      
    </ShadowCard>
  );
};

export default JourneyForm;
