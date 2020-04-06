import React from "react";
import Button from "./../../components/Button";
import { shallow } from "enzyme";

describe("Button", () => {
  let button;

  beforeEach(() => {
    button = shallow(<Button />);
  });

  it("should load the button", () => {
    expect(button.find("button").length).toBe(1);
  });
});

describe("When location is passed to the button", () => {
  let button;
  let props;

  beforeEach(() => {
    props = {};
  });

  test("Renders fallback text", () => {
    button = shallow(<Button {...props} />);
    expect(button.find("button").text()).toBe("All locations");
  });

  test("shows the defined text", () => {
    props.text = "Location 1";
    button = shallow(<Button {...props} />);

    expect(button.find("button").text()).toBe(props.text);
  });

  test("Executes handler on click", () => {
    const mockOnClick = jest.fn();
    button = shallow(<Button {...props} onClick={mockOnClick} />);
    button.find("button").simulate("click");
    expect(mockOnClick).toHaveBeenCalled();
  });
});
