import React from "react";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider, Button, Panel } from "../../index.js";

const theme = { checkbox: {} };

export const Default = () => {
  return (
    <WindyProvider theme={theme}>
      <div className="space-y-5">
        <Panel className="px-4 py-2 bg-gray-100">
          <p>Hi, I'm an default panel!</p>
        </Panel>
        <Panel layout="error" className="px-4 py-2">
          <p>Hi, I'm a error panel!</p>
        </Panel>
        <Panel layout="warning" className="px-4 py-2">
          <p>Hi, I'm a warning panel!</p>
        </Panel>
        <Panel layout="success" className="px-4 py-2">
          <p>Hi, I'm a success panel!</p>
        </Panel>
        <Panel layout="info" className="px-4 py-2">
          <p>Hi, I'm a info panel!</p>
        </Panel>
      </div>
    </WindyProvider>
  );
};

export const ExampleOfCard = () => {
  return (
    <WindyProvider theme={theme}>
      <Panel layout="paper" className="px-6 py-6" style={{ width: 400 }}>
        <h2 className="text-2xl font-bold mb-4">Paper Style Panel</h2>
        <p>
          Hi, I'm a paper panel!
          <br />
          But I am more similiar to an application card!
        </p>
        <div className="text-right mt-5">
          <Button>Dismiss</Button>
        </div>
      </Panel>
    </WindyProvider>
  );
};

export const Dashed = () => {
  return (
    <WindyProvider theme={theme}>
      <Panel layout="dashed" className="px-6 py-6" style={{ width: 400 }}>
        <h2 className="text-2xl font-bold mb-4">Dashed Panel</h2>
        <p>
          Hi, I'm a paper panel! Lorem ipsum dolor wst esigua alt emporium est.
        </p>
      </Panel>
    </WindyProvider>
  );
};
