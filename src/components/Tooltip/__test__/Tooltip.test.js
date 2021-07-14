/* eslint-disable max-len */
import React from "react";
import { Tooltip, WindyProvider } from "../../../index.js";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

afterAll(cleanup);
const theme = { tooltip: {} };

test("<Tooltip /> should render ", () => {
  render(
    <WindyProvider theme={theme}>
      <Tooltip>
        <div className="h-5 w-5" data-testid="hover-1" />
      </Tooltip>
    </WindyProvider>
  );
  const hoverComponent = screen.getByTestId("hover-1");
  fireEvent(
    hoverComponent,
    new MouseEvent("hover", {
      bubbles: true,
      cancelable: true,
    })
  );
  const component = screen.getByTestId("tooltip-1");
  expect(component).toBeInTheDocument();
});
