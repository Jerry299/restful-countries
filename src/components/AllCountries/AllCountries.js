import React, { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown";
import SearchBox from "../SearchBox/SearchBox";
import Countries from "../Countries/Countries";
import "./AllCountries.css";

const AllCountries = () => {
  const [searchText, setSearchText] = useState("");
  const [selectValue, setSelectValue] = useState("None");
  const [countries, setCountries] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const fetchCountriesData = () => {
    let url = `https://restcountries.eu/rest/v2/all`;

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

  console.log(selectValue);

  useEffect(() => {
    fetchCountriesData();
  }, [searchText]);

  return (
    <main className="countries--container">
      <div className="countries--wrapper">
        <div className="search--and--filter">
          <div className="search">
            <SearchBox
              // pass handleSearchText as prop to searchbox
              changeHandler={handleSearchChange}
              searchText={searchText}
            />
          </div>
          <div className="filter">
            <DropDown
              //pass handleSelectChange as a props
              changeHandler={handleSelectChange}
              selectValue={selectValue}
            />
          </div>
        </div>
        <div className="all--countries">
          <Countries countries={countries} />
        </div>
      </div>
    </main>
  );
};

export default AllCountries;
