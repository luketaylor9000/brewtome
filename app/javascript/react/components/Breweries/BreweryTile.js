import React from "react"
import { Link } from "react-router-dom"

const BreweryTile = (props) => {

  return (
    <div className="brewery-tile-container row">
        <div className="brewery-tile card small-4 columns">
          <div className="brewery-tile-title card-divider">
            <Link to={`/breweries/${props.id}`}>{props.name}</Link>
          </div>
          <div className="brewery-tile-photo card-divider">
            <img className="brewery-tile-img"></img>
          </div>
          <div className="brewery-tile-text card-divider">
            <p>Most recent review tidbit here...</p>
          </div>
          <p>posted by User...</p>
        </div>
    </div>
  )
}

export default BreweryTile