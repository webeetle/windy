import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Skeleton, WindyProvider } from "../../../index.js";

afterAll(cleanup);
const theme = { skeleton: { color: "yellow" } };

test("<Skeleton /> should render ", () => {
  render(
    <WindyProvider theme={theme}>
      <Skeleton />
    </WindyProvider>
  );
  const component = screen.getByTestId("skeleton-1");
  expect(component).toBeInTheDocument();
});

test("<Skeleton /> color props ", () => {
  render(
    <WindyProvider theme={theme}>
      <Skeleton color="red" />
    </WindyProvider>
  );
  const component = screen.getByTestId("skeleton-1");
  expect(component).toBeInTheDocument();
  expect(component).toHaveClass("bg-red-300");
});

test("<Skeleton /> classNames ", () => {
  render(
    <WindyProvider theme={theme}>
      <Skeleton color="green" className="h-16 w-16" />
    </WindyProvider>
  );
  const component = screen.getByTestId("skeleton-1");
  expect(component).toBeInTheDocument();
  expect(component).toHaveClass("bg-green-300 h-16 w-16");
});
