import React from "react";
import BreweryBannerRandomizer from "./BreweryBannerRandomizer";

const BreweryTopSection = (props) => {
  return (
    <div className="brewery-top-section">
        <div className="brewery-banner-photo">
          <BreweryBannerRandomizer />
        </div>
      <div className="brewery-top-section-box">
        <div className="brewery-info">
          <div className="brewery-name">{props.name}</div>
          <div className="brewery-address">{props.address}</div>
          <div className="brewery-type">Brewery Type: {`${props.type}`.toUpperCase()}</div>
          <div className="brewery-website"><a href={props.website}>{props.website}</a></div>
          <div className="brewery-phone">{props.phone}</div>
        </div>
      </div>
    </div>
  );
};
export default BreweryTopSection;
