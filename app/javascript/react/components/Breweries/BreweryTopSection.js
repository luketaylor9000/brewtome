import React from "react";

const BreweryTopSection = (props) => {
// debugger
  return (
    <div className="brewery-top-section">
        <div className="brewery-banner-photo">
          <img src="https://www.bigoysterbrewery.com/images/flic/galleries/9/original/29_big-oyster-bar.jpg" alt="brewery banner background" />
        </div>
      <div className="brewery-top-section-box">
        <div className="brewery-info">

          <div className="brewery-logo">
            <img className="clearbit-img" src={`https://logo.clearbit.com/${props.website}?size=150`} alt="brewery logo"/>
          </div>

        {/* <img className="brewery_logo" src={`../images/brewery_logos/${props.obdbid}_logo.png`} alt="brewery logo"/> */}
        {/* <img className="brewery_logo" src={`../../../../assets/images/brewery_logos/${props.obdbid}_logo.png`} alt="brewery logo"/> */}
        {/* <img className="brewery_logo" src={`app/assets/images/brewery_logos/${props.id}_logo.png`} alt="brewery logo"/> */}
        {/* <img className="brewery_logo" src={`../../../../assets/images/brewery_logos/${props.id}_logo.png`} alt="brewery logo"/> */}
        {/* <img className="brewery_logo" src={require(`../../../../assets/images/brewery_logos/${props.id}_logo.png`)} alt="brewery logo"/> */}

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
