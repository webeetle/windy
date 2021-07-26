import React from "react";
import "tailwindcss/dist/tailwind.css";
import { WindyProvider } from "../../context.jsx";

import { Tooltip, Button } from "../../index.js";

const theme = {
  button: { color: "pink" },
  tooltip: { color: "pink", rounded: "md", shadow: "lg", layout: "bottom" },
};

export const Basic = () => {
  return (
    <WindyProvider theme={theme}>
      <Tooltip text={"Hello tooltip"}>
        <Button>Hello</Button>
      </Tooltip>
    </WindyProvider>
  );
};
