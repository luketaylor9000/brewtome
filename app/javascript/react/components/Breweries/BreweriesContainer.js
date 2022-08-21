import React, { useState, useEffect } from 'react';
import ReactDropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import { Link } from "react-router-dom"

const Breweries = (props) => {
  const [breweries, setBreweries] = useState([])
  const [selectedBrewery, setSelectedBrewery] = useState()
  let defaultOption = "";

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

  const handleSelect = (selection) => {
    setSelectedBrewery(selection.value)
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
      <Link to={`/breweries/${selectedBrewery}`} className="button">Submit</Link>
    </div>
  )
}

export default Breweries