import React from "react";
import "./All.css";

const Card = (props) => {
  const { name, title, description } = props;
  return (
    <div className="card">
      <div className="container">
        <h3 className="card-title">{title}</h3>
        <p className="card-name">{name}</p>
        <a
          className="card-description"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </a>
      </div>
    </div>
  );
};

export default Card;
