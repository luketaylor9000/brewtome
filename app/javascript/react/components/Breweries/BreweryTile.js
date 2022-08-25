import React from "react"
import { Link } from "react-router-dom"

const BreweryTile = (props) => {

  return (
    <div className="grid-x small-3">
        <div className="brewery-tile">
          <div className="brewery-tile-text">
            <Link to={`/breweries/${props.id}`}>{props.name}</Link>
          </div>
        </div>
    </div>
  )
}

export default BreweryTile