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
  },[]);

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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const addReview = async (formInput) => {

    axios.post(`/api/v1/breweries/${breweryId}/reviews`, formInput, {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(function (response) {
      console.log(response);
      setReviews(reviews.concat(response.data.review));
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
        <ReviewContainer reviews={reviews} addReview={addReview} />
      </div>
    </div>
  )
}

export default BreweryShowPage