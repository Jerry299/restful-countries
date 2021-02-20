import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavHeader from "./components/NavHeader/NavHeader";
import AllCountries from "./components/AllCountries/AllCountries";
import IndividualCountry from "./components/IndividualCountry/IndividualCountry";

function App() {
  // app state
  const [searchText, setSearchText] = useState("");
  const [selectValue, setSelectValue] = useState("All");
  const [countries, setCountries] = useState([]);

  // event handlers
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  // effects
  useEffect(() => {
    // fetch function
    const fetchCountriesData = () => {
      let url = `https://restcountries.eu/rest/v2/all`;
      // fetch(url)
      //   .then((res) => res.json())
      //   .then((data) => setCountries(data))
      //   .catch((err) => console.log(err));

      if (!searchText || searchText === "") {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setCountries(data))
          .catch((err) => console.log(err));
      } else {
        fetch(`https://restcountries.eu/rest/v2/name/${searchText}`)
          .then((res) => res.json())
          .then((data) => setCountries(data))
          .catch((err) => console.log(err));
      }
    };
    fetchCountriesData();
  }, [searchText, selectValue]);

  return (
    <Router>
      <div className="app">
        <NavHeader />
      </div>

      <Switch>
        <Route exact path="/">
          <AllCountries
            countries={countries}
            selectValue={selectValue}
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            handleSelectChange={handleSelectChange}
          />
        </Route>
        <Route exact path="/countries/:name">
          <IndividualCountry />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
