import React, { Component } from "react";
import { SectionItem3 } from "./sectionItem3";

export class Section3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [1],
      loading: true,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsdata.io/api/1/news?apikey=pub_5811eeeb9c2ee8efbe0956152bd19f024775&country=us&category=entertainment";
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
        {this.state.results.slice(2, 3).map((element) => {
          return (
            <SectionItem3
              key={element.title}
              title={element.title ? element.title.slice(0, 50) : ""}
              imageUrl={element.image_url}
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
export default Section3;
