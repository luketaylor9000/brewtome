import React, { useState, useEffect } from "react";
import ReviewTile from "./ReviewTile";
import moment from "moment";
import ReviewForm from "./ReviewForm";

const ReviewContainer = (props) => {

  let reviewsArray = props.reviews

  if (reviewsArray !== undefined) {
    reviewsArray = props.reviews.map((review) => {
      return (
        <ReviewTile
          key={review.id}
          title={review.title}
          rating={review.rating}
          body={review.body}
          date={moment(review.created_at).format("LL")}
          breweryId={review.brewery_id}
          reviewId={review.id}
          userId={review.user_id}
          username={review.username}
        />
      );
    });
  }

  return (
    <div>
      {reviewsArray !== undefined && 
      <h2 className="review-header">Reviews</h2>
      }
      <div className="review-tiles-list-container grid-x">
        {reviewsArray}
      </div>
      <ReviewForm addReview={props.addReview} />
    </div>
  );
};

export default ReviewContainer;
