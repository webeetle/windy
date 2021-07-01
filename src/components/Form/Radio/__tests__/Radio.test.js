import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Radio, WindyProvider } from "../../../../index";

test("<Radio /> should render ", () => {
  render(
    <WindyProvider>
      <Radio />
    </WindyProvider>
  );

  const component = screen.getByTestId("radio-1");
  expect(component).toBeInTheDocument();
});

test("<Radio /> props style and label ", () => {
  render(
    <WindyProvider>
      <Radio
        color="indigo"
        label="Ciao"
        gradient={false}
        shadow={false}
        className="transition"
      />
    </WindyProvider>
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
  render(
    <WindyProvider>
      <Radio onClick={() => (value = false)} />
    </WindyProvider>
  );

  const component = screen.getByTestId("radio-1");
  fireEvent.click(component);
  expect(value).toBe(false);
});
