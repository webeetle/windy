import React from "react";
import "tailwindcss/dist/tailwind.css";
import Tabs from "./Tabs";
import { WindyProvider } from "../../index.js";

const theme = { tabs: { color: "none", shadow: "none" } };

export const Basic = () => {
  return (
    <WindyProvider theme={theme}>
      <div className="w-3/4">
        <Tabs>
          <Tabs.Tab label="Tab 1" />
          <Tabs.Tab label="Tab 2" />
          <Tabs.Tab label="Tab 3" />
          <Tabs.Tab label="Tab 4" />
        </Tabs>
      </div>
    </WindyProvider>
  );
};

export const Color = () => {
  return (
    <WindyProvider theme={theme}>
      <div className="w-3/4">
        <Tabs color="indigo">
          <Tabs.Tab label="Tab 1" />
          <Tabs.Tab label="Tab 2" />
          <Tabs.Tab label="Tab 3" />
          <Tabs.Tab label="Tab 4" />
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
            <Tabs.Tab label="Tab 1">Tab 1</Tabs.Tab>
            <Tabs.Tab label="Tab 2" />
          </Tabs>
        </div>
      </WindyProvider>
      <div className="w-3/4 flex flex-col text-center justify-center pt-10">
        <Example current={current} />
      </div>
    </>
  );
};

export const CustomTabRendering = () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <>
      <WindyProvider theme={theme}>
        <div className="w-3/4">
          <Tabs onChange={({ selectedTab }) => setCurrent(selectedTab)}>
            <Tabs.Tab
              render={() => {
                return (
                  <div className="flex flex-row justify-center">
                    😂 Emoji Tab 1
                  </div>
                );
              }}
            />
            <Tabs.Tab
              render={() => {
                return (
                  <div className="flex flex-row justify-center">
                    😃 Emoji Tab 2
                  </div>
                );
              }}
            />
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
