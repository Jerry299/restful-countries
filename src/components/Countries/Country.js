import React from "react";
import "./Countries.css";

const Country = ({ name, population, region, capital }) => {
  return (
    <div className="country--container">
      <div className="country--card">
        <div className="img--container">Country Photo</div>
        <div className="country--body">
          <div className="country--name">{name}</div>
          <div className="country--population">
            Population: <span className="country--span"> {population}</span>
          </div>
          <div className="country--region">
            Region: <span className="country--span"> {region}</span>
          </div>
          <div className="country--capital">
            Capital: <span className="country--span"> {capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
