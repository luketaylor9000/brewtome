import React, { useState } from 'react';

const SearchBar = (props) => {
  const [filteredData, setFilteredData] = useState([])

  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = props.data.filter((value) => {
      return value.label.toLowerCase().includes(searchWord.toLowerCase())
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
        <input type="text" placeholder={props.placeholder} onChange={handleFilter} />
        <div className="search-icon"></div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value) => {
            return <li><a className="dataItem" href={`/breweries/${value.value}`}> {value.label} </a></li>
            })
          }
        </div>
      )}
    </div>
  )
}

export default SearchBar