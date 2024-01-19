import React from "react";
import StudentsCoursesInstructors from "../data/students-courses-instructors";

const Cards = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} />
      <div className="title-and-count">
        <h2 className="title">{props.title}</h2>
        <p className="count">{props.count}+</p>
      </div>
    </div>
  );
};

const NewCards = (Card) => {
  return (
    <Cards
      key={Card.id}
      id={Card.id}
      img={Card.img}
      title={Card.title}
      count={Card.count}
    />
  );
};

const SectionTwo = () => {
  return (
    <section className="section-two" id="section-two">
      {StudentsCoursesInstructors.map(NewCards)}
    </section>
  );
};

export default SectionTwo;
