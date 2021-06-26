import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";

test("<Checkbox /> should render", () => {
  render(<Checkbox label="Hi" />);

  const component = screen.getByText(/hi/i);
  expect(component).toBeInTheDocument();
});

test("<Checkbox /> should checked", () => {
  render(
    <Checkbox label="Hi" gradient={false} color="indigo" checked={true} />
  );

  const component = screen.getByTestId("CheckBox-1");
  expect(component).toHaveClass("bg-indigo-500");
});

test("<Checkbox /> should not checked", () => {
  render(
    <Checkbox label="Hi" gradient={false} color="indigo" checked={false} />
  );

  const component = screen.getByTestId("CheckBox-1");
  expect(component).not.toHaveClass("bg-indigo-500");
});

test("<Checkbox/> Click Event ", () => {
  render(<Checkbox gradient={false} label="Hi" color="indigo" />);

  const component = screen.getByTestId("CheckBox-1");
  expect(component).not.toHaveClass("bg-indigo-500");
  fireEvent.click(component);
  expect(component).toHaveClass("bg-indigo-500");
});
