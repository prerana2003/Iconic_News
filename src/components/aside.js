import React, { Component } from "react";
import AsideItem from "./asideItem";
import "../App.css";

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      " https://newsdata.io/api/1/news?apikey=pub_5811eeeb9c2ee8efbe0956152bd19f024775&country=in";
     
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      results: parsedData.results,
    });
  }

  render() {
    return (
      <>
        <aside id="aside__id__3">
          <h4 id="recent" className="recent__news__h4">
            RECENT NEWS
          </h4>
          {this.state.results.slice(0, 5).map((element, i) => {
            return (
              <AsideItem
                key={i}
                title={element.title}
                imageUrl={element.image_url}
              />
            );
          })}
        </aside>
      </>
    );
  }
}

export default Aside;
