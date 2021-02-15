import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <>
      <div className="search--container">
        <div className="search--wrapper">
          <span className="search--icon">
            <FontAwesomeIcon icon={faSearch} size={"1x"} />
          </span>
          <input
            type="text"
            placeholder="Search for a country.."
            className="search--input"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
