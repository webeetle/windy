// Link.react.test.js
import React from "react";
import renderer from "react-test-renderer";
import Badge from "./Badge";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Badge text="Hello"></Badge>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
