import Image from "next/image";
import solo from "../public/images/plan-solo.png";

const PlaningCard = () => {
  return (
    // <div className="w-full flex flex-col items-center basis-[20%] bg-gradient-to-b from-transparent via-[#fff1f5] to-transparent">
    <div className="w-full py-5 flex flex-col items-center basis-[20%] " style={{ background: 'linear-gradient(0deg, rgba(233,233,233,0) 0%, rgba(255,241,245,1) 49%, rgba(217,217,217,0) 100%)' }}>
      <Image height={91} src={solo} alt="Solo Plan" />
      <h4 className="mt-10 text-lg font-medium">Solo</h4>
      <div className="  text-main-red text-[60px] font-semibold ">
        $5<span className=" text-black text-[18px] font-normal"> <span className="px-[2px]">/</span>day</span>
        
      </div>
      <button className=" px-[50px] py-[7px] text-[18px] font-medium rounded-full shadow-btn-shadow border-[3px] border-main-red bg-gradient-to-r from-main-red to-main-orange bg-transparent text-transparent bg-clip-text    ">Select</button>
    </div>
  );
};

export default PlaningCard;
