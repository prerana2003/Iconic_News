import React from "react";
import { Component } from "react";
import "../App.css";

export class ArticleItem2 extends Component {
  render() {
    let { title, imageUrl, date } = this.props;
    return (
      <>
        <div className="carousel-item ">
          <img
            className="d-block w-100"
            id="img__carousel__2"
            src={imageUrl}
            alt="First slide"
          />
          <div className="carousel-caption d-md-block">
            <h5 className="h5__class_search">{title}</h5>
            <p>{date}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ArticleItem2;
