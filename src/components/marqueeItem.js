import React, { Component } from "react";
import "../App.css";

export class MarqueeItem extends Component {
  render() {
    let { title, date, newsUrl } = this.props;

    return (
      <>
        <p className="bntime">{new Date(date).toLocaleString()}</p>
        <a className="maqueA" href={newsUrl} target="_blank">
          {title}
        </a>
      </>
    );
  }
}

export default MarqueeItem;
