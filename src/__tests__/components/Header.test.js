import React from "react";
import Header from "./../../components/Header";
import { shallow } from "enzyme";

describe("Header", () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  it("should load the header", () => {});

  test("Renders logo", () => {
    expect(header.find("img[src='/images/logo.png']").length).toBe(1);
  });
});
