import React, { useState } from "react"

import ReviewForm from "./ReviewForm"

const ReviewAccordion = (props) => {

  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="review-accordion">
      <li className="accordion-item">
        <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
          <h3>submit a new review</h3><span>{isActive ? "-" : "+"}</span>
        </div>
        {isActive && <div className=""><ReviewForm closeDropdown={toggleIsActive} addReview={props.addReview}/></div>}
      </li>
    </div>
  );
}

export default ReviewAccordion