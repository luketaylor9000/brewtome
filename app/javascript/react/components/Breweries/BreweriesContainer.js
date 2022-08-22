import axios from 'axios'
import React, { useState, useEffect } from 'react';
import ReactDropdown from 'react-dropdown';
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom'

import SearchBar from '../SearchBar/SearchBar';

const Breweries = (props) => {
  const [breweries, setBreweries] = useState([])
  const [selectedBrewery, setSelectedBrewery] = useState()
  let defaultOption = "";

  const fetchBreweries = async () => {

    axios.get(`api/v1/breweries`)
    .then(response => {
      const returnedBreweries = response.data
      setBreweries(returnedBreweries);
    }).catch(err => {
      console.log(err)
    })
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
      <div>
      <ReactDropdown 
        options={breweryArray} 
        onChange={handleSelect} 
        value={defaultOption} 
        placeholder="Select an option" />
      <Link to={`/breweries/${selectedBrewery}`} className="button">Submit</Link>
      </div>
      <div>
        <SearchBar 
        placeholder="Search for Breweries"
        data={breweryArray}
        />
      </div>
    </div>
  )
}

export default Breweries