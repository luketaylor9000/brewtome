import React, { useState } from 'react';
import axios from 'axios';

const SearchBarV2 = (props) => {
  const [filteredData, setFilteredData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [breweries, setBreweries] = useState([])

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setSearchQuery(searchWord)

    axios.get(`/api/v1/breweries?search_query=${searchQuery}`)
    .then(response => {
      const breweryDataResponse = response.data
      setBreweries(breweryDataResponse);
    }).catch(err => {
      console.log(err)
    })

    const newFilter = breweries.filter((brewery) => {
      return brewery.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter) 
    }
  }

  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <input type="text" placeholder="Search for Breweries" onChange={handleFilter} />
        <div className="search-icon"></div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((brewery) => {
            return (
              <li><a className="dataItem" href={`/breweries/${brewery.id}`}> {brewery.name} </a></li>
            )
            })
          }
        </div>
      )}
    </div>
  )
}

export default SearchBarV2