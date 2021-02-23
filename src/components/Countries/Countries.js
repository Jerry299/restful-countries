import React from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = ({ countries, theme }) => {
  return (
    <div className="countries-container">
      <div className="countries-wrapper">
        {countries.map((country) => {
          return (
            <Country
              key={country.name}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
