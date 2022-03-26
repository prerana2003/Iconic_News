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
      articles: [1],
      loading: true,
    };
    document.title = `Iconic News`;
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=dfce1de9c8594fc2898a57dbdcd0a006";
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
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
                {this.state.articles.slice(2, 3).map((element) => {
                  return (
                    <ArticleItem1
                      key={element.title}
                      title={element.title}
                      imageUrl={element.urlToImage}
                      date={element.publishedAt}
                    />
                  );
                })}
                {this.state.articles.slice(5, 6).map((element) => {
                  return (
                    <ArticleItem2
                      key={element.title}
                      title={element.title}
                      imageUrl={element.urlToImage}
                      date={element.publishedAt}
                    />
                  );
                })}
                {this.state.articles.slice(8, 9).map((element) => {
                  return (
                    <ArticleItem3
                      key={element.title}
                      title={element.title}
                      imageUrl={element.urlToImage}
                      date={element.publishedAt}
                    />
                  );
                })}
                {this.state.articles.slice(11, 12).map((element) => {
                  return (
                    <ArticleItem4
                      key={element.title}
                      title={element.title}
                      imageUrl={element.urlToImage}
                      date={element.publishedAt}
                    />
                  );
                })}
                {this.state.articles.slice(14, 15).map((element) => {
                  return (
                    <ArticleItem5
                      key={element.title}
                      title={element.title}
                      imageUrl={element.urlToImage}
                      date={element.publishedAt}
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
