import React from "react";
import Search from "./Search.js";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-wrapper">
          <div className="weather-app">
            <Search />
            <div className="weatherInfo">
              <div className="overview">
                <h1 id="city">Mexico City</h1>
                <ul>
                  <li>
                    <span id="date">July 2, 2021</span>
                  </li>
                  <li>
                    <span id="time">13:51</span>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-5">
                  <div className="clearfix weather-temperature">
                    <div className="float-left">
                      <strong id="temperature">22</strong>
                      <span className="units">
                        <a href="#" id="celsius-link" className="active">
                          °C
                        </a>{" "}
                        |
                        <a href="#" id="fahrenheit-link">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <h7>
                    <strong>
                      {" "}
                      Feels like: <span id="feels-like"></span>
                    </strong>
                  </h7>
                  <ul>
                    <li id="description"></li>
                  </ul>
                </div>
                <div className="col-3">
                  <ul>
                    <span className="conditions">
                      <li>
                        Humidity:
                        <span id="humidity">57</span>%
                      </li>
                      <li>
                        Wind:
                        <span id="wind">8</span> km/h
                      </li>
                    </span>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="forecastInfo">
              <div className="weather-forecast" id="forecast"></div>
            </div>
          </div>
          <footer>
            <small>
              Coded by
              <a
                href="https://www.linkedin.com/in/carolina-genoveva-echevarría-aguilar"
                target="_blank"
              >
                Carolina Echevarria <i className="fab fa-linkedin"></i>
              </a>
              <br />
              <a
                href="https://github.com/caro-echevarria/weather-react"
                target="_blank"
              >
                Open-sourced <i className="fab fa-github"></i>
              </a>
              and
              <a
                href="https://thirsty-yonath-79ee10.netlify.app/"
                target="_blank"
              >
                hosted at Netlify
                <span
                  className="iconify"
                  data-icon="simple-icons:netlify"
                  data-inline="false"
                ></span>
              </a>
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}
