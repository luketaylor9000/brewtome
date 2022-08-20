import React, { useState, useEffect } from 'react';
import BreweryTile from './BreweryTile';

const Breweries = (props) => {
  const [breweries, setBreweries] = useState([])

  const fetchBreweries = async () => {

    try {
      // const city = "boston"
      const response = await fetch(`api/v1/breweries`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage);
        throw(error);
      }
      const returnedBreweries = await response.json();
      setBreweries(returnedBreweries);
      console.log(returnedBreweries);
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchBreweries()
  }, [])

  const breweryArray = breweries.map((brewery) => {
    return (
      <BreweryTile
        key={brewery.id}
        id={brewery.id}
        name={brewery.name}
      />
    )
  })

  return(
    <div>
      {breweryArray}
    </div>
  )
}

export default Breweries