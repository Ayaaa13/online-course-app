import React from "react";
import Courses from "../data/courses";

const Cards = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} />
      <div className="content">
        <h2 className="sub-title">{props.title}</h2>
        <p className="description">{props.description}</p>
        <button type="button" className="enroll-now-button">
          Enroll Now
        </button>
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
      title={Card.title}
      description={Card.description}
    />
  );
};

const SectionFour = () => {
  return (
    <section className="section-four" id="section-four">
      <span>Popular Courses</span>
      <div className="title-and-button">
        <h1 className="title">Enroll Now</h1>
        <button className="view-all-courses-button">View All Courses</button>
      </div>

      <div className="courses">{Courses.map(NewCard)}</div>
    </section>
  );
};

export default SectionFour;
