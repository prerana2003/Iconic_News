import React, { Component } from "react";

import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
export class Article1 extends Component {
  render() {
    return (
      <>
        <section className="more-news">
          <div className="news-section">
            <Section1 key="1" />
            <Section2 key="2" />
            <Section3 key="3" />
          </div>
        </section>
      </>
    );
  }
}

export default Article1;
