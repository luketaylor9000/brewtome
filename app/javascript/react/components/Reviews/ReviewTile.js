import React from "react";

const ReviewTile = (props) => {

  return (
    <div className="review-text">
      <ul>
        <h3>{props.title}</h3>
        <h5>{props.rating} </h5>
        <p>{props.body}</p>
        <p>{props.date}</p>
      </ul>
    </div>
  );
};

export default ReviewTile;
