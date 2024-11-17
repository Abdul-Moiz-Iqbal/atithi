// import Button from "../../ui/Button/Button";
// import H4 from "../../ui/heading/H4";
// import H6 from "../../ui/heading/H6";
// import P from "../../ui/Paragraph/P";
// import TestiminalCard from "./TestiminalCard";

// const Testimonial = () => {
//   return (
//     <div className="py-10 ">
//       <H4 title="Testimonial" className="text-main-red" />
//      <TestiminalCard/>
//      <Button text="See More" className="mt-5"/>
//     </div>
//   );
// };

// export default Testimonial;
'use client'
import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import H4 from "../../ui/heading/H4";
import TestiminalCard from "./TestiminalCard";

// Testimonial data
const testimonialData = [
  { id: 1, name: "User 1", text: "Great experience!", country: "USA", title: "Traveler" },
  { id: 2, name: "User 2", text: "Loved it!", country: "UK", title: "Explorer" },
  { id: 3, name: "User 3", text: "Highly recommend!", country: "Canada", title: "Adventurer" },
  { id: 4, name: "User 4", text: "Amazing service!", country: "Australia", title: "Wanderer" },
  { id: 5, name: "User 5", text: "Unforgettable journey! ", country: "India", title: "Nomad" },
  { id: 6, name: "User 6", text: "Unforgettable journey!", country: "India", title: "Nomad" },
  { id: 7, name: "User 7", text: "Unforgettable journey!", country: "India", title: "Nomad" },
  { id: 9, name: "User 9", text: "Unforgettable journey!", country: "India", title: "Nomad" },
];

const Testimonial = () => {
  // State to control how many testimonials are shown
  const [visibleCount, setVisibleCount] = useState(8);


  // Function to show more or less testimonials
  const toggleShowMoreLess = () => {
    if (visibleCount >= testimonialData.length) {
      setVisibleCount(2); // Collapse to show only 2
    } else {
      setVisibleCount((prev) => prev + 2); // Expand to show all
    }
    // setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
    <div className="sm:py-10 ">
      <H4 title="Testimonials" className="mb-4 text-main-red sm:text-[35px]" />
      <div className="flex flex-col md:flex-row md:flex-wrap">
      {testimonialData.slice(0, visibleCount).map((testimonial) => (
        <TestiminalCard
          key={testimonial.id}
          name={testimonial.name}
          description={testimonial.text}
          country={testimonial.country}
          title={testimonial.title}
        />
      ))}
      </div>
      
      {/* Map through the testimonial data and show limited testimonials */}
      

      {/* Show "See More" or "Show Less" button based on current state */}
      <div className=" flex justify-center">

      <Button
        text={visibleCount >= testimonialData.length ? "Show Less" : "Read More"}
        
        className="mt-10 px-12 mx-auto text-base sm:text-xl font-medium w-fit shadow-none"
        onClick={toggleShowMoreLess}
      />
      </div>
    </div>
  );
};

export default Testimonial;
