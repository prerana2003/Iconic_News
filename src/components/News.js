import { NewsItem } from "./NewsItem";
import { Spinner } from "./spinner";
import React, { Component } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 1,
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
      results: [],
      loading: true,
      page: 1,
      totalResults: 0,
      loader: false,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-Iconic News`;
  }

  async componentDidMount() {
    this.props.setProgress(10);

    let url = `https://newsdata.io/api/1/news?apikey=pub_5811eeeb9c2ee8efbe0956152bd19f024775&country=${this.props.country}&category=${this.props.category}`;

    let data = await fetch(url);
    this.props.setProgress(30);

    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      results: parsedData.results,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "25px 0px" }}>
          Top {this.capitalizeFirstLetter(this.props.category)} Headline
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.results.length}
          next={this.fetchMoreData}
          hasMore={this.state.results.length !== this.state.totalResults}
          loader={this.state.loader && <Spinner />}
        >
          <div className="container">
            <div className="row">
              {!this.state.loading &&
                this.state.results.map((element) => {
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
                        imageUrl={element.image_url}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.pubDate}
                        source={element.source_id}
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
