import React from "react";

const HeaderDropdown = () => {
  const handleClick = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-dropdown">
      <div className="dropdown-logo">
        <h1>onLearn</h1>
      </div>
      <div className="dropdown-navbar">
        <a onClick={(e) => handleClick("section-one", e)} href="#section-one">
          Why onLEARN?
        </a>
        <a
          onClick={(e) => handleClick("section-three", e)}
          href="#section-three"
        >
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
      <div className="dropdown-buttons">
        <a href="##" className="login-button">
          Login
        </a>
        <a href="##" className="signup-button">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default HeaderDropdown;
