import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <div className="countries-container">
      {countries.map((country) => {
        return <Country key={country.alpha3Code} name={country.name} />;
      })}
    </div>
  );
};

export default Countries;
