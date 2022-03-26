/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { Component } from "react";
import MarqueeItem from "./marqueeItem";
import "../App.css";

class Marquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=dfce1de9c8594fc2898a57dbdcd0a006";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
    });
  }
  
  render() {
    return (
      <>
        <marquee behavior="scroll" direction="left">
          <a href="/" className="breaking-news"></a>
            {this.state.articles.slice(0, 7).map((element) => {
              return (
                <>
                  <MarqueeItem
                    key={element.title}
                    title={element.title}
                    date={element.publishedAt}
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
