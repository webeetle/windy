import React from "react";

import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import { useWindyTheme } from "../../context";

const Loader = (loaderProps) => {
  const {
    state: { loader = {} },
  } = useWindyTheme();

  const {
    color = loader.color,
    type = loader.type,
    className = "",
  } = loaderProps;

  const decorateLoaderColor = () => {
    switch (color) {
      case "white":
        return {
          "text-white": color === "white",
        };
      case "gray":
        return {
          "text-gray-500": color === "gray",
        };
      case "red":
        return {
          "text-red-500": color === "red",
        };
      case "yellow":
        return {
          "text-yellow-500": color === "yellow",
        };

      case "green":
        return {
          "text-green-500": color === "green",
        };
      case "blue":
        return {
          "text-blue-500": color === "blue",
        };
      case "indigo":
        return {
          "text-indigo-500": color === "indigo",
        };
      case "purple":
        return {
          "text-purple-500": color === "purple",
        };
      case "pink":
        return {
          "text-pink-500": color === "pink",
        };
    }
  };
  const decorateLoaderLinearColor = () => {
    switch (color) {
      case "white":
        return {
          "bg-white": color === "white",
        };
      case "gray":
        return {
          "bg-gray-500": color === "gray",
        };
      case "red":
        return {
          "bg-red-500": color === "red",
        };
      case "yellow":
        return {
          "bg-yellow-500": color === "yellow",
        };

      case "green":
        return {
          "bg-green-500": color === "green",
        };
      case "blue":
        return {
          "bg-blue-500": color === "blue",
        };
      case "indigo":
        return {
          "bg-indigo-500": color === "indigo",
        };
      case "purple":
        return {
          "bg-purple-500": color === "purple",
        };
      case "pink":
        return {
          "bg-pink-500": color === "pink",
        };
    }
  };

  return (
    <>
      {type !== "linear" ? (
        <svg
          data-testid="loader"
          className={overrideTailwindClasses(
            classnames(
              decorateLoaderColor(),
              `animate-spin -ml-1 mr-3 h-10 w-10`,
              className
            )
          )}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <div
          className={overrideTailwindClasses(
            classnames(
              decorateLoaderLinearColor(),
              "animate-pulse rounded-full w-full h-1",
              className
            )
          )}
        ></div>
      )}
    </>
  );
};

export default Loader;
