import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./IndividualCountry.css";

const IndividualCountryDetails = ({ country }) => {
  let item = country[0];
  let { population, nativeName, region, subregion, capital } = item;
  const number = Number(population);
  const formattedPopulation = new Intl.NumberFormat().format(number);

  return (
    <div className="details--container">
      <div className="back__button">
        <div className="btn">
          <span>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ marginRight: "1.1rem" }}
              size="1x"
            />
          </span>
          Back
        </div>
      </div>
      <div className="details--wrapper">
        <div className="details--body">
          <div className="details--flag">
            <img src={item.flag} alt="" className="details--flag--img" />
          </div>
          <div className="details--info">
            <div className="details--info--wrapper">
              <div className="details--info--child--one">
                <div className="details--info--child--one__name">
                  <p className="item--name">{item.name}</p>
                  <div>
                    <p>
                      <span className="country--desc">Native Name</span>:{" "}
                      <span className="country--span">{nativeName}</span>
                    </p>
                    <p>
                      <span className="country--desc">Population</span>:{" "}
                      <span className="country--span">
                        {formattedPopulation}
                      </span>
                    </p>
                    <p>
                      <span className="country--desc">Region</span>:{" "}
                      <span className="country--span">{region}</span>
                    </p>
                    <p>
                      <span className="country--desc">Sub Region</span>:{" "}
                      <span className="country--span">{subregion}</span>
                    </p>
                    <p>
                      <span className="country--desc">Capital</span>:{" "}
                      <span className="country--span">{capital}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="details--info--child--two">Child 2</div>
            </div>
            <div className="country--borders">Borders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualCountryDetails;
