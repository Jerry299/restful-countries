import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidfaMoon } from "@fortawesome/free-solid-svg-icons";
import "./NavHeader.css";

const NavHeader = ({ theme, handlePageTheme }) => {
  return (
    <header className="header__container">
      <div className={`header__wrapper-${theme}`}>
        <div className="header--text">Where In The World?</div>
        <div className="header__mode--toggler" onClick={handlePageTheme}>
          <div>
            {theme === "Light" ? (
              <span>
                <FontAwesomeIcon
                  icon={faMoon}
                  size={"1x"}
                  style={{ marginRight: ".7rem" }}
                />
              </span>
            ) : (
              <span>
                <FontAwesomeIcon
                  icon={solidfaMoon}
                  size={"1x"}
                  style={{ marginRight: ".7rem" }}
                />
              </span>
            )}

            <span className="header--moon-icon--text">{theme} Mode</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
