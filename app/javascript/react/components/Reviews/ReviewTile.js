import React from "react";

const ReviewTile = (props) => {
  return (
    <div className="review-tile-container">
      <figure className="snip1232">
        <div className="review-title">
          <img src="https://s3.amazonaws.com/rsportz-production/people/avatars/000/260/833/large/default-profile.png?1533229438" alt="sq-sample7"/>
          <h5>{props.title}</h5>
          <span>{props.rating}</span>
        </div>
        <blockquote>{props.body}<p>-{props.username}</p><p>{props.date}</p></blockquote>
      </figure>
    </div>
  )
};

export default ReviewTile;
