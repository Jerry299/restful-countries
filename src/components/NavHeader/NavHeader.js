import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import "./NavHeader.css";

const NavHeader = () => {
  return (
    <header className="header__container">
      <div className="header__wrapper">
        <div className="header--text">Where In The World?</div>
        <div className="header__mode--toggler">
          <p>
            <span>
              <FontAwesomeIcon
                icon={faMoon}
                size={"1x"}
                style={{ marginRight: ".7rem" }}
              />
            </span>
            <span className="header--moon-icon--text">Dark Mode</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
