import React from "react";
import DropDown from "../DropDown/DropDown";
import SearchBox from "../SearchBox/SearchBox";
import Countries from "../Countries/Countries";
import Loader from "../Loader/Loader";
import "./AllCountries.css";

const AllCountries = ({
  countries,
  selectValue,
  searchText,
  handleSearchChange,
  handleSelectChange,
  theme,
}) => {
  const filteredByContinent =
    selectValue === "All" || !selectValue
      ? countries
      : countries.filter((country) => {
          return country.region === selectValue;
        });

  return (
    <main className="countries--container">
      <div className={`countries--wrapper-${theme}`}>
        <div className="search--and--filter">
          <div className="search">
            <SearchBox
              // pass handleSearchText as prop to searchbox
              changeHandler={handleSearchChange}
              searchText={searchText}
              theme={theme}
            />
          </div>
          <div className="filter">
            <DropDown
              //pass handleSelectChange as a props
              changeHandler={handleSelectChange}
              selectValue={selectValue}
              theme={theme}
            />
          </div>
        </div>
        <div className="all--countries">
          {countries.length === 0 ? (
            <div className="loading__spinner">
              <Loader />
            </div>
          ) : (
            <Countries countries={filteredByContinent} />
          )}
        </div>
      </div>
    </main>
  );
};

export default AllCountries;
