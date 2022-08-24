import axios from 'axios'
import React, { useState, useEffect } from "react";
import BreweryTopSection from './BreweryTopSection';

const BreweryShowPage = (props) => {
  const [brewery, setBrewery] = useState([]);

  let breweryId = props.match.params.id;
  const fetchBrewery = async () => {

    axios.get(`/api/v1/breweries/${breweryId}`)
    .then(response => {
      const breweryDataResponse = response.data
      setBrewery(breweryDataResponse);
      console.log(breweryDataResponse);
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchBrewery();
  }, []);

  return (
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
  )
}

export default BreweryShowPage