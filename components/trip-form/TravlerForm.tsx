// "use client";
// import { useEffect, useState } from "react";
// import ShadowCard from "../../ui/Card/ShadowCard";
// import { TiArrowSortedDown } from "react-icons/ti";
// import { useFormContext } from "@/context/FormContext";

// const TravelerForm = () => {
//   const [countries, setCountries] = useState<
//     { label: string; value: string }[]
//   >([]);
//   const { setCountryCode} = useFormContext()
//   const [selectedCountry, setSelectedCountry] = useState<string>("");
//   const [userCountry, setUserCountry] = useState<string>("Select Country");

//   useEffect(() => {
//     fetch(
//       "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setCountryCode(data.userSelectValue.value)
//         setCountries(data.countries); // Assuming data has a "countries" key with an array of objects.
//         setUserCountry(data.userSelectValue.label);
//         console.log(data);
//       })
//       .catch((error) => console.error("Error fetching countries:", error));
//   }, [setCountryCode]);

//   const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCountry(e.target.value);
//     console.log(e.target.value)
//     setCountryCode(e.target.value)

//   };

//   return (
//     <ShadowCard
//       className={"sm:w-[80%] mx-auto mt-10 py-10 px-5 sm:p-10 rounded-[20px] shadow-card-red"}
//     >
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
//             className="p-2 sm:w-[60%] border border-main-red placeholder:text-[20px]"
//           />
//         </div>



//         {/* new one country deop down  */}
//         <div className="flex flex-col gap-4 mt-4">
//           <label className="text-base sm:text-[20px]">Select your country</label>
//           <div className="w-fit flex items-center border border-main-red overflow-hidden cursor-pointer ">
//             <select
//               value={selectedCountry}
//               onChange={handleCountryChange }
//               className="appearance-none w-full p-2 text-[20px] pr-10 bg-white cursor-pointer"
//             >
//               <option value="">{userCountry}</option>
//               {countries.map((country) => (
//                 <option key={country.value} value={country.value}>
//                   {country.label}
//                 </option>
//               ))}
//             </select>
//             <div className="flex items-center p-2 text-gray-600">
//               <TiArrowSortedDown className="text-main-red text-2xl" />
//             </div>
//           </div>
//         </div>
        

//         <div className="mt-5 flex flex-col gap-3">
//           <label className="text-base sm:text-[20px]">Email address</label>
//           <input
//             type="text"
//             placeholder="example@gmail.com"
//             className="p-2 sm:w-[60%] border border-main-red placeholder:text-[20px]"
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
import { useFormContext } from "@/context/FormContext";
import CustomDropdown from "../../ui/dropdown/FormDropdown"; // Make sure the path is correct

const TravelerForm = () => {
  const [countries, setCountries] = useState<{ label: string; value: string }[]>([]);
  const { setCountryCode } = useFormContext();
  const [userCountry, setUserCountry] = useState<string>("Select Country");

  useEffect(() => {
    fetch("https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code")
      .then((response) => response.json())
      .then((data) => {
        setCountryCode(data.userSelectValue.value);
        setCountries(data.countries); // Assuming data has a "countries" key with an array of objects.
        setUserCountry(data.userSelectValue.label);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, [setCountryCode]);

  const handleCountryChange = (value) => {
    setCountryCode(value);
  };

  return (
    <ShadowCard className="sm:w-[80%] mx-auto mt-5 sm:mt-10 py-10 px-5 sm:p-10 rounded-[20px] shadow-card-red">
      <div className="flex flex-col gap-1">
        <h1 className="uppercase font-semibold text-[20px] sm:text-[35px] tracking-wide">
          Traveller Details
        </h1>
        <div className="w-full border-[0.1px] border-main-red"></div>

        <div className="mt-5 flex flex-col gap-5">
          <label className="text-base sm:text-[20px]">Your Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 sm:w-[60%] border border-main-red placeholder:text-[20px]"
          />
        </div>

        {/* Country input */}
        {/* <div className="w-fit  flex flex-col gap-4 mt-4">
          <label className="text-base sm:text-[20px]">Select your country</label>
          <CustomDropdown
            options={countries}
            placeholder={userCountry}
            onOptionHandler={handleCountryChange}
          />
        </div> */}
        <div className="mt-5 flex flex-col gap-5">
          <label className="text-base sm:text-[20px]">Your Country</label>
          <input
            type="text"
            placeholder="Country Name"
            value={userCountry}
            className="p-2 sm:w-[60%] border border-main-red placeholder:text-[20px]"
          />
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <label className="text-base sm:text-[20px]">Email address</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="p-2 sm:w-[60%] border border-main-red placeholder:text-[20px]"
          />
        </div>
      </div>
    </ShadowCard>
  );
};

export default TravelerForm;

