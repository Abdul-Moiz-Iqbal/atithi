import H4 from "../../ui/heading/H4";

// vector
import visa from "../../public/vectors/services-visa.png";
import trip from "../../public/vectors/services-trip.png";
import pay from "../../public/vectors/services-pay.png";
import tripGuide from "../../public/vectors/services-guide.png";
import sim from "../../public/vectors/services-sim.png";
import streetSpeak from "../../public/vectors/services-street.png";
import support from "../../public/vectors/services-support.png";
import ChallengesCard from "../home/ChallengesCard";

const data = [
    {
      title: "Visa Assist",
      description:
        "Say goodbye to hidden fees and unnecessary charges. Enjoy clear guidance and support every step of the way. Click here to know more",
      image: visa,
      width:102
    },
    {
      title: "Trip Shield",
      description:
        "Travel with confidence, knowing that help is just a message away. We ensure your safety throughout your journey in India. Click here to know more",
      image: trip,
      width:102
    },
    {
      title: "RupeePay",
      description:
        "Experience the convenience of paying like a local. Using QR-based payments, you can avoid the hassle of currency exchange. Click here to know more",
      image: pay,
      width:175
    },
    {
      title: "True Guide",
      description:
        "Get real answers to your Why-When-How about India. TrueGuide help you navigate India confidently and avoid tourist scams. Click here to know more",
      image: tripGuide,
      width:184
    },
    {
      title: "Local Sim",
      description:
        "A local number that allows you to receive OTPs for booking confirmations, whether you're booking from abroad or in India. Click here to know more",
      image: sim,
      width:122
    },
    {
      title: "Steet Speak",
      description:
        "A tool with essential words fo use. Whether you're navigating markets or asking for directions, this is for you. Click here to know more",
      image: streetSpeak,
      width:122
    },
    {
      title: "The Support",
      description:
        "Your safety and peace of mind are our priority. Our support team is here 24/7 for any travel issues or health concerns. Click here to know more",
      image: support,
      width:122
    },
  ];
const Servies = () => {
  return (
    <div className="py-10 px-8 flex flex-col   ">
      <H4
        title="India's Must Know"
        className="text-main-blue tracking-wider md:text-[35px]"
      />

      <div className="mt-4 w-full md:w-[85%] md:mx-auto border-[1px] border-main-blue"></div>

      <div className=" flex flex-col md:flex-row md:gap-[30px] justify-center flex-wrap ">
        
        {data.map((challenge) => (
            <ChallengesCard title={challenge.title} description={challenge.description} image={challenge.image} className="basis-[27%] " shadowColor={"shadow-card-blue"} textColor="text-main-blue" />
        ))}
        </div>
    </div>
  );
};

export default Servies;
