import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox, WindyProvider } from "../../../../index.js";

test("<Checkbox /> should render", () => {
  render(
    <WindyProvider>
      <Checkbox name="test" label="Hi" />
    </WindyProvider>
  );

  const component = screen.getByTestId("CheckBox-1");
  expect(component).toBeInTheDocument();
});

test("<Checkbox /> should checked", () => {
  render(
    <WindyProvider>
      <Checkbox label="Hi" checked={true} />
    </WindyProvider>
  );

  const component = screen.getByTestId("CheckBox-1");
  expect(component).toBeChecked();
});

test("<Checkbox /> should not checked", () => {
  render(
    <WindyProvider>
      <Checkbox label="Hi" />
    </WindyProvider>
  );

  const component = screen.getByTestId("CheckBox-1");
  expect(component).not.toBeChecked();
});

test("<Checkbox/> from no checked to checked", () => {
  render(
    <WindyProvider>
      <Checkbox label="Hi" />
    </WindyProvider>
  );

  const component = screen.getByTestId("CheckBox-1");
  expect(component).not.toBeChecked();
  fireEvent.click(component);
  expect(component).toBeChecked();
});

test("<Checkbox/> from checked to no checked ", () => {
  render(
    <WindyProvider>
      <Checkbox label="Hi" checked={true} />
    </WindyProvider>
  );

  const component = screen.getByTestId("CheckBox-1");
  expect(component).toBeChecked();
  fireEvent.click(component);
  expect(component).not.toBeChecked();
});
