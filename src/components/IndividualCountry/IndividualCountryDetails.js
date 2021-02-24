import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./IndividualCountry.css";

const IndividualCountryDetails = ({ country, theme }) => {
  let history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  // assigning each country prop to a var list
  let item = country[0];
  let {
    population,
    nativeName,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = item;
  const number = Number(population);
  const formattedPopulation = new Intl.NumberFormat().format(number);

  return (
    <div className={`details--container-${theme}`}>
      <div className="back__button" onClick={goBack}>
        <div className={`btn-${theme}`}>
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
              <div className="details--info--child--two">
                <div className="details--info--child--two__name">
                  <p>
                    <span className="country--desc">Top Level Domain</span>:{" "}
                    <span className="country--span">{topLevelDomain}</span>
                  </p>
                  <p>
                    <span className="country--desc">Currencies</span>:{" "}
                    <span className="country--span">{currencies[0].name}</span>
                  </p>
                  <p>
                    <span className="country--desc">Languages</span>:{" "}
                    <span className="country--span">{languages[0].name}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="country--borders details--info--child--one">
              <section className="country--borders--section">
                <span className="country--desc" id="country--desc">
                  Border Countries :{" "}
                </span>

                {borders.slice(0, 3).map((border) => {
                  return (
                    <span
                      key={border}
                      className={`country--border-${theme}`}
                      id="country--border"
                    >
                      {border}
                    </span>
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualCountryDetails;
