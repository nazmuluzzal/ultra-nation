import React from "react";
import "./Country.css";

const Country = (props) => {
  //console.log(props.name);
  const { name, capital, population, flag } = props.country;
  const handleAddCountry = props.handleAddCountry;
  return (
    <div className="country-container">
      <div>
        <h4>Country Name: {name}</h4>
        <img src={flag} alt="" />
        <h5>Capital: {capital}</h5>
        <p>Total Population: {population}</p>
        <button onClick={() => handleAddCountry(props.country)}>
          Add Country
        </button>
      </div>
    </div>
  );
};

export default Country;
