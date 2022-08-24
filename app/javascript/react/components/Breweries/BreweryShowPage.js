import axios from 'axios'
import React, { useState, useEffect } from "react";

const BreweryShowPage = (props) => {
  const [brewery, setBrewery] = useState([]);

  let breweryId = props.match.params.id;
  const fetchBrewery = async () => {

    axios.get(`/api/v1/breweries/${breweryId}`)
    .then(response => {
      const breweryDataResponse = response.data
      setBrewery(breweryDataResponse);
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchBrewery();
  }, []);

  return (
    <div>
      <ul>
        <p>{brewery.name}</p>
        <p>{brewery.brewery_type}</p>
        <p>{`${brewery.street}, ${brewery.city}, ${brewery.state}`}</p>
      </ul>
    </div>
  )
}

export default BreweryShowPage