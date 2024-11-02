
// ui

import ChallengesCard from "./ChallengesCard";

// vector
import discover from "../../public/vectors/challenges-discover.png";
import safety from "../../public/vectors/challenges-safety.png";
import tourist from "../../public/vectors/challenges-Tourist.png";
import when from "../../public/vectors/challenges-when.png";
import paying from "../../public/vectors/challenges-paying.png";

const data = [
  {
    title: "Discover India",
    description:
      "Feeling stuck in popular places and missing out on how to mix with locals like the local cooking, traditions spirituality.",
    image: discover,
    width:102
  },
  {
    title: "Safety & Fear",
    description:
      "Probably one of the major concerns while you are in India and these issues can appear anytime-anywhere.",
    image: safety,
    width:102
  },
  {
    title: "Tourist Scams",
    description:
      "Remember,99% you are likely a target.And the feeling of being a victim can worsen the trip experience for you.",
    image: tourist,
    width:175
  },
  {
    title: "Why-When-How",
    description:
      "Planning is fun (we still encourage you to plan) but how you will differ between promotional and true info.",
    image: when,
    width:184
  },
  {
    title: "Paying in India ",
    description:
      "While planning or in India unable to book services on your own, stuck at local payments & getting OTPs for booking.",
    image: paying,
    width:122
  },
];
const Challenges = () => {
  return (
    <div className="py-3 px-5   ">
      <div className="flex flex-col gap-[20px]">
        <h1 className="uppercase text-[22px] md:text-[35px] tracking-wide text-center font-semibold text-main-red">
          Challenges you face
        </h1>
        <div className="flex flex-col md:flex-row md:gap-[20px] justify-center flex-wrap ">
        {data.map((challenge) => (
            <ChallengesCard key={challenge.title} title={challenge.title} description={challenge.description} image={challenge.image} shadowColor="shadow-card-red" textColor="text-main-red" />
        ))}
        </div>
       
      </div>
    </div>
  );
};

export default Challenges;

// import Image from "next/image";

// // ui
// import ShadowCard from "../../ui/Card/ShadowCard";

// // vector
// import discover from "../../public/vectors/challenges-discover.png";

// const Challenges = () => {
//   return (
//     <div className="py-3 px-5">
//       <div className="flex flex-col gap-[20px]">
//         <h1 className="uppercase text-[22px] tracking-wide text-center font-semibold text-main-red">
//           Challenges you face
//         </h1>

//         <ShadowCard className={"pb-10 px-3 h-[348px] relative"}>
//           {/* Image with negative margin */}
//           <Image
//             src={discover}
//             alt="Discover India"
//             width={102}
//             height={233}
//             className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[-30%] z-10"
//           />
//           <h1 className="text-center text-main-red text-[20px] font-semibold">
//             Discover India
//           </h1>
//           <div className="text-[22px] tracking-[0.1px] text-center">
//             Feeling stuck in popular places and missing out on how to mix with
//             locals like local cooking, traditions, spirituality. Click{" "}
//             <span className="text-main-blue">here</span> to know more
//           </div>
//         </ShadowCard>
//       </div>
//     </div>
//   );
// };

// export default Challenges;
