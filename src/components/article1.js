import React, { Component } from "react";
import { ArticleItem1 } from "./articleItem1";
import { ArticleItem2 } from "./articleitem2";
import { ArticleItem3 } from "./articleitem3";
import { ArticleItem4 } from "./articleitem4";
import { ArticleItem5 } from "./articleitem5";
import Aside from "./aside";

export class Article1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [5],
      loading: true,
    };
    document.title = `Iconic News`;
  }

  async componentDidMount() {
    let url =
      "https://newsdata.io/api/1/news?apikey=pub_5811eeeb9c2ee8efbe0956152bd19f024775&country=in&category=top";
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      results: parsedData.results,
    });
  }

  render() {
    return (
      <>
        <article id="popular-news">
          <div id="featured">
            <h2 id="popular__news__id">POPULAR NEWS</h2>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="5"
                ></li>
              </ol>
              <div className="carousel-inner">
                {this.state.results.slice(0, 1).map((element) => {
                  return (
                    <ArticleItem1
                      key={element.title}
                      title={element.title}
                      imageUrl={element.image_url}
                      date={element.pubDate}
                    />
                  );
                })}
                {this.state.results.slice(1, 2).map((element) => {
                  return (
                    <ArticleItem2
                      key={element.title}
                      title={element.title}
                      imageUrl={element.image_url}
                      date={element.pubDate}
                    />
                  );
                })}
                {this.state.results.slice(2, 3).map((element) => {
                  return (
                    <ArticleItem3
                      key={element.title}
                      title={element.title}
                      imageUrl={element.image_url}
                      date={element.pubDate}
                    />
                  );
                })}
                {this.state.results.slice(3, 4).map((element) => {
                  return (
                    <ArticleItem4
                      key={element.title}
                      title={element.title}
                      imageUrl={element.image_url}
                      date={element.pubDate}
                    />
                  );
                })}
                {this.state.results.slice(4, 5).map((element) => {
                  return (
                    <ArticleItem5
                      key={element.title}
                      title={element.title}
                      imageUrl={element.image_url}
                      date={element.pubDate}
                    />
                  );
                })}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <Aside />
        </article>
      </>
    );
  }
}

export default Article1;
