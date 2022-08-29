import React from "react";

const ReviewTile = (props) => {
  return (
    <div className="review-tile-container row">
      <div className="review-tile card small-4 columns">
          <div className="review-tile-title card-divider">
            <p>{props.title}</p>
          </div>
          <div className="review-tile-rating card-divider">
            <p>{props.rating} </p>
          </div>
          <div className="review-tile-body card-divider">
            <p>{props.body}</p>
          </div>
          <div className="review-tile-username card-divider">
            <p>{props.username}</p>
          </div>
          <div className="review-tile-date card-divider">
              <p>{props.date}</p>
          </div>
      </div>
    </div>
  );
};

export default ReviewTile;
