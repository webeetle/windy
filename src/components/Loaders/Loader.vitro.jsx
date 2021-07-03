import React, { useState } from "react";
import "tailwindcss/dist/tailwind.css";

import { Loader, WindyProvider } from "../../index.js";

const theme = { loader: { color: "yellow", type: "linear" } };

export const Circle = () => {
  return (
    <WindyProvider theme={theme}>
      <div className="w-48  flex items-center justify-center">
        <Loader type="circle" />
      </div>
    </WindyProvider>
  );
};

export const Linear = () => {
  return (
    <WindyProvider theme={theme}>
      <div className="w-96  flex items-center justify-center">
        <Loader type="linear" />
      </div>
    </WindyProvider>
  );
};
