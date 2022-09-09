import React from "react"
import { Link } from "react-router-dom"

const BreweryTile = (props) => {

  // return (
  //   <div className="brewery-tile-container row">
  //       <div className="brewery-tile small-4 columns">
  //       <Link to={`/breweries/${props.id}`}>
  //         <div className="brewery-tile-title card-divider">
  //           {props.name}
  //         </div>
  //         <div className="brewery-tile-photo card-divider">
  //           <img className="brewery-tile-img" src="https://cdn.shopify.com/s/files/1/0606/6146/5304/files/Fort_Point_web_first_floor_720x.jpg?v=1647981045" alt="brewery photo"></img>
  //         </div>
  //         <div className="brewery-tile-text card-divider">
  //           <p>Most recent review tidbit here...</p>
  //         </div>
  //         <div className="brewery-tile-user card-divider">
  //           <p>posted by User...</p>
  //         </div>
  //       </Link>
  //       </div>
  //   </div>
  // )

  return (
    <div className="brewery-tile-container row">
      <div className="brewery-tile small-4 columns">
      <Link to={`/breweries/${props.id}`}>
          <figure class="image-block">
            <img src="https://img.freepik.com/free-photo/side-view-various-salty-beer-snacks-wood-platter-pouring-beer-into-mug-rustic-wood_141793-6568.jpg" alt="" />
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