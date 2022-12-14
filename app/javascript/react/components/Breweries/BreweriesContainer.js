import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../SearchBar/SearchBar';
import BreweryTile from './BreweryTile';

import default_beer_mug from '../../../../assets/images/default_beer_mug.png'

const Breweries = () => {
  const [savedBreweries, setSavedBreweries] = useState([]);

  const fetchSavedBreweries = async () => {
    axios.get('api/v1/breweries/saved_breweries')
    .then(response => {
      const persistedBreweries = response.data
      setSavedBreweries(persistedBreweries.breweries)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchSavedBreweries();
  }, []);

  const savedBreweriesArray = savedBreweries.map((brewery) => {
    return (
      <BreweryTile
        key={brewery.id}
        id={brewery.obdb_id}
        name={brewery.name}
        type={brewery.brewery_type}
        address={`${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}, ${brewery.country}`}
        city={brewery.city}
        state={brewery.state}
        website={brewery.website_url}
        phone={brewery.phone}
        reviews={brewery.reviews}
        defaultLogo={default_beer_mug}
      />
    )
  })

  return(
    <div>
      <div>
        <SearchBar />
      </div>
      <div className="grid-x">
        {savedBreweriesArray}
      </div>
    </div>
  )
}

export default Breweries