import React, { Component } from "react";
import "./Map.scss";

class Map extends Component {
  render() {
    return (
      <div className="map">
        <img src={this.getImageSource()} alt="" />
      </div>
    );
  }

  getImageSource = () => {
    return `/images/${this.props.location || "None"}.png`;
  };
}

export default Map;
