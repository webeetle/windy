import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Toggle, WindyProvider } from "../../../../index";

test("<Toggle /> should render ", () => {
  render(
    <WindyProvider>
      <Toggle />
    </WindyProvider>
  );

  const component = screen.getByTestId("toggle-1");
  expect(component).toBeInTheDocument();
});

test("<Toggle /> color prop (Not Checked Default)", () => {
  render(
    <WindyProvider>
      <Toggle />
    </WindyProvider>
  );

  const component = screen.getByTestId("toggle-1");
  expect(component).toHaveClass(
    "relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-100"
  );
});

test("<Toggle /> color prop (Checked Default)", () => {
  render(
    <WindyProvider>
      <Toggle color="red" checked={true} />
    </WindyProvider>
  );

  const component = screen.getByTestId("toggle-1");
  expect(component).toHaveClass(
    "relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-100 bg-red-500"
  );
});

test("<Toggle /> should be disabled ", () => {
  render(
    <WindyProvider>
      <Toggle disabled checked={true} />
    </WindyProvider>
  );

  const component = screen.getByTestId("toggle-1");
  expect(component).toHaveClass("opacity-50");
});

test("<Toggle /> should render custom content ", () => {
  let checked = true;

  render(
    <WindyProvider>
      <Toggle
        disabled
        checked={true}
        render={() => (
          <div
            data-testid="divRendered"
            className={`${
              checked ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-all duration-100 grid place-items-center`}
          >
            <span data-testid="spanRendered" className="text-xs">
              {checked ? "x" : "c"}
            </span>
          </div>
        )}
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("toggle-1");
  const divRendered = screen.getByTestId("divRendered");
  const spanRendered = screen.getByTestId("spanRendered");

  expect(component).toBeInTheDocument();
  expect(component).toHaveClass("opacity-50");
  expect(divRendered).toBeInTheDocument();
  expect(spanRendered).toBeInTheDocument();
  expect(spanRendered).toHaveTextContent("x");
});

test("<Toggle /> should change checked value (Check) ", () => {
  let checked = false;

  render(
    <WindyProvider>
      <Toggle
        color="red"
        checked={checked}
        onChange={() => (checked = !checked)}
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("toggle-1");
  expect(component).toBeInTheDocument();

  //Fire Event To Check
  fireEvent.click(component);
  expect(checked).toBe(true);
});

test("<Toggle /> should change checked value (UnCheck)", () => {
  let checked = true;

  render(
    <WindyProvider>
      <Toggle
        color="red"
        checked={checked}
        onChange={() => (checked = !checked)}
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("toggle-1");
  expect(component).toBeInTheDocument();

  //Fire Event To UnCheck
  fireEvent.click(component);
  expect(checked).toBe(false);
});
