import React from "react";
import { Component } from "react";
import "../App.css";

export class SectionItem3 extends Component {
  render() {
    let { title, imageUrl, description } = this.props;
    return (
      <>
        <article className="politics">
          <h2 id="world__id__h2">ENTERTAINMENT</h2>
          <img src={imageUrl} alt="first" />

          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      </>
    );
  }
}

export default SectionItem3;
