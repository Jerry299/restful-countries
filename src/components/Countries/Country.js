import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   useRouteMatch,
// } from "react-router-dom";
import "./Countries.css";

const Country = ({ name, population, region, capital, flag }) => {
  const number = Number(population);
  const formattedPopulation = new Intl.NumberFormat().format(number);
  return (
    <div className="country--container">
      <div className="country--card">
        <div className="img--container">
          <img src={flag} alt="" className="img" />
        </div>
        <div className="country--body">
          <div className="country--name">{name}</div>
          <div className="country--population">
            <span className="country--desc"> Population: </span>
            <span className="country--span"> {formattedPopulation}.</span>
          </div>
          <div className="country--region">
            <span className="country--desc"> Region: </span>
            <span className="country--span"> {region}.</span>
          </div>
          <div className="country--capital">
            <span className="country--desc"> Capital: </span>{" "}
            <span className="country--span"> {capital}.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
