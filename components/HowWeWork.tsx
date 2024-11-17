import HowWeWorkCard from "./HowWeWardCard";
import whatWeDo1 from "../public/images/what-we-do-1.png";
import whatWeDo2 from "../public/images/what-we-do-2.png";
import whatWeDo3 from "../public/images/what-we-do-3.png";
const data = [
  {
    image: whatWeDo1,
    description: (
      <div className=" mt-5 text-[18px] tracking-[0.9px] sm:text-[20px] sm:tracking-[1px]  text-center ">
        Start by providing some basic information, such as the number of
        travellers and the days in India, using the{" "}
        <span className="text-main-red uppercase font-medium">“START MY JOURNEY”</span>{" "}
        button. We'll get in touch with you shortly.
      </div>
    ),
  },
  {
    image: whatWeDo2,
    description: (
      <div className=" mt-5 text-[18px] tracking-[0.9px] sm:text-[20px] sm:tracking-[1px]  text-center">
        While you do all the bookings, we will help you filter the scams out. We
        help you in Visa and TrueGuide has the answers of your
        <span className="text-main-red uppercase font-medium"> {' '}Why-When-How</span> about
        India. Here, you get ready for India.{" "}
      </div>
    ),
  },
  {
    image: whatWeDo3,
    description: (
      <div className=" mt-5 text-[18px] tracking-[0.9px] sm:text-[20px] sm:tracking-[1px]  text-center ">
        This is the final step. On arrival in India, we activate Rupee Pay for
        you to make local payments. And, we take care of any unexpected issue
        you might face and ensure that everything goes right for you 24/7.
      </div>
    ),
  },
];
const HowWeWork = () => {
  return (
    <div>
      <h1 className="mt-5 md:mt-16 md:mb-8 uppercase text-[20px] md:text-[35px] tracking-wide text-center font-semibold text-main-blue">
        How We Work
      </h1>
      <div className="w-[80%] mt-3  mx-auto text-[18px] sm:text-xl md:px-[90px] tracking-wide text-center ">
        A trip to India may look like a challenging task but we <br />
        prepare you for this challenge and make it <br></br> safe and
        stress-free for you.
      </div>
      <div className="w-[80%] sm:mt-24 sm:pl-10 mx-auto mt-10 flex flex-col sm:flex-row justify-center  gap-x-10 lg:gap-x-32 gap-y-5">
        {data.map((whatWeDo) => (
        <HowWeWorkCard key={whatWeDo.description} image={whatWeDo.image} description={whatWeDo.description} />    
        ))}
     
      </div>
    </div>
  );
};
export default HowWeWork;
