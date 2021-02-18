import React from "react";
import Country from "./Country";
import IndividualCountry from "../IndividualCountry/IndividualCountry";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import "./Countries.css";

const Countries = ({ countries }) => {
  let { path, url } = useRouteMatch();
  return (
    <div className="countries-container">
      <div className="countries-wrapper">
        {countries.map((country) => {
          return (
            <Link to={`${url}/${country.name}`}>
              <Country
                key={country.alpha3Code}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
              />
            </Link>
          );
        })}
        <Switch>
          <Route exact path={`${path}/:topicId`}>
            <IndividualCountry />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Countries;
