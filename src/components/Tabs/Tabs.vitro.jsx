import React from "react";
import "tailwindcss/dist/tailwind.css";
import Tabs from "./Tabs";
import { WindyProvider, Table } from "../../index.js";

const theme = { tabs: { color: "pink" } };

export const Basic = () => {
  return (
    <WindyProvider theme={theme}>
      <div className="w-3/4">
        <Tabs>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
          <Tabs.Tab>Tab 4</Tabs.Tab>
          <Tabs.Tab>Tab 5</Tabs.Tab>
        </Tabs>
      </div>
    </WindyProvider>
  );
};

export const GetCurrentIndex = () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <>
      <WindyProvider theme={theme}>
        <div className="w-3/4">
          <Tabs onChange={({ selectedTab }) => setCurrent(selectedTab)}>
            <Tabs.Tab>Tab 1</Tabs.Tab>
            <Tabs.Tab>Tab 2</Tabs.Tab>
            <Tabs.Tab>Tab 3</Tabs.Tab>
            <Tabs.Tab>Tab 4</Tabs.Tab>
            <Tabs.Tab>Tab 5</Tabs.Tab>
          </Tabs>
        </div>
      </WindyProvider>
      <div className="w-3/4 flex flex-col text-center justify-center pt-10">
        <Example current={current} />
      </div>
    </>
  );
};

const Example = ({ current }) => {
  return `Hello from Windy ${current}`;
};
