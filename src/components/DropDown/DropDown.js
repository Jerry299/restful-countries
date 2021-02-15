import React from "react";
import "./DropDown.css";

const DropDown = () => {
  return (
    <div className="dropdown--container">
      <div className="select">
        <select id="standard-select">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
          <option value="Option 5">Option 5</option>
        </select>
        <span className="focus"></span>
      </div>
    </div>
  );
};

export default DropDown;
