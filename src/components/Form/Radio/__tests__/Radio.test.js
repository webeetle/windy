import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Radio from "../Radio";

test("<Radio /> should render ", () => {
  render(<Radio />);

  const component = screen.getByTestId("radio-1");
  expect(component).toBeInTheDocument();
});
