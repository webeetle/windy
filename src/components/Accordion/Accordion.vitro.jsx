import React from "react";
import "tailwindcss/dist/tailwind.css";
import Accordion from "./Accordion";
import { WindyProvider } from "../../index.js";

const theme = { accordion: { color: "yellow", shadow: "lg" } };

export const Basic = () => {
  return (
    <WindyProvider theme={theme}>
      <div className="w-2/4">
        <Accordion>
          <Accordion.Panel label="Panel 1">Hello From Windy 1</Accordion.Panel>
          <Accordion.Panel label="Panel 2">Hello From Windy 2</Accordion.Panel>
          <Accordion.Panel label="Panel 3">Hello From Windy 3</Accordion.Panel>
        </Accordion>
      </div>
    </WindyProvider>
  );
};

export const DisabledPanel = () => {
  return (
    <WindyProvider theme={theme}>
      <div className="w-2/4">
        <Accordion>
          <Accordion.Panel label="Panel 1">Hello From Windy 1</Accordion.Panel>
          <Accordion.Panel label="Panel 2" disabled>
            Hello From Windy 2
          </Accordion.Panel>
          <Accordion.Panel label="Panel 3">Hello From Windy 3</Accordion.Panel>
        </Accordion>
      </div>
    </WindyProvider>
  );
};

export const CustomAccordion = () => {
  return (
    <WindyProvider theme={theme}>
      <div className="w-2/4">
        <Accordion className="bg-white">
          <Accordion.Panel className="bg-indigo-500 text-white" label="Panel 1">
            Hello From Windy 1
          </Accordion.Panel>
          <Accordion.Panel
            className="bg-indigo-500 text-white"
            label="Panel 2"
            disabled
          >
            Hello From Windy 2
          </Accordion.Panel>
          <Accordion.Panel className="bg-indigo-500 text-white" label="Panel 3">
            Hello From Windy 3
          </Accordion.Panel>
        </Accordion>
      </div>
    </WindyProvider>
  );
};
