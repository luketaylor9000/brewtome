import React, { useState, useEffect } from 'react';

const Breweries = (props) => {
  const [breweries, setBreweries] = useState([])

  const fetchBreweries = async () => {

    try {
      const city = "boston"
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

  let breweryData
  if (breweries.length > 0) {
    breweryData = <div>{breweries[0].name}</div> 
  }

  return(
    <div>
      {breweryData}
    </div>
  )
}

export default Breweries