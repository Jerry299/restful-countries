import React from "react";
import "./DropDown.css";

const Dropdown2 = () => {
  return (
    <div>
      <label for="favcity">
        <select id="favcity" name="select">
          <option value="0">Choose your favorite city</option>
          <option value="1">Amsterdam</option>
          <option value="2">Buenos Aires</option>
          <option value="3">Delhi</option>
          <option value="4">Hong Kong</option>
          <option value="5">London</option>
        </select>
      </label>
    </div>
  );
};

export default Dropdown2;
