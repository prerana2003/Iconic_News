import React, { Component } from "react";
import loading2 from "./images/loading2.gif";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <img
            className="my-3"
            src={loading2}
            alt="loading"
            style={{ height: "80px", color: " #ffa07a!important" }}
          />
        </div>
      </div>
    );
  }
}

export default loading2;
