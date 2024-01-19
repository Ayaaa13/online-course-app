import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Instructors from "../data/instructors";

const Cards = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="social-media">
        <a href="##">
          <img
            src="/images/sections/section-five/social-media/facebook.png"
            alt="Facebook"
          />
        </a>
        <a href="##">
          <img
            src="/images/sections/section-five/social-media/twitter.png"
            alt="Twitter"
          />
        </a>
        <a href="##">
          <img
            src="/images/sections/section-five/social-media/instagram.png"
            alt="Instagram"
          />
        </a>
      </div>
      <div className="content">
        <h2 className="name">{props.name}</h2>
        <p className="profession">{props.profession}</p>
      </div>
    </div>
  );
};

const NewCard = (Card) => {
  return (
    <Cards
      key={Card.id}
      id={Card.id}
      img={Card.img}
      name={Card.name}
      profession={Card.profession}
    />
  );
};

const SectionFive = () => {
  return (
    <section className="section-five" id="section-five">
      <div className="title-and-arrows">
        <h1 className="title">INSTRUCTORS</h1>
        <div className="arrows">
          <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </div>
      </div>

      <div className="instructors">{Instructors.map(NewCard)}</div>
    </section>
  );
};

export default SectionFive;
