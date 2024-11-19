"use client";


import PlanDetails from "../../../components/payment/PlanDetails";
import SelectedPlanCard from "../../../components/payment/SelectedPlanCard";


const Payment = () => {
  return (
    <div className="font-author px-5 sm:px-0">
      <div className="mt-10 mb-32  sm:w-[80%]  sm:py-10 sm:px-8 mx-auto flex flex-col-reverse md:flex-row sm:shadow-card-red rounded-[20px]">
 
        <PlanDetails/>
        <SelectedPlanCard/>


      </div>
  
       
        

      
    </div>
  );
};

export default Payment;
