import React from "react";

const Welcome = () => {
  const handleClick = (sectionId, event) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="welcome-description">
      <div className="title-and-description">
        <h1 className="title">An In-Depth Online Learning Experience</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Viverra tristique velit nec
          mauris purus vel ultricies consectetur.
        </p>
      </div>

      <div className="button">
        <button
          onClick={(e) => handleClick("section-two", e)}
          type="button"
          className="get-started-button"
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Welcome;
