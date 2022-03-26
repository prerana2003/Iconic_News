import React, { Component } from "react";
import Section from "./section";
import Article1 from "./article1";
import "../App.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <Article1 />

        <Section />
      </div>
    );
  }
}

export default Home;
