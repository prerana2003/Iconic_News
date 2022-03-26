/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from "react";
import MarqueeItem from "./marqueeItem";
import "../App.css";

class Marquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "    https://newsdata.io/api/1/news?apikey=pub_5811eeeb9c2ee8efbe0956152bd19f024775&country=in&category=science";

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      results: parsedData.results,
    });
  }

  render() {
    return (
      <>
        <marquee behavior="scroll" direction="left">
          <a href="#" className="breaking-news"></a>
          {this.state.results.slice(0, 7).map((element) => {
            return (
              <>
                <MarqueeItem
                  key={element.title}
                  title={element.title}
                  date={element.pubDate}
                  newsUrl={element.url}
                />
              </>
            );
          })}
        </marquee>
      </>
    );
  }
}

export default Marquee;
