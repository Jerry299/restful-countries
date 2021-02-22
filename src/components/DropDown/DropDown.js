import React from "react";
import "./DropDown.css";

const DropDown = ({ changeHandler, selectValue, theme }) => {
  return (
    <div className="dropdown--container">
      <div>
        <select
          className={`select-${theme}`}
          id="standard-select"
          onChange={changeHandler}
          value={selectValue}
        >
          <option value="All"> Filter By Region </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <span className="focus"></span>
      </div>
    </div>
  );
};

export default DropDown;
