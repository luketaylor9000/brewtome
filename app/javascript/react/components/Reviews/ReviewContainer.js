import React, { useState } from "react";
import ReviewTile from "./ReviewTile";
import moment from "moment";

const ReviewContainer = (props) => {

  // if (props.reviews.length > 0) {
  // const reviewsArray = props.reviews.map((review) => {

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
    </div>
  );
};

export default ReviewContainer;
