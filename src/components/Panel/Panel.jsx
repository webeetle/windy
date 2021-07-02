import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import { useWindyTheme } from "../../context.jsx";

const Panel = (panelProps) => {
  const {
    state: { panel = {} },
  } = useWindyTheme();

  const { layout = panel.layout, ...props } = panelProps;
  return (
    <div
      data-testid="panel-1"
      className={overrideTailwindClasses(
        classnames(
          {
            "bg-white border border-gray-200 divide-gray-200":
              layout === "default",
            "bg-red-100 border-red-400 text-red-600 divide-red-200":
              layout === "error",
            "bg-yellow-100 border-yellow-400 text-yellow-600 divide-yellow-200":
              layout === "warning",
            "bg-green-100 border-green-400 text-green-600 divide-green-200":
              layout === "success",
            "bg-blue-100 border-blue-400 text-blue-600 divide-blue-200":
              layout === "info",
            "bg-white divide-gray-200 shadow-md border border-gray-200":
              layout === "paper",
            "bg-gray-100 border-4 border-gray-200 border-dashed":
              layout === "dashed",
          },
          `${props.className ?? ""}`
        )
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  layout: PropTypes.oneOf([
    "default",
    "error",
    "warning",
    "success",
    "info",
    "paper",
    "dashed",
  ]),
  style: PropTypes.any,
};

export default Panel;
