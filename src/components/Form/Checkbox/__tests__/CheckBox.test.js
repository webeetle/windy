import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";

test("<Checkbox /> should render", () => {
  render(<Checkbox label="Hi" />);

  const component = screen.getByText(/hi/i);
  expect(component).toBeInTheDocument();
});

test("<Checkbox /> should checked", () => {
  render(<Checkbox label="Hi" checked={true} />);

  const component = screen.getByTestId("CheckBox-1");
  expect(component).toBeChecked();
});

test("<Checkbox /> should not checked", () => {
  render(<Checkbox label="Hi" checked={false} />);

  const component = screen.getByTestId("CheckBox-1");
  expect(component).not.toBeChecked();
});
