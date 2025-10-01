import React, { useState } from "react";

const AboutSection = () => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="astro_about_section_main mt-4">
      <h3>About Me</h3>
      <p className={`about-content ${showFull ? "show" : "clamp"}`}>
        As we approach the year 2025, numerology, the ancient science of
        numbers, continues to play a pivotal role in guiding individuals toward
        self-discovery and clarity in life’s major decisions. Whether you're new
        to numerology or a seasoned enthusiast, understanding the numbers that
        As we approach the year 2025, numerology, the ancient science of
        numbers, continues to play a pivotal role in guiding individuals toward
        self-discovery and clarity in life’s major decisions. Whether you're new
        to numerology or a seasoned enthusiast, understanding the numbers that
        Read more... As we approach the year 2025, numerology, the ancient
        science of numbers, continues to play a pivotal role in guiding
        individuals toward self-discovery and clarity in life’s major decisions.
        Whether you're new to numerology or a seasoned enthusiast, understanding
        the numbers that Read more...
      </p>
      <span
        onClick={() => setShowFull(!showFull)}
        style={{ color: "#E25016", cursor: "pointer" }}
      >
        {showFull ? "Read Less" : "Read More..."}
      </span>
    </div>
  );
};

export default AboutSection;
