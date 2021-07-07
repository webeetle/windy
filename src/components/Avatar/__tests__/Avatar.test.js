import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Avatar, WindyProvider } from "../../../index.js";

afterAll(cleanup);

const theme = { avatar: { shadow: "none" } };

test("<Avatar/>  should render", () => {
  render(
    <WindyProvider theme={theme}>
      <Avatar />
    </WindyProvider>
  );

  const component = screen.getByTestId("avatar");

  expect(component).toBeInTheDocument();
});

test("<Avatar/>  props", () => {
  render(
    <WindyProvider theme={theme}>
      <Avatar rounded="full" stroke="md" shadow="sm" color="blue" size="md" />
    </WindyProvider>
  );

  const component = screen.getByTestId("avatar");

  expect(component).toHaveClass("ring-2 ring-blue-300 rounded-full shadow-sm");
});

test("<Avatar/>  text", () => {
  render(
    <WindyProvider theme={theme}>
      <Avatar
        rounded="full"
        layout="text"
        text="RT"
        stroke="md"
        shadow="sm"
        color="blue"
        size="md"
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("avatar");

  expect(component).toHaveClass(
    "border-2 border-blue-300 rounded-full shadow-sm"
  );
});

test("<Avatar/>  click", () => {
  let value = 0;
  render(
    <WindyProvider theme={theme}>
      <Avatar
        rounded="full"
        stroke="md"
        color="blue"
        size="md"
        onClick={() => (value = 2)}
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("avatar");
  fireEvent.click(component);

  expect(value).toBe(2);
});
