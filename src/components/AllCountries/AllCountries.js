import React from "react";
import DropDown from "../DropDown/DropDown";
import SearchBox from "../SearchBox/SearchBox";
import "./AllCountries.css";

const AllCountries = () => {
  return (
    <main className="countries--container">
      <div className="countries--wrapper">
        <div className="search--and--filter">
          <div className="search">
            <SearchBox />
          </div>
          <div className="filter">
            <DropDown />
          </div>
        </div>
        <div className="all--countries">all countries</div>
      </div>
    </main>
  );
};

export default AllCountries;
