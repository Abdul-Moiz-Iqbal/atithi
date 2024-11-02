import Image from "next/image";

//vector image
import travelExpert from "../../public/vectors/travel-expert.png";

const TravelExpert = () => {
  return (
    <div className="py-10  px-7 md:px-24 flex    ">
      <div className="hidden lg:h-[603px] lg:flex justify-center w-[50%] ">
        <Image
        src={travelExpert}
        // height={603}
        alt="India Travel Expert"/>
      </div>
      <div className="lg:w-[50%] flex flex-col justify-center gap-[20px]">
        <h1 className="md:mb-8 uppercase text-[22px] md:text-[35px] tracking-wide text-center font-semibold text-main-blue">
          Your India Travel Expert
        </h1>
        <div className=" text-[22px] md:px-[90px] tracking-wide text-center ">
          We turn your trip to India into a smooth and enriching experience.
          Navigating new cultures can be tough, especially in the country of 1.4
          billion people but we ensure you explore India safely like a local,
          stress-free at every step.  
        </div>
        <div className=" text-[22px] md:px-[90px] tracking-wide text-center ">From paying for services in India to
          interaction with local people, we empower you to handle the
          complexities of India.</div>
        <div className=" text-[22px] md:px-[90px] tracking-wide text-center ">Make your trip to India safe and stress-free on
        your own</div>
      </div>
    </div>
  );
};

export default TravelExpert;
