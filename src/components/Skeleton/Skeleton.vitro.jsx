import React from "react";
import Skeleton from "./Skeleton";
import Media from "../Media/Media.jsx";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../index.js";

const theme = { skeleton: { color: "red" } };

export const Basic = () => {
  return (
    <div className="w-96 flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <Skeleton />
      </WindyProvider>
    </div>
  );
};

export const Paragraph = () => {
  return (
    <div className="w-96">
      <WindyProvider theme={theme}>
        <Skeleton className="w-3/4 mb-3" />
        <Skeleton className="mb-3" />
        <Skeleton className="w-1/2" />
      </WindyProvider>
    </div>
  );
};

export const MediaExample = () => {
  return (
    <div className="w-96">
      <WindyProvider theme={theme}>
        <Media media={<Skeleton className="h-16 w-16" />}>
          <div className="w-96">
            <Skeleton className="w-3/4 mb-3" />
            <Skeleton className="mb-3" />
            <Skeleton className="w-1/2" />
          </div>
        </Media>
      </WindyProvider>
    </div>
  );
};
