import React from "react";


const WarsCard = props => {
  return (
    <div className="people-list">
      <strong> Name: {props.name} </strong>
      <h2>Height: {props.height} </h2>
      </div>
  );
};

export default WarsCard;