import React, { useState, useEffect } from 'react';
import ReactDropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import { Redirect } from "react-router-dom"

const Breweries = (props) => {
  const [breweries, setBreweries] = useState([])
  let defaultOption = "";
  let selectedBreweryId = "";

  const fetchBreweries = async () => {

    try {
      const response = await fetch(`api/v1/breweries`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage);
        throw(error);
      }
      const returnedBreweries = await response.json();
      setBreweries(returnedBreweries);
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const breweryArray = breweries.map((brewery) => {
    return (
      {value: brewery.id, label: brewery.name}
    )
  })

  function handleSelect (x) {
    console.log(x)
    selectedBreweryId = x.value
    console.log(selectedBreweryId)
  }

  function handleClick () {
    console.log(selectedBreweryId)
    return <Redirect push to={`/breweries/${selectedBreweryId}`} />
  }

  useEffect(() => {
    fetchBreweries();
  }, [])

  return(
    <div>
      <ReactDropdown 
        options={breweryArray} 
        onChange={handleSelect} 
        value={defaultOption} 
        placeholder="Select an option" />
      <button className="button" onClick={handleClick}>submit</button>
    </div>
  )
}

export default Breweries