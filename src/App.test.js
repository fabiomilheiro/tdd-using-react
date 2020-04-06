import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
import StoreLocator from "./StoreLocator";

describe("App", () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  test("Renders store locator", () => {
    const storeLocators = app.find(StoreLocator);
    expect(storeLocators.length).toBe(1);
  });
});
