import React, { useState } from "react";
import ReviewTile from "./ReviewTile";
import moment from "moment";
import ReviewForm from "./ReviewForm";

const ReviewContainer = (props) => {

  let reviewsArray = props.reviews
  // debugger
  if (reviewsArray !== undefined) {
    // debugger
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
  } else {
    //ask user to submit a review to persist the brewery and the review to the DB
    //maybe do this one component level up
  }

  return (
    <div>
      {reviewsArray !== undefined && 
      <h2 className="review-header">Reviews</h2>
      }
      <div className="review-tiles-list-container">
        {reviewsArray}
      </div>
      <ReviewForm addReview={props.addReview} />
    </div>
  );
};

export default ReviewContainer;
