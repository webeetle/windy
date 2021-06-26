import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Badge from "./Badge";

it("<Badge/> Test", () => {
  render(
    <Badge
      text="Hello"
      color="blue"
      disabled={true}
      onClick={() => {}}
      rounded="full"
      shadow="none"
    />
  );

  const badgeElement = screen.getByTestId("badge-1");

  expect(badgeElement).toBeInTheDocument();

  expect(badgeElement).toHaveTextContent("Hello");

  expect(badgeElement).toHaveClass("bg-blue-200");
  expect(badgeElement).toHaveClass("rounded-full");
  expect(badgeElement).toHaveClass("shadow-none");

  expect(badgeElement).toHaveClass("pointer-events-none");
  fireEvent.click(badgeElement);
});
