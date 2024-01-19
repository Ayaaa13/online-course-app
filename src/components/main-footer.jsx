import React from "react";

const MainFooter = () => {
  const handleCLick = (sectionId, event) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="main-footer">
      <div className="main-footer-content social-media">
        <h2 className="sub-title">Social Media</h2>
        <div className="links">
          <a target="noreferrer" href="https://www.facebook.com/jjjjnava">
            Facebook
          </a>
          <a target="noreferrer" href="#NoAccount">
            Twitter (X)
          </a>
          <a target="noreferrer" href="https://www.instagram.com/jjjjnava/">
            Instagram
          </a>
        </div>
      </div>

      <div className="main-footer-content site-map">
        <h2 className="sub-title">Site Map</h2>
        <div className="links">
          <a onClick={(e) => handleCLick("section-one", e)} href="#section-one">
            Why onLEARN?
          </a>
          <a
            onClick={(e) => handleCLick("section-three", e)}
            href="#section-three"
          >
            How it works
          </a>
          <a
            onClick={(e) => handleCLick("section-four", e)}
            href="#section-four"
          >
            Courses
          </a>
          <a
            onClick={(e) => handleCLick("section-five", e)}
            href="#section-five"
          >
            Instructor
          </a>
          <a onClick={(e) => handleCLick("section-six", e)} href="#section-six">
            Testimony
          </a>
        </div>
      </div>

      <div className="main-footer-content contact">
        <h2 className="sub-title">Contact</h2>
        <div className="links">
          <span className="cp-number">+63 9155434721</span>
          <span className="address">087 Townsite Proper Mariveles Bataan</span>
          <span className="email">aiahnava5@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
