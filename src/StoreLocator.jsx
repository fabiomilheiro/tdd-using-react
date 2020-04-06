import React, { Component } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Map from "./components/Map";
import "./store-locator.scss";
import Axios from "axios";

class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: "",
      locations: [{ location: "x" }, { location: "y" }, { location: "w" }],
    };
  }

  async componentDidMount() {
    const locationsResponse = await Axios.get("/data/locations.json");
    this.setState({
      locations: locationsResponse.data,
    });
  }
  render() {
    return (
      <div className="store-locator">
        <Header />
        {this.state.locations.map((l, id) => (
          <Button
            key={id}
            id={l.location}
            text={l.location}
            onClick={this.chooseMap}
          />
        ))}
        <Map location={this.state.selectedLocation} />
      </div>
    );
  }

  chooseMap = (event) => {
    this.setState({
      selectedLocation: event.target.value,
    });
  };
}

export default StoreLocator;
