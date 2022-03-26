import React, { Component } from "react";
import "../App.css";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      date,
      source,
    } = this.props;
    return (
      <div>
        <div className="card">
          <section className="news-section">
            <div className="news-item__cards">
              <span className="badge rounded-pill bg-dark" id="source__badge__pink">
                {" "}
                {source}{" "}
              </span>{" "}
              <div className="news_box">
                <div className="newsimg__cards__multiple">
                  <img
                    id="img__id__multiple__cards"
                    src={
                      !imageUrl
                        ? "https://www.shutterstock.com/image-vector/no-image-available-sign-absence-373243873"
                        : imageUrl
                    }
                    className="img-responsive"
                    alt="not available"
                  />
                </div>{" "}
                <div className="news-content">
                  <div className="news_postdate">
                    <span> Jan 03, 2019 </span>{" "}
                  </div>{" "}
                    <a href={newsUrl} target={"_blank"} rel="noreferrer">
                      <h3 id="title__newsitem-h3"> {title} </h3>{" "}
                    </a>{" "}
                  <p> {description} </p>{" "}
                  <span>
                    <p className="card-text">
                      <i className="fa fa-user"> </i>{" "}
                      <small className="text-muted">
                        By {!author ? "unknown" : author}
                        on {new Date(date).toLocaleString()}{" "}
                      </small>{" "}
                    </p>{" "}
                    <a
                      href={newsUrl}
                      target={"_blank"}
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      Read More{" "}
                    </a>{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </div>
    );
  }
}
