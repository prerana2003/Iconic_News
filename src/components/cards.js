import React from "react";
import "../App.css";

const Cards = ({ title, description }) => {
  return (
    <div>
      <section className="news-section">
        <div className="container">
          <div className="row">
            {/* <!--Single Blog Start--> */}
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0ms"
            >
              <div className="news-item__cards">
                <div className="news_box">
                  <div className="newsimg__cards__multiple">
                    <img
                      id="img__id__multiple__cards"
                      className="img-responsive"
                      src={"https://i.ibb.co/CKNmhMX/blog1.jpg.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="news-content">
                    <div className="news_postdate">
                      <span>Jan 03, 2019</span>
                    </div>
                    <a href="/">
                      <h3>{title} </h3>
                    </a>
                    <p>{description}</p>
                    <div className="news_authorinfo">
                      <span>
                        <i className="fa fa-user"></i>{" "}
                        <a href="/">Robert Tylor </a>
                      </span>
                      <span>
                        <i className="fa fa-comment"></i>{" "}
                        <a href="/">Comments: (2)</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
