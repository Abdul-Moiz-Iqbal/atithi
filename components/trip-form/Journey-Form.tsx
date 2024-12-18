"use client";
import { useEffect, useState } from "react";
import ShadowCard from "../../ui/Card/ShadowCard";
import { useFormContext } from "@/src/context/FormContext";
import PricingCard from "../PricingCard";
import CustomDropdown from "../../ui/dropdown/FormDropdown"; // Import CustomDropdown
import MultiSelectDropdown from "../../ui/dropdown/MultiSelectDropDown";

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
    states: [
      "Kerala",
      "Tamil Nadu",
      "Karnataka",
      "Andhra Pradesh",
      "Telangana",
    ],
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

  const {
    countryCode,
    selectedPlan,
    setFormData,
    formData,
    formError,
    setFormError,
  } = useFormContext();
  console.log("Form Daata",formData)
  
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState({label:currentYear.toString() ,value:currentYear.toString()});
  const [months, setMonths] = useState([
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 },
  ]);

  const [selectedDays, setSelectedDays] = useState<number>(1);

  // this months array is being used only in useEffect to solve a problem 
  const monthss = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 },
  ];

  useEffect(() => {
    if (countryCode) {
      fetch(`https://api.countrystatecity.in/v1/countries/IN/states`, {
        headers: {
          "X-CSCAPI-KEY":
            "YUN4SG5oZWFUZmJ6cTJlVEdUcmtQTmFkRDVyNEpUQUF1YVN3Vk5EMg==",
        },
        redirect: "follow",
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
           
          } else {
           
            console.error("Unexpected data format:", data);
          }
        })
        .catch((error) => {
          console.log(error)
        
        });
    }
  }, [countryCode]);

  // useEffect(()=> {

  //   const getFilteredMonths = () => {
  //     console.log("selected Month", selectedMonth)
  //     if (selectedYear.value === currentYear.toString()) {
  //       // Show only remaining months in the current year
  //       setSelectedMonth('');
  //       console.log(currentMonth)
  //       console.log("months.slice(currentMonth)",months.slice(currentMonth))
  //       setMonths( months.slice(currentMonth)); // callback method is used  here to set the state immediately 
  //       console.log("after state update ",months)
  //       return 
  //     }
  //     // setSelectedMonth('');
  //     setMonths( [
  //       { label: "January", value: 1 },
  //       { label: "February", value: 2 },
  //       { label: "March", value: 3 },
  //       { label: "April", value: 4 },
  //       { label: "May", value: 5 },
  //       { label: "June", value: 6 },
  //       { label: "July", value: 7 },
  //       { label: "August", value: 8 },
  //       { label: "September", value: 9 },
  //       { label: "October", value: 10 },
  //       { label: "November", value: 11 },
  //       { label: "December", value: 12 },
  //     ])
  //     return ; // Show all months for future years
  //   };
  //   getFilteredMonths();
  //  console.log("selectedMonth",selectedMonth)
  //  if(selectedMonth.value < currentMonth +1) {
     
  //  }

  // },[selectedYear,selectedMonth,currentMonth,currentYear,months])

  useEffect(() => {
    const getFilteredMonths = () => {
      console.log("selected Month", selectedMonth);
  
      if (selectedYear.value === currentYear.toString()) {
        // Show only remaining months in the current year
        setSelectedMonth(''); // Reset selected month
        console.log(currentMonth);  
        console.log("months.slice(currentMonth)", months.slice(currentMonth));
  
        // Update months state with remaining months
        setMonths(monthss.slice(currentMonth));
        return;
      }
  
      // Show all months for future years
      setMonths([
        { label: "January", value: 1 },
        { label: "February", value: 2 },
        { label: "March", value: 3 },
        { label: "April", value: 4 },
        { label: "May", value: 5 },
        { label: "June", value: 6 },
        { label: "July", value: 7 },
        { label: "August", value: 8 },
        { label: "September", value: 9 },
        { label: "October", value: 10 },
        { label: "November", value: 11 },
        { label: "December", value: 12 },
      ]);
    };
  
    getFilteredMonths();
  
    console.log("selectedMonth", selectedMonth);
  
    // Add additional logic here if needed
    if (selectedMonth.value < currentMonth + 1) {
      // Perform an action
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear, selectedMonth, currentMonth, currentYear]);
  
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

  const days = Array.from({ length: 180 }, (_, index) => ({
    label: `${index + 1} Day${index + 1 > 1 ? "s" : ""}`,
    value: (index + 1).toString(),
  }));

  const getDynamicYears = () => {
    const selectedMonthIndex = months.findIndex(
      (month) => month.value === selectedMonth
    ); // 0-based index
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

  const handleCommentChange = (event) => {
    setFormData((prevData: unknown) => ({
      ...prevData,
      comment: event.target.value,
    }));
    console.log("Comment:");
  };


  const handleStateChange = (selected) => {

    setFormData((prevData: unknown) => ({ ...prevData, states: selected }));
  };

  const handleMonthBlur = () => {


  };

  const handleYearBlur = () => {
    // if (!selectedYear) {
    //   console.log("hello")
    //   setErrors((prev) => ({ ...prev, year: "Please select a year" }));
    // }
  };


  const handleMonthSelect = (value) => {
    // console.log("click",value)
    setSelectedMonth(value);
    setFormData((prevData) => ({ ...prevData, month: value.label }));
    setFormError((prev) => ({ ...prev, month: "" })); // Clear error on change
    const updatedYears = getDynamicYears();
    console.log("Updated years:",updatedYears)
    if (updatedYears.length > 0) {
      setSelectedYear(updatedYears[0].value); // Default to the first year
    }
  };

  const handleYearSelect = (value) => {

    setSelectedYear(value);
    setFormData((prevData) => ({ ...prevData, year: +value.value }));
    setFormError((prev) => ({ ...prev, year: "" })); // Clear error on change
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
              value={formData?.regions}
              placeholder="Select State"
              onOptionsChange={handleStateChange}
              className="custom-dropdown-class"
              // error={error} // Pass error state
              // onBlur={handleStateBlur} // Pass onBlur logic
            />
            {formError?.regions && (
              <p className="text-red-500">{formError?.regions}</p>
            )}
          </div>
        </div>

        {/* Date Selection */}
        <label className="text-base sm:text-[20px] mt-4">
          When are you going?
        </label>
        <div className="flex flex-row gap-2 md:gap-10">
          {/* Month Dropdown */}
          <div>
            <CustomDropdown
              options={months.map((month) => ({
                label: month.label,
                value: month.value,
              }))}
              placeholder="Select month"
              // value={formData?.month}
              value={selectedMonth.label}
              onOptionSelect={handleMonthSelect}
              onBlur={handleMonthBlur}
          
            />
            {formError?.month && <p className="text-red-500">{formError?.month}</p>}
          </div>
          <div>
            {/* Year Dropdown */}
            <CustomDropdown
              options={getDynamicYears().map((year) => ({
                label: year.label,
                value: year.value,
              }))}
              placeholder="Select a year"
              value={formData?.year}
              onOptionSelect={handleYearSelect}
              selectedValue={selectedYear} // Reflect updated year
              onBlur={handleYearBlur}
    
            />
            
            {formError?.year  && <p className="text-red-500">{formError?.year}</p>}
          </div>
        </div>
      </div>

      <PricingCard className="w-full mt-6 mb-10" />

      

      <div className="mt-10  sm:mt-20 w-fit">

        {/* Days Dropdown */}
        <label className="text-lg sm:text-[20px]">How Long for?</label>
        <CustomDropdown
          options={days.map((day) => ({
            label: day.label,
            value: day.value,
          }))}
          placeholder="Number of days in India"
          value={formData?.days}
          onOptionSelect={(value) => {
            setFormError((prev) => ({ ...prev, days: "" }));
            setSelectedDays(+value.value);
            setFormData((prevData: unknown) => ({
              ...prevData,
              days: +value.value,
            }));
          }}
        />
        {formError?.days && <p className="text-red-500">{formError?.days}</p>}
      </div>

      <div className="mt-7 text-[20px]">Plan Charges</div>
      <div className="mt-3 text-main-red text-[30px] font-semibold">
        ${" "}
        <span className="pl-2">{formData?.days * selectedPlan?.price ||selectedDays * selectedPlan?.price || 0}</span>
      </div>

      {/* Additional Information */}
      <div className="mt-4 text-[20px]">Any Other Comments?</div>
      <textarea
        onChange={handleCommentChange}
        placeholder="Any differently abled or elderly traveler, any do’s or don'ts, any specific requirement"
        rows={7}
        className="w-full sm:w-[60%] text-[18px] mt-6 p-2 border-2 border-main-red placeholder:text-[20px]"
      ></textarea>
    </ShadowCard>
  );
};

export default JourneyForm;
