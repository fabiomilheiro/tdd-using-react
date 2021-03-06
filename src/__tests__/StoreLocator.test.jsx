import React from "react";
// import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";
import Header from "./../components/Header";
import Button from "./../components/Button";
import Map from "./../components/Map";
import Axios from "axios";
import renderer from "react-test-renderer";

const locationsResponse = {
  data: [
    {
      location: "Test Portland",
    },
    {
      location: "Test Astoria",
    },
    {
      location: "",
    },
  ],
};

describe("Store locator", () => {
  let storeLocator;
  beforeEach(async () => {
    Axios.get.mockImplementation((url) => {
      if (url === "/data/locations.json") {
        return Promise.resolve(locationsResponse);
      }

      return Promise.reject("");
    });
    storeLocator = shallow(<StoreLocator />);
    await storeLocator.instance().componentDidMount();
  });

  test("contains initialized state", () => {
    expect(storeLocator.state()).toEqual({
      locations: [
        {
          location: "Test Portland",
        },
        {
          location: "Test Astoria",
        },
        {
          location: "",
        },
      ],
      selectedLocation: "",
    });
  });

  test("Renders snapshot", () => {
    const tree = renderer.create(<StoreLocator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Renders header", () => {
    const headers = storeLocator.find(Header);
    expect(headers.length).toBe(1);
  });

  test("Renders buttons for all shops + 1", () => {
    const buttons = storeLocator.find(Button);
    expect(buttons.length).toBe(3);
  });

  test("Renders one map", () => {
    const maps = storeLocator.find(Map);
    expect(maps.length).toBe(1);
  });
});

describe("Choose map", () => {
  let storeLocator;
  beforeEach(async () => {
    storeLocator = shallow(<StoreLocator />);
    await storeLocator.instance().componentDidMount();
  });

  test("Updates state using the location passed to it", () => {
    var event = { target: { value: "test" } };
    storeLocator.instance().chooseMap(event);
    expect(storeLocator.instance().state.selectedLocation).toBe("test");
  });
});
