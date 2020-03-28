// react
import React from "react";

// styles
import "./card.scss";

const Card = props => {
  const { children, name: conponentName } = props;

  return (
    <div className="card-container">
      <p className="card-container-header">{conponentName}</p>
      <div className="card-container-contents">{children}</div>
    </div>
  );
};

export default Card;
