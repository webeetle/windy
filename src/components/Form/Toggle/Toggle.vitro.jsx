import React from "react";
import "tailwindcss/dist/tailwind.css";
import Toggle from "./Toggle";
import { WindyProvider } from "../../../index.js";

const theme = { toggle: { color: "indigo" } };

export const Basic = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <WindyProvider theme={theme}>
      <Toggle checked={checked} onChange={() => setChecked(!checked)} />
    </WindyProvider>
  );
};

export const Disabled = () => {
  return (
    <WindyProvider theme={theme}>
      <Toggle checked={true} disabled />
    </WindyProvider>
  );
};

export const CustomRendering = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <WindyProvider theme={theme}>
      <Toggle
        checked={checked}
        onChange={() => setChecked(!checked)}
        render={() => (
          <div
            className={`${
              checked ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-all duration-100 grid place-items-center`}
          >
            <span className="text-xs">{checked ? "👈" : "👉"}</span>
          </div>
        )}
      />
    </WindyProvider>
  );
};
