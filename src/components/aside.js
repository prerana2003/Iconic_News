import React, { Component } from "react";
import AsideItem from "./asideItem";
import "../App.css";

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=dfce1de9c8594fc2898a57dbdcd0a006";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
    });
  }

  render() {
    return (
      <>
        <aside id="aside__id__3">
          <h4 id="recent" className="recent__news__h4">
            RECENT NEWS
          </h4>
          {this.state.articles.slice(0, 5).map((element, i) => {
            return (
              <AsideItem
                key={i}
                title={element.title}
                imageUrl={element.urlToImage}
              />
            );
          })}
        </aside>
      </>
    );
  }
}

export default Aside;
