/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import "../App.css";
import NavBar from "./navbar";
import Marquee from "./marquee";

const heading = ({ subCategory }) => {
  return (
    <div>
      <>
        <header>
          <div className="App">
            <NavBar />
            <div className="breaking-news-section">
              <span id="btext__news__sec">
                <b>Breaking News</b>
              </span>
              <Marquee />
            </div>
          </div>
        </header>
      </>
    </div>
  );
};

export default heading;
