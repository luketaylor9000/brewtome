import React from "react"
import { Link } from "react-router-dom"

const BreweryTile = (props) => {

  const logo = `https://logo.clearbit.com/${props.website}?size=260`

  const recentReviewObject = props.reviews[(props.reviews).length-1]
  return (
    <div className="brewery-tile-container row">
      <div className="brewery-tile small-4 columns">
      <Link to={`/breweries/${props.id}`}>
          <figure className="image-block">
            <img 
              src={logo}
              onError={({ currentTarget }) => {
                // currentTarget.onerror = null; // prevents looping
                currentTarget.src = props.defaultLogo;
              }}
            />
            <figcaption>
              <h3>{props.name}</h3>
              <p className="recent-review text-center">
                <div className="recent-review-rating">{recentReviewObject.rating}</div>
                <div className="recent-review-body">"{recentReviewObject.body}"</div> 
                <div className="recent-review-username">-{recentReviewObject.username}</div>
              </p>
            </figcaption>
          </figure>
        </Link>
      </div>
    </div>
  )
}

export default BreweryTile