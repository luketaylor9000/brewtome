import React from "react"
import { Link } from "react-router-dom"

const BreweryTile = (props) => {

  const logo = `https://logo.clearbit.com/${props.website}?size=260`

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
              <p>Most recent review tidbit here...</p>
            </figcaption>
          </figure>
        </Link>
      </div>
    </div>
  )
}

export default BreweryTile