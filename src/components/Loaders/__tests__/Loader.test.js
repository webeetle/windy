import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Loader, WindyProvider } from "../../../index.js";

afterAll(cleanup);
const theme = { loader: { color: "yellow", type: "circle" } };

test("<Loader /> should render ", () => {
  const { container } = render(
    <WindyProvider theme={theme}>
      <Loader />
    </WindyProvider>,
    {
      container: document.body.appendChild(
        document.createElementNS("http://www.w3.org/2000/svg", "svg")
      ),
    }
  );
  expect(container.firstChild.nodeName).toBe("svg");
});
