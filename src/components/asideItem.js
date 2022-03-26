import React, { Component } from "react";
import "../App.css";

export class AsideItem extends Component {
 

  render() {
    let { title, imageUrl } = this.props;

    const imageUrl1 = imageUrl;
    return (
      <>
        <div className="recent-news">
          <img src={imageUrl1} alt="carousel" />
          <p className="recent__news__class__3">{title}</p>
        </div>
      </>
    );
  }
}

export default AsideItem;
