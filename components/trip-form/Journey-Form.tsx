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

// "use client";
// import { useEffect, useState } from "react";
// import ShadowCard from "../../ui/Card/ShadowCard";
// import { TiArrowSortedDown } from "react-icons/ti";
// import { useFormContext } from "@/context/FormContext";

// import PricingCard from "../PricingCard";
// import FormDropdown from "../../ui/dropdown/FormDropdown";

// const days = [
//   { days: 1 },
//   { days: 2 },
//   { days: 3 },
//   { days: 4 },
//   { days: 5 },
//   { days: 6 },
// ];

// const JourneyForm = () => {
//   const { countryCode } = useFormContext();
//   console.log("From j", countryCode);

//   const [states, setStates] = useState<
//     { id: string; name: string; iso2: string }[]
//   >([]);

//   const [selectedState, setSelectedState] = useState<string>("");

//   const [selectedMonth, setSelectedMonth] = useState<string>("");
//   const [selectedYear, setSelectedYear] = useState<string>("");

//   useEffect(() => {
//     if (countryCode) {
//       fetch(
//         `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
//         {
//           headers: {
//             "X-CSCAPI-KEY":
//               "YUN4SG5oZWFUZmJ6cTJlVEdUcmtQTmFkRDVyNEpUQUF1YVN3Vk5EMg==", // Replace with actual API key if needed
//           },
//           redirect: "follow",
//           method: "GET",
//         }
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setStates([...data]);
//           console.log("states:", data);
//         })
//         .catch((error) => console.error("Error fetching countries:", error));
//     }
//   }, [countryCode]);

//   const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedState(e.target.value);
//   };

//   const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedMonth(e.target.value);
//   };

//   const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedYear(e.target.value);
//   };

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
//     <ShadowCard
//       className={"sm:w-[80%] mx-auto mt-10 py-10 px-5 sm:p-10 rounded-[20px] shadow-card-red"}
//     >
//       <div className="flex flex-col gap-2">
//         <h1 className="uppercase font-semibold text-[20px] sm:text-[35px] tracking-wide">
//           Journey Details
//         </h1>
//         <div className="w-full border-[0.1px] border-main-red"></div>

//         {/* Country and State Dropdowns */}

//         <div className="flex flex-col gap-4 mt-4">
//           <label className="text-base sm:text-[20px] ">Select your state/province</label>
//             <FormDropdown options={ months} placeholder={"Months"}/>
//           <div className="w-fit flex items-center border border-main-red  overflow-hidden cursor-pointer">

//             <select
//               value={selectedState}
//               onChange={handleStateChange}
//               className="appearance-none w-full p-2 text-[20px] pr-10 bg-white cursor-pointer"
//             >
//               <option value="" className="">Select State/Province</option>
//               {states.map((state) => (
//                 <option key={state.name} value={state.name}>
//                   {state.name}
//                 </option>
//               ))}
//             </select>
//             <div className="flex items-center p-2 text-gray-600">
//               <TiArrowSortedDown className="text-main-red text-2xl" />
//             </div>
//           </div>
//         </div>

//         {/* Date Selection */}
//         <label className="text-base sm:text-[20px]">When would you like to go?</label>

//         {/* new drop dwon   */}
//         <div className="flex flex-row gap-5">
//           {/* Month Dropdown */}
//           <FormDropdown options={ months} placeholder={"Months"}/>
//           {/* <div className="w-fit flex items-center border border-main-red rounded-md overflow-hidden cursor-pointer  ">
//             <select
//               value={selectedMonth}
//               onChange={handleMonthChange}
//               className="appearance-none w-full p-2 text-[20px] pr-10 bg-white cursor-pointer"
//             >
//               <option value="">Select Month</option>
//               {months.map((month) => (
//                 <option key={month.value} value={month.value}>
//                   {month.label}
//                 </option>
//               ))}
//             </select>
//             <div className="flex items-center p-2 text-gray-600">
//               <TiArrowSortedDown className="text-main-red text-2xl" />
//             </div>
//           </div> */}

//           {/* Year Dropdown */}
//           <div className="w-fit flex items-center border border-main-red rounded-md overflow-hidden cursor-pointer">
//             <select
//               value={selectedYear}
//               onChange={handleYearChange}
//               className="appearance-none w-full p-2 text-[20px] pr-10 bg-white cursor-pointer"
//             >
//               <option value="">Select Year</option>
//               {years.map((year) => (
//                 <option key={year.value} value={year.value}>
//                   {year.label}
//                 </option>
//               ))}
//             </select>
//             <div className="flex items-center p-2 text-gray-600">
//               <TiArrowSortedDown className="text-main-red text-2xl" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <PricingCard className="w-full mt-8 mb-10" />
//       <label className=" text-base sm:text-[20px]">How Long for?</label>

//       <FormDropdown options={days}/>

//       {/* <label className="mt-10 bg-red-50 text-[20px]">Plan Charges</label> */}
//       <div className="mt-7  text-[20px]">Plan Charges</div>
//       <div className="mt-3 text-main-red text-[30px] font-semibold ">
//         $ <span className="pl-2">80</span>
//       </div>
//       <div className="mt-4  text-[20px]">Any Other Comments? </div>
//       <textarea
//         placeholder="Any differently abled or elderly traveler, any do’s or don'ts, any specific requirement"
//         rows={7}
//         className="w-full sm:w-[60%] mt-6 p-2 border border-main-red placeholder:text-[20px]"
//       ></textarea>

//     </ShadowCard>
//   );
// };

// export default JourneyForm;

// "use client";
// import { useEffect, useState } from "react";
// import ShadowCard from "../../ui/Card/ShadowCard";
// import { useFormContext } from "@/context/FormContext";
// import PricingCard from "../PricingCard";
// import CustomDropdown from "../../ui/dropdown/FormDropdown"; // Import CustomDropdown
// import MultiSelectDropdown from "../../ui/dropdown/MultiSelectDropDown";

// const days = [
//   { days: 1 },
//   { days: 2 },
//   { days: 3 },
//   { days: 4 },
//   { days: 5 },
//   { days: 6 },
// ];

// const months = [
//   { label: "January", value: "01" },
//   { label: "February", value: "02" },
//   { label: "March", value: "03" },
//   { label: "April", value: "04" },
//   { label: "May", value: "05" },
//   { label: "June", value: "06" },
//   { label: "July", value: "07" },
//   { label: "August", value: "08" },
//   { label: "September", value: "09" },
//   { label: "October", value: "10" },
//   { label: "November", value: "11" },
//   { label: "December", value: "12" },
// ];

// const JourneyForm = () => {
//   const { countryCode } = useFormContext();
//   const [states, setStates] = useState([]);
//   // const [selectedState, setSelectedState] = useState("");
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [selectedStates, setSelectedStates] = useState([]);
//   console.log(selectedMonth,selectedYear,selectedStates);

//   useEffect(() => {
//     if (countryCode) {
//       fetch(
//         `https://api.countrystatecity.in/v1/countries/IN/states`,
//         {
//           headers: {
//             "X-CSCAPI-KEY":
//               "YUN4SG5oZWFUZmJ6cTJlVEdUcmtQTmFkRDVyNEpUQUF1YVN3Vk5EMg==", // Replace with actual API key
//           },
//           redirect: "follow",
//           method: "GET",
//         }
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           if (Array.isArray(data)) {
//             setStates(data); // Only set if data is an array
//           } else {
//             setStates([]); // Set an empty array if data is not in the expected format
//             console.error("Unexpected data format:", data);
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching states:", error);
//           setStates([]); // Set empty array on error
//         });
//     }
//   }, [countryCode]);

//   // const currentYear = new Date().getFullYear();
//   // const years = Array.from({ length: 10 }, (_, index) => ({
//   //   label: (currentYear + index).toString(),
//   //   value: (currentYear + index).toString(),
//   // }));

//   const handleStateChange = (selected) => {
//     setSelectedStates(selected);
//     console.log("Selected States:", selected);
//   };
//   const years = [
    
//     { label: "2024", value: "2024" },
//     { label: "2025", value: "2025" }, 
//     { label: "2026", value: "2026" }, 
//   ]
//   return (
//     <ShadowCard className="sm:w-[80%] mx-auto mt-5 sm:mt-10 py-10 px-5 sm:p-10 rounded-[20px] shadow-card-red">
//       <div className="flex flex-col gap-2">
//         <h1 className="uppercase font-semibold text-[20px] sm:text-[35px] tracking-wide">
//           Journey Details
//         </h1>
//         <div className="w-full border-[0.1px] border-main-red"></div>

//         {/* State/Province Dropdown */}
//         <div className="mt-4  w-fit">
//           <label className=" text-base sm:text-[20px] mt-4">
//             Where are you going?[Can Select Multiple]
//           </label>
        
//           <div className="mt-4">
//           <MultiSelectDropdown
//               options={states.map((state) => ({
//                 label: state.name,
//                 value: state.name,
//               }))}
//             placeholder="Select State"
//             onOptionsChange={handleStateChange}
//           />
//           </div>
          
          
//         </div>
//         {/* Date Selection */}
//         <label className="text-base sm:text-[20px] mt-4">
//           When would you like to go?
//         </label>
//         <div className="flex flex-row gap-2 md:gap-10">
//           {/* Month Dropdown */}
//           <CustomDropdown
//             options={months.map((month) => ({
//               label: month.label,
//               value: month.value,
//             }))}
//             placeholder="Select month"
//             onOptionSelect={(value) => setSelectedMonth(value)}
//           />

//           {/* Year Dropdown */}
//           <CustomDropdown
//             options={years.map((year) => ({
//               label: year.label,
//               value: year.value,
//             }))}
//             placeholder="Select a year"
//             onOptionSelect={(value) => setSelectedYear(value)}
//           />
//         </div>
//       </div>

//       <PricingCard className="w-full mt-6 mb-10" />

//       <div className=" mt-10 sm:mt-20 w-fit">
//       {/* Days Dropdown */}
//       <label className=" text-lg sm:text-[20px] ">How Long for?</label>
//       <CustomDropdown
//         options={days.map((day) => ({
//           label: `0${day.days} `,
//           value: day.days,
//         }))}
//         placeholder="Select Duration"
//         onOptionSelect={(value) => console.log(value)}
//       />
//       </div>


//       <div className="mt-7 text-[20px]">Plan Charges</div>
//       <div className="mt-3 text-main-red text-[30px] font-semibold">
//         $ <span className="pl-2">80</span>
//       </div>
      
//       {/* Additional Information */}
//       <div className="mt-4 text-[20px]">Any Other Comments?</div>
//       <textarea
//         placeholder="Any differently abled or elderly traveler, any do’s or don'ts, any specific requirement"
//         rows={7}
//         className="w-full sm:w-[60%] mt-6 p-2 border-2 border-main-red placeholder:text-[20px]"
//       ></textarea>
//     </ShadowCard>
//   );
// };

// export default JourneyForm;

"use client";
import { useEffect, useState } from "react";
import ShadowCard from "../../ui/Card/ShadowCard";
import { useFormContext } from "@/context/FormContext";
import PricingCard from "../PricingCard";
import CustomDropdown from "../../ui/dropdown/FormDropdown"; // Import CustomDropdown
import MultiSelectDropdown from "../../ui/dropdown/MultiSelectDropDown";


// const JourneyForm = () => {
//   const { countryCode,selectedPlan } = useFormContext();
//   const [states, setStates] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [selectedStates, setSelectedStates] = useState([]);
//   const [selectedDays,setSelectedDays] = useState<number>(0);
//   console.log(selectedMonth,selectedStates)
//   console.log("Price:",selectedDays*selectedPlan?.price)

//   useEffect(() => {
//     if (countryCode) {
//       fetch(`https://api.countrystatecity.in/v1/countries/IN/states`, {
//         headers: {
//           "X-CSCAPI-KEY": "YUN4SG5oZWFUZmJ6cTJlVEdUcmtQTmFkRDVyNEpUQUF1YVN3Vk5EMg==",
//         },
//         redirect: "follow",
//         method: "GET",
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (Array.isArray(data)) {
//             setStates(data);
//           } else {
//             setStates([]);
//             console.error("Unexpected data format:", data);
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching states:", error);
//           setStates([]);
//         });
//     }
//   }, [countryCode]);

//   const currentYear = new Date().getFullYear();
//   const currentMonth = new Date().getMonth();

//   const years = Array.from({ length: 3 }, (_, index) => ({
//     label: (currentYear + index).toString(),
//     value: (currentYear + index).toString(),
//   }));

//   const filteredMonths = selectedYear
//     ? selectedYear === currentYear.toString()
//       ? months.slice(currentMonth) // Show remaining months for the current year
//       : months // Show all months for future years
//     : months;

//   const days = Array.from({ length: 180 }, (_, index) => ({
//     label: `${index + 1} Day${index + 1 > 1 ? "s" : ""}`,
//     value: (index + 1).toString(),
//   }));

//   const handleStateChange = (selected) => {
//     setSelectedStates(selected);
//     console.log("Selected States:", selected);
//   };

//   return (
//     <ShadowCard className="sm:w-[80%] mx-auto mt-5 sm:mt-10 py-10 px-5 sm:p-10 rounded-[20px] shadow-card-red">
//       <div className="flex flex-col gap-2">
//         <h1 className="uppercase font-semibold text-[20px] sm:text-[35px] tracking-wide">
//           Journey Details
//         </h1>
//         <div className="w-full border-[0.1px] border-main-red"></div>

//         {/* State/Province Dropdown */}
//         <div className="mt-4  w-fit">
//           <label className=" text-base sm:text-[20px] mt-4">
//             Where are you going?[Can Select Multiple]
//           </label>
//           <div className="mt-4">
//             <MultiSelectDropdown
//               options={states.map((state) => ({
//                 label: state.name,
//                 value: state.name,
//               }))}
//               placeholder="Select State"
//               onOptionsChange={handleStateChange}
//             />
//           </div>
//         </div>

//         {/* Date Selection */}
//         <label className="text-base sm:text-[20px] mt-4">
//           When would you like to go?
//         </label>
//         <div className="flex flex-row gap-2 md:gap-10">
//           {/* Month Dropdown */}
//           <CustomDropdown
//             options={filteredMonths.map((month) => ({
//               label: month.label,
//               value: month.value,
//             }))}
//             placeholder="Select month"
//             onOptionSelect={(value) => setSelectedMonth(value)}
//           />

//           {/* Year Dropdown */}
//           <CustomDropdown
//             options={years.map((year) => ({
//               label: year.label,
//               value: year.value,
//             }))}
//             placeholder="Select a year"
//             onOptionSelect={(value) => setSelectedYear(value)}
//           />
//         </div>
//       </div>

//       <PricingCard className="w-full mt-6 mb-10" />

//       <div className=" mt-10 sm:mt-20 w-fit">
//         {/* Days Dropdown */}
//         <label className=" text-lg sm:text-[20px] ">How Long for?</label>
//         <CustomDropdown
//           options={days.map((day) => ({
//             label: day.label,
//             value: day.value,
//           }))}
//           placeholder="Select Duration"
//           onOptionSelect={(value) => setSelectedDays}
//         />
//       </div>

//       <div className="mt-7 text-[20px]">Plan Charges</div>
//       <div className="mt-3 text-main-red text-[30px] font-semibold">
//         $ <span className="pl-2">{setSelectedDays * selectedPlan?.price}</span>
//       </div>

//       {/* Additional Information */}
//       <div className="mt-4 text-[20px]">Any Other Comments?</div>
//       <textarea
//         placeholder="Any differently abled or elderly traveler, any do’s or don'ts, any specific requirement"
//         rows={7}
//         className="w-full sm:w-[60%] mt-6 p-2 border-2 border-main-red placeholder:text-[20px]"
//       ></textarea>
//     </ShadowCard>
//   );
// };

// export default JourneyForm;

const regions = [
  {
    region: "North East States",
    states: [
      "Arunachal Pradesh",
      "Assam",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Tripura",
    ],
  },
  {
    region: "Northern States",
    states: [
      "Jammu & Kashmir",
      "Himachal Pradesh",
      "Punjab",
      "Haryana",
      "Uttarakhand",
      "Delhi",
    ],
  },
  {
    region: "Central States",
    states: ["Uttar Pradesh", "Madhya Pradesh", "Chhattisgarh"],
  },
  {
    region: "Western States",
    states: ["Rajasthan", "Gujarat", "Maharashtra", "Goa"],
  },
  {
    region: "Eastern States",
    states: ["West Bengal", "Odisha", "Bihar", "Jharkhand"],
  },
  {
    region: "Southern States",
    states: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "Telangana"],
  },
  {
    region: "Union Territories",
    states: [
      "Andaman & Nicobar Islands",
      "Chandigarh",
      "Dadra & Nagar Haveli",
      "Daman & Diu",
      "Lakshadweep",
      "Delhi (NCT)",
      "Puducherry",
      "Ladakh",
    ],
  },
];

const JourneyForm = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // 0-based index for months (0 = January)

  const { countryCode, selectedPlan } = useFormContext();
  const [states, setStates] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedDays, setSelectedDays] = useState<number>(1);

  console.log(selectedMonth, selectedStates, states);
  console.log("Price:", selectedDays * selectedPlan?.price);

  useEffect(() => {
    if (countryCode) {
      fetch(`https://api.countrystatecity.in/v1/countries/IN/states`, {
        headers: {
          "X-CSCAPI-KEY": "YUN4SG5oZWFUZmJ6cTJlVEdUcmtQTmFkRDVyNEpUQUF1YVN3Vk5EMg==",
        },
        redirect: "follow",
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setStates(data);
          } else {
            setStates([]);
            console.error("Unexpected data format:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching states:", error);
          setStates([]);
        });
    }
  }, [countryCode]);

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

  const days = Array.from({ length: 180 }, (_, index) => ({
    label: `${index + 1} Day${index + 1 > 1 ? "s" : ""}`,
    value: (index + 1).toString(),
  }));

  const getDynamicYears = () => {
    const selectedMonthIndex = months.findIndex((month) => month.value === selectedMonth); // 0-based index
    if (selectedMonthIndex !== -1 && selectedMonthIndex < currentMonth) {
      // Month is in the past, shift to the next year
      return Array.from({ length: 3 }, (_, index) => ({
        label: (currentYear + index + 1).toString(),
        value: (currentYear + index + 1).toString(),
      }));
    } else {
      // Month is in the current or future year
      return Array.from({ length: 3 }, (_, index) => ({
        label: (currentYear + index).toString(),
        value: (currentYear + index).toString(),
      }));
    }
  };

  const handleMonthSelect = (value) => {
    setSelectedMonth(value);

    // Automatically adjust the year dropdown
    const updatedYears = getDynamicYears();
    if (updatedYears.length > 0) {
      setSelectedYear(updatedYears[0].value); // Default to the first year
    }
  };

  const handleStateChange = (selected) => {
    setSelectedStates(selected);
    console.log("Selected States:", selected);
  };

  return (
    <ShadowCard className="sm:w-[80%] mx-auto mt-5 sm:mt-10 py-10 px-5 sm:p-10 rounded-[20px] shadow-card-red">
      <div className="flex flex-col gap-2">
        <h1 className="uppercase font-semibold text-[20px] sm:text-[35px] tracking-wide">
          Journey Details
        </h1>
        <div className="w-full border-[0.1px] border-main-red"></div>

        {/* State/Province Dropdown */}
        <div className="mt-4 w-fit">
          <label className="text-base sm:text-[20px] mt-4">
            Where are you going? [Can Select Multiple]
          </label>
          <div className="mt-4 lg:w-[720px]">
            <MultiSelectDropdown
              regions={regions}
              placeholder="Select State"
              onOptionsChange={handleStateChange}
              className="custom-dropdown-class"
            />
          </div>
        </div>

        {/* Date Selection */}
        <label className="text-base sm:text-[20px] mt-4">
          When are you going?
        </label>
        <div className="flex flex-row gap-2 md:gap-10">
          {/* Month Dropdown */}
          <CustomDropdown
            options={months.map((month) => ({
              label: month.label,
              value: month.value,
            }))}
            placeholder="Select month"
            onOptionSelect={handleMonthSelect}
          />

          {/* Year Dropdown */}
          <CustomDropdown
            options={getDynamicYears().map((year) => ({
              label: year.label,
              value: year.value,
            }))}
            placeholder="Select a year"
            onOptionSelect={(value) => setSelectedYear(value)}
            selectedValue={selectedYear} // Reflect updated year
          />
        </div>
      </div>

      <PricingCard className="w-full mt-6 mb-10" />

      <div className="mt-10 sm:mt-20 w-fit">
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

      <div className="mt-7 text-[20px]">Plan Charges</div>
      <div className="mt-3 text-main-red text-[30px] font-semibold">
        $ <span className="pl-2">{selectedDays * selectedPlan?.price || 0}</span>
      </div>

      {/* Additional Information */}
      <div className="mt-4 text-[20px]">Any Other Comments?</div>
      <textarea
        placeholder="Any differently abled or elderly traveler, any do’s or don'ts, any specific requirement"
        rows={7}
        className="w-full sm:w-[60%] text-[18px] mt-6 p-2 border-2 border-main-red placeholder:text-[20px]"
      ></textarea>
    </ShadowCard>
  );
};

export default JourneyForm;
