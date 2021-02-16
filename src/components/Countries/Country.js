import React from "react";
import "./Countries.css";

const Country = ({ name }) => {
  return (
    <div className="country--container">
      <div className="country--card">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Country;
