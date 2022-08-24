import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBarV2 = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [breweries, setBreweries] = useState([])

  const fetchBreweryMatches = (searchQuery) => {

    axios.get(`/api/v1/breweries?search_query=${searchQuery}`)
    .then(response => {
      const breweryDataResponse = response.data
      setBreweries(breweryDataResponse);
    }).catch(err => {
      console.log(err)
    })

  }

  let filteredData = breweries

  if (searchQuery === "") {
    filteredData = []
  } else {
    filteredData = breweries.filter((brewery) => {
      return brewery.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
  }

  const changeHandler = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    fetchBreweryMatches(searchQuery)
    }, [searchQuery])

  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <input 
          type="text" 
          placeholder="Search for Breweries" 
          onChange={changeHandler} 
        />
      </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((brewery) => {
              return (
                <div key={brewery.id}>
                <a className="dataItem" href={`/breweries/${brewery.id}`}> {brewery.name} </a></div>
              )
              })
            }
          </div>
        )}
    </div>
  )
}

export default SearchBarV2