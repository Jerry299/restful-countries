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
  const [theme, setTheme] = useState(true);
  const color = theme ? "Light" : "Dark";

  // event handlers
  const handleSearchChange = (e) => {
    setSearchText(e.target.value.trim().toLowerCase());
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handlePageTheme = () => {
    setTheme(!theme);
  };
  // effects
  useEffect(() => {
    // fetch function
    const fetchCountriesData = () => {
      let url = `https://restcountries.eu/rest/v2/all`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((err) => console.log(err));
    };
    fetchCountriesData();
  }, [searchText, selectValue]);

  const filterCountriesBySearch = countries.filter((country) => {
    return country.name.toLowerCase().match(searchText);
  });

  return (
    <Router>
      <div className="app">
        <NavHeader theme={color} handlePageTheme={handlePageTheme} />
      </div>

      <Switch>
        <Route exact path="/">
          <AllCountries
            theme={color}
            countries={filterCountriesBySearch}
            selectValue={selectValue}
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            handleSelectChange={handleSelectChange}
          />
        </Route>
        <Route exact path="/countries/:name">
          <IndividualCountry theme={color} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
