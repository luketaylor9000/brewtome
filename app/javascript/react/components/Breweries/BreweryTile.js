import React from "react"
import { Link } from "react-router-dom"

const BreweryTile = (props) => {

  return (
    <div className="brewery-tile-container row">
      <div className="brewery-tile small-4 columns">
      <Link to={`/breweries/${props.id}`}>
          <figure className="image-block">
            {/* <img src="https://img.freepik.com/free-photo/side-view-various-salty-beer-snacks-wood-platter-pouring-beer-into-mug-rustic-wood_141793-6568.jpg" alt="" /> */}
            <img src={`https://logo.clearbit.com/${props.website}?size=260`} alt={`${props.name} logo`} />
            {/* <img src={logo} alt="" /> */}
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