import React from "react";

const MainNavbar = () => {
  const handleClick = (sectionId, event) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main-navbar">
      <a onClick={(e) => handleClick("section-one", e)} href="#section-one">
        Why onLEARN?
      </a>
      <a onClick={(e) => handleClick("section-three", e)} href="#section-three">
        How it works
      </a>
      <a onClick={(e) => handleClick("section-four", e)} href="#section-four">
        Courses
      </a>
      <a onClick={(e) => handleClick("section-five", e)} href="#section-five">
        Instructor
      </a>
      <a onClick={(e) => handleClick("section-six", e)} href="#section-six">
        Testimony
      </a>
    </div>
  );
};

export default MainNavbar;
