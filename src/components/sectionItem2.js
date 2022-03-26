import React from "react";
import { Component } from "react";
import "../App.css";

export class SectionItem2 extends Component {
  render() {
    let { title, imageUrl, description } = this.props;
    return (
      <>
        <article className="sports">
          <h2 id="world__id__h2">SPORTS</h2>
          <img src={imageUrl} alt="second" />
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      </>
    );
  }
}

export default SectionItem2;
