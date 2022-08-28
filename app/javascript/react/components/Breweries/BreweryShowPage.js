import axios from 'axios'
import React, { useState, useEffect } from "react";
import ReviewContainer from '../Reviews/ReviewContainer';
import BreweryTopSection from './BreweryTopSection';

const BreweryShowPage = (props) => {
  const [brewery, setBrewery] = useState({});
  const [reviews, setReviews] = useState([]);

  let breweryId = props.match.params.id;
  
  const fetchBrewery = async () => {

    axios.get(`/api/v1/breweries/${breweryId}`)
    .then(response => {
      const breweryDataResponse = response.data
      setBrewery(breweryDataResponse.brewery);
      setReviews(breweryDataResponse.brewery.reviews);
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchBrewery();
  }, []);

  // eventually replace with new review
  const submitBrewery = () => {
    console.log("submit brewery")

    axios.post('/api/v1/breweries', brewery, {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      } 
    })
    .then(function (response) {

      // if this axios request were posting a new REVIEW
      // in the .then afterwards we would do: 
      // setBrewery({
      //   ...brewery, 
      //   reviews: brewery.reviews.concat(response.review)
      // })
      
      // setReviews(reviews.concat(response.review))


      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  return (
    <div>
      <div>
        <BreweryTopSection
          key={brewery.id}
          name={brewery.name}
          type={brewery.brewery_type}
          address={`${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}, ${brewery.country}`}
          website={brewery.website_url}
          phone={brewery.phone}
        />
      </div>
      <div>
        <button className="button" onClick={submitBrewery}>Submit</button>
      </div>
      <div>
        <ReviewContainer reviews={reviews} />
      </div>
    </div>
  )
}

export default BreweryShowPage