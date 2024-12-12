"use client";


import { useEffect,useState } from "react";
import PlanDetails from "../../../../components/payment/PlanDetails";
import SelectedPlanCard from "../../../../components/payment/SelectedPlanCard";
import { useRouter } from "next/navigation";

const Payment = () => {
  const [showPage, setShowPage] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const allowNavigation = sessionStorage.getItem('allowNavigation');
    if (!allowNavigation) {
      console.log("not allow navigation");

      router.push('/trip-form'); // Redirect unauthorized users to the homepage
    } else {
      console.log("Show page");
      setShowPage(true);
    }

  }, [router]);
  if(!showPage){
    return <div className="h-[100vh]">Loading</div>
  }
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
