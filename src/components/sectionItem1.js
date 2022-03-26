import React from "react";
import { Component } from "react";
import "../App.css";

export class SectionItem1 extends Component {
  render() {
    let { title, imageUrl, description } = this.props;
    return (
      <>
        <article className="world">
          <h2 id="world__id__h2">WORLD</h2>
          <img src={imageUrl} alt="second" />
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      </>
    );
  }
}

export default SectionItem1;
