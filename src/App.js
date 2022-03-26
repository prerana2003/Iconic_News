import "./App.css";
import React, { Component } from "react";
// import Article from "./components/article";
import Footer from "./components/footer";
import Heading from "./components/heading";
import Home from "./components/home";
import { News } from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Section from "./components/section";
export default class App extends Component {
  pageSize = 5;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Heading />
          <LoadingBar
            height={4}
            color="lightsalmon"
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/" key="home">
              <Home
                setProgress={this.setProgress}
                country="in"
                category="home"
              />
            </Route>

            <Route exact path="/business" key="business">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment" key="entertainment">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general" key="general">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health" key="health">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science" key="science">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports" key="sports">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology" key="technology">
              <News
                setProgress={this.setProgress}
                pageSize={6}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
