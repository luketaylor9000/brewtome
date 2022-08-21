import React, { useState, useEffect } from "react";

const BreweryShowPage = (props) => {
  const [brewery, setBrewery] = useState([]);

  let breweryId = props.match.params.id;
  const fetchBrewery = async () => {
    try {
      const response = await fetch(`/api/v1/breweries/${breweryId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const breweryDataResponse = await response.json();
      setBrewery(breweryDataResponse)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBrewery();
  }, []);

  return (
    <div>
      <ul>
        <p>{brewery.name}</p>
        <p>{brewery.brewery_type}</p>
        <p>{`${brewery.street}, ${brewery.city}, ${brewery.state}`}</p>
      </ul>
    </div>
  )
}

export default BreweryShowPage