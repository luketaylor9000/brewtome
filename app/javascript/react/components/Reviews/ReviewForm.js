import React, { useState, Fragment } from "react";
import ErrorList from './ErrorList'

let stars = (stars = [
  "",
  "⭐️",
  "⭐️⭐️",
  "⭐️⭐️⭐️",
  "⭐️⭐️⭐️⭐️",
  "⭐️⭐️⭐️⭐️⭐️",
]);
const ReviewForm = ({ addReview }) => {
  const [errors, setErrors] = useState({});
  const [addNewReview, setAddNewReview] = useState({
    rating: "",
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    setAddNewReview({
      ...addNewReview,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["rating", "title", "body"];
    requiredFields.forEach((field) => {
      if (addNewReview[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });

    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setAddNewReview({
      rating: "",
      title: "",
      body: "",
    });
    setErrors({});
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (validForSubmission()) {
      addReview({ review: addNewReview });
      setAddNewReview({
        rating: "",
        title: "",
        body: "",
      });
    }
  };
  const starSelector = stars.map((star) => {
    return (
      <option key={star} value={star}>
        {star}
      </option>
    );
  });

  return (
    <Fragment>

      <div className="new-review-dropdown">
        <div className="new-review-dropdown-container">

          <label for="touch"><span>Submit a New Review</span></label>
          <input type="checkbox" id="touch" />

          <div class="slide review-form-div">
            <div classname="review-form-div">
              <form className="new-review-form" onSubmit={onSubmitHandler}>              <ErrorList errors={errors} />
                <label className="new-review-form-label">Rating</label>
                <select
                  className="new-review-form-text-box-rating"
                  id="rating"
                  onChange={handleInputChange}
                  value={addNewReview.rating}
                >
                  {starSelector}
                </select>

                <label className="new-review-form-label">
                  Title
                  <input
                    className="new-review-form-text-box"
                    type="text"
                    id="title"
                    onChange={handleInputChange}
                    value={addNewReview.title}
                  />
                </label>

                <label className="new-review-form-label">
                  Body
                  <textarea
                    className="new-review-form-text-box"
                    type="text"
                    id="body"
                    onChange={handleInputChange}
                    value={addNewReview.body}
                  />
                </label>


                <button className="review-button-clear button" onClick={clearForm}>
                  Clear
                </button>
                <input className="review-button-submit button" type="submit" value="Submit" />

              </form>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default ReviewForm;
