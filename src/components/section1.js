import React, { Component } from "react";
import { SectionItem1 } from "./sectionItem1";

export class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [1],
      loading: true,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=dfce1de9c8594fc2898a57dbdcd0a006";
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
        {this.state.articles.slice(1, 2).map((element) => {
          return (
            <SectionItem1
              key={element.title}
              title={element.title ? element.title.slice(0, 50) : ""}
              imageUrl={element.urlToImage}
              description={
                element.description ? element.description.slice(0, 120) : ""
              }
            />
          );
        })}
      </>
    );
  }
}

export default Section1;
