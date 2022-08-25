import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../SearchBar/SearchBar';
import BreweryTile from './BreweryTile';

const Breweries = (props) => {
  const [savedBreweries, setSavedBreweries] = useState([]);

  const fetchSavedBreweries = async () => {

    axios.get('api/v1/breweries/saved_breweries')
    .then(response => {
      const persistedBreweries = response.data
      setSavedBreweries(persistedBreweries)
      // console.log(persistedBreweries)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchSavedBreweries();
  }, []);
  // debugger

  console.log(savedBreweries.breweries)

  // let savedBreweriesArray = savedBreweries.breweries.map((brewery) => {
  //   return (
  //     <BreweryTile
  //       key={brewery.id}
  //       id={brewery.obdb_id}
  //       name={brewery.name}
  //       type={brewery.brewery_type}
  //       address={`${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}, ${brewery.country}`}
  //       website={brewery.website_url}
  //       phone={brewery.phone}
  //     />
  //   )
  // })

  return(
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        {/* {savedBreweriesArray} */}
      </div>
    </div>
  )
}

export default Breweries