import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <div className="countries-container">
      <div className="countries-wrapper">
        {countries.map((country) => {
          return (
            <Country
              key={country.alpha3Code}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
