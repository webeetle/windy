import React, { useState } from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  cleanup,
} from "@testing-library/react";
import Select from "../Select";

const exampleOptions = [
  { label: "Wade Cooper", value: "Wade Cooper" },
  { label: "Arlene Mccoy", value: "Arlene Mccoy" },
  { label: "Devon Webb", value: "Devon Webb" },
  { label: "Tom Cook", value: "Tom Cook" },
  { label: "Tanya Fox", value: "Tanya Fox" },
  { label: "Hellen Schmidt", value: "Hellen Schmidt" },
];

//NOTE : If you don't pass options array you will get an error , it needs double check
test("<Input /> should render ", () => {
  render(<Select options={exampleOptions} />);

  const component = screen.getByTestId("select-1");
  expect(component).toBeInTheDocument();
});

test("<Input /> options and change selection", async () => {
  render(<Select options={exampleOptions} />);

  // Open the Select
  fireEvent.mouseDown(screen.getByLabelText("Wade Cooper"));

  // Click the entries you want to select
  fireEvent.click(screen.getByText("Tom Cook"));

  // Close the select using Escape or Tab or clicking away
  fireEvent.keyDown(document.activeElement, {
    key: "Escape",
    code: "Escape",
  });

  // Wait for Options to close
  await waitForElementToBeRemoved(screen.getByText("Tom Cook"));

  // Check selections
  expect(screen.getByLabelText("Tom Cook")).toHaveTextContent("Tom Cook");
});
