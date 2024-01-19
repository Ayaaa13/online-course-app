import React from "react";
import HowItWorks from "../data/how-it-works";

const Cards = (props) => {
  return (
    <div className="card">
      <h2 className="step">{props.step_num}</h2>
      <h3 className="sub-title">{props.title}</h3>
      <p className="description">{props.description}</p>
    </div>
  );
};

const NewCard = (Card) => {
  return (
    <Cards
      key={Card.id}
      id={Card.id}
      step_num={Card.step_num}
      title={Card.title}
      description={Card.description}
    />
  );
};

const SectionThree = () => {
  return (
    <section className="section-three" id="section-three">
      <h1 className="title">HOW IT WORKS</h1>
      <div className="cards">{HowItWorks.map(NewCard)}</div>
    </section>
  );
};

export default SectionThree;
