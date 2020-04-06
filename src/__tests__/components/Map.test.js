import React from "react";
import { shallow } from "enzyme";
import Map from "./../../components/Map";

describe("Map", () => {
  let map;

  beforeEach(() => {
    map = shallow(<Map />);
  });

  it("should load the map", () => {});

  test("Renders an image", () => {
    expect(map.find("img").length).toBe(1);
  });

  test("Shows the selected map", () => {
    expect(
      shallow(<Map location="Portland" />).find(
        "img[src='/images/Portland.png']"
      ).length
    ).toBe(1);
  });

  test("Shows 'None' when no map choice is made", () => {
    expect(map.find("img[src='/images/None.png']").length).toBe(1);
  });
});
