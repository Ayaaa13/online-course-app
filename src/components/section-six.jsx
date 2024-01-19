import React from "react";
import Testimony from "../data/testimony";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="comment-content">
        <h1>“</h1>
        <p className="comment">{props.comment}</p>
      </div>

      <div className="user-information">
        <img src={props.img} alt="Testimony" />
        <div className="name-and-date">
          <h2 className="name">{props.name}</h2>
          <p className="date">{props.date}</p>
        </div>
      </div>
    </div>
  );
};

const NewCard = (Card) => {
  return (
    <Cards
      key={Card.id}
      id={Card.id}
      comment={Card.comment}
      img={Card.img}
      name={Card.name}
      date={Card.date}
    />
  );
};

const SectionSix = () => {
  return (
    <section className="section-six" id="section-six">
      <div className="title-and-description">
        <h1 className="title">WHAT PEOPLE SAY ABOUT US</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Viverra tristique velit nec
          mauris purus vel ultricies consectetur.
        </p>
      </div>

      <div className="testimonies">{Testimony.map(NewCard)}</div>
    </section>
  );
};

export default SectionSix;
