import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Radio from "../Radio";

test("<Radio /> should render ", () => {
  render(<Radio />);

  const component = screen.getByTestId("radio-1");
  expect(component).toBeInTheDocument();
});

test("<Radio /> props style and label ", () => {
  render(
    <Radio
      color="indigo"
      label="Ciao"
      gradient={false}
      shadow={false}
      className="transition"
    />
  );

  const component = screen.getByTestId("radio-1");
  expect(component).toHaveClass("border-indigo-500 transition");
  expect(component).not.toHaveClass(
    "bg-gradient-to-l from-indigo-500 to-indigo-600 shadow hover:shadow-sm"
  );

  const label = screen.getByText("Ciao");
  expect(label).toHaveTextContent("Ciao");
  expect(label).toHaveClass("select-none");
});

test("<Radio /> should render ", () => {
  let value = true;
  render(<Radio onClick={() => (value = false)} />);

  const component = screen.getByTestId("radio-1");
  fireEvent.click(component);
  expect(value).toBe(false);
});
