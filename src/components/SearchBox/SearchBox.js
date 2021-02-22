import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./SearchBox.css";

const SearchBox = ({ changeHandler, theme }) => {
  return (
    <>
      <div className="search--container">
        <div className="search--wrapper">
          <span className="search--icon">
            <FontAwesomeIcon
              icon={faSearch}
              size={"1x"}
              style={{
                color: theme === "Dark" ? "#fff" : "#000",
              }}
            />
          </span>
          <input
            type="text"
            placeholder="Search for a country.."
            className={`search--input-${theme}`}
            onChange={changeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
