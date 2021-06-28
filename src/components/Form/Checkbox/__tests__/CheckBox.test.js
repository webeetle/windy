import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";

test("<Checkbox /> should render", () => {
  render(<Checkbox name="test" label="Hi" />);

  const component = screen.getByRole("checkbox");
  expect(component).toBeInTheDocument();
});

test("<Checkbox /> should checked", () => {
  render(<Checkbox label="Hi" checked={true} />);

  const component = screen.getByRole("checkbox");
  expect(component).toBeChecked();
});

test("<Checkbox /> should not checked", () => {
  render(<Checkbox label="Hi" />);

  const component = screen.getByRole("checkbox");
  expect(component).not.toBeChecked();
});

test("<Checkbox/> from no checked to checked", () => {
  render(<Checkbox label="Hi" />);

  const component = screen.getByRole("checkbox");
  expect(component).not.toBeChecked();
  fireEvent.click(component);
  expect(component).toBeChecked();
});

test("<Checkbox/> from checked to no checked ", () => {
  render(<Checkbox label="Hi" checked={true} />);

  const component = screen.getByRole("checkbox");
  expect(component).toBeChecked();
  fireEvent.click(component);
  expect(component).not.toBeChecked();
});
