import { NewsItem } from "./NewsItem";
import { Spinner } from "./spinner";
import React, { Component } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 4,
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: "general",
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      loader: false
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-Iconic News`;
  }

  async componentDidMount() {
    this.props.setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dfce1de9c8594fc2898a57dbdcd0a006&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);


    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({
      loader: true
    });
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dfce1de9c8594fc2898a57dbdcd0a006&page=${this.state.page}=pageSize=${this.props.pageSize}`;
    let data = await fetch(url);

    let parsedData = await data.json();

    if(parsedData.status === "ok"){
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  this.setState({
    loader: false
  });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "25px 0px" }}>
          Top {this.capitalizeFirstLetter(this.props.category)} Headline
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loader && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 my-3" key={element.url}>
                      <NewsItem
                        key={element.title}
                        title={element.title ? element.title.slice(0, 60) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 120)
                            : ""
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
