'use client';
import React, { useState, useEffect } from "react";
import Button from "../../ui/Button/Button";
import H4 from "../../ui/heading/H4";
import TestiminalCard from "./TestiminalCard";

// Testimonial data
const testimonialData = [
  { id: 1, name: "User 1", text: "Great experience!", country: "USA", title: "Traveler" },
  { id: 2, name: "User 2", text: "Loved it!", country: "UK", title: "Explorer" },
  { id: 3, name: "User 3", text: "Highly recommend!", country: "Canada", title: "Adventurer" },
  { id: 4, name: "User 4", text: "Amazing service!", country: "Australia", title: "Wanderer" },
  { id: 5, name: "User 5", text: "Unforgettable journey!", country: "India", title: "Nomad" },
  { id: 6, name: "User 6", text: "Unforgettable journey!", country: "India", title: "Nomad" },
  { id: 7, name: "User 7", text: "Unforgettable journey!", country: "India", title: "Nomad" },
  { id: 8, name: "User 8", text: "Unforgettable journey!", country: "India", title: "Nomad" },
  { id: 9, name: "User 9", text: "Unforgettable journey!", country: "India", title: "Nomad" },
  { id: 10, name: "User 10", text: "Amazing service!", country: "Australia", title: "Wanderer" },
  { id: 10, name: "User 10", text: "Amazing service!", country: "Australia", title: "Wanderer" },
  { id: 10, name: "User 10", text: "Amazing service!", country: "Australia", title: "Wanderer" },
];

const Testimonial = () => {
  // State to control how many testimonials are shown
  const [visibleCount, setVisibleCount] = useState(8); // Default for large screens
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen size and set initial visibleCount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setVisibleCount(2); // Show 2 for mobile
      } else {
        setIsMobile(false);
        setVisibleCount(8); // Show 8 for large screens
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to show more or less testimonials
  const toggleShowMoreLess = () => {
    if (visibleCount >= testimonialData.length) {
      setVisibleCount(isMobile ? 2 : 8); // Reset to initial state
    } else {
      setVisibleCount((prev) => prev + (isMobile ? 2 : 4)); // Increment
    }
  };

  return (
    <div className="sm:py-10">
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

      {/* Show "See More" or "Show Less" button */}
      <div className="flex justify-center">
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
