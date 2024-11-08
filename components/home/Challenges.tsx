"use client"
import ChallengesCard from "./ChallengesCard";
import discover from "../../public/vectors/challenges-discover.png";
import safety from "../../public/vectors/challenges-safety.png";
import tourist from "../../public/vectors/challenges-Tourist.png";
import when from "../../public/vectors/challenges-when.png";
import paying from "../../public/vectors/challenges-paying.png";
import { useState, useEffect } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const data = [
  {
    title: "Discover India",
    description:
      "Feeling stuck in popular places and missing out on how to mix with locals like the local cooking, traditions spirituality.",
    image: discover,
    width: 102,
  },
  {
    title: "Safety & Fear",
    description:
      "Probably one of the major concerns while you are in India and these issues can appear anytime-anywhere.",
    image: safety,
    width: 102,
  },
  {
    title: "Tourist Scams",
    description:
      "Remember, 99% you are likely a target. And the feeling of being a victim can worsen the trip experience for you.",
    image: tourist,
    width: 175,
  },
  {
    title: "Why-When-How",
    description:
      "Planning is fun (we still encourage you to plan) but how you will differ between promotional and true info.",
    image: when,
    width: 184,
  },
  {
    title: "Paying in India",
    description:
      "While planning or in India unable to book services on your own, stuck at local payments & getting OTPs for booking.",
    image: paying,
    width: 122,
  },
];

const Challenges = () => {
  const [showMore, setShowMore] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Update isSmallScreen based on the window width
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="py-3 px-5">
      <div className="flex flex-col gap-[20px]">
        <h1 className="uppercase text-[22px] md:text-[35px] tracking-wide text-center font-semibold text-main-red">
          Challenges you face
        </h1>
        <div className="flex flex-col md:flex-row md:gap-[20px] justify-center flex-wrap">
          {/* Show 2 cards initially on small screens, or all on larger screens */}
          {data.slice(0, showMore || !isSmallScreen ? data.length : 2).map((challenge) => (
            <ChallengesCard
         
              key={challenge.title}
              title={challenge.title}
              description={challenge.description}
              image={challenge.image}
              shadowColor="shadow-card-red"
              textColor="text-main-red"
            />
          ))}
        </div>

        {/* Toggle Button for Small Screens */}
        {isSmallScreen && (
          <div className="mx-auto w-fit mt-[-40px]">
            <button
              className="mx-auto bg-main-red p-2 rounded-full text-xl text-white"
              onClick={toggleShowMore}
            >
              {showMore ? <SlArrowUp /> : <SlArrowDown />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenges;
