import React, { useState } from "react"

import ReviewForm from "./ReviewForm"

const ReviewAccordion = (props) => {

  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="review-accordion">
      <div className="accordion-item">
        <button className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
          <h4>submit a new review</h4><span>{isActive ? "-" : "+"}</span>
        </button>
        <div className="accordion-review-form">
        {isActive && <div><ReviewForm closeDropdown={toggleIsActive} addReview={props.addReview}/></div>}
        </div>
      </div>
    </div>
  );
}

export default ReviewAccordion