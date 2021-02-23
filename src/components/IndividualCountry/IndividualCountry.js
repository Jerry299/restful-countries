import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IndividualCountryDetails from "./IndividualCountryDetails";
import Loader from "../Loader/Loader";

import "./IndividualCountry.css";

const IndividualCountry = ({ theme }) => {
  const [country, setCountry] = useState([]);

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div>
      {country.length <= 0 ? (
        <Loader />
      ) : (
        <div className="country--details">
          <IndividualCountryDetails country={country} theme={theme} />
        </div>
      )}
    </div>
  );
};

export default IndividualCountry;
