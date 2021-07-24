import React from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import { useWindyTheme } from "../../context.jsx";

//Utils
import {
  generateShadow,
  generateRounded,
  generateDisabled,
} from "../../Utils/Utils";

const Accordion = (accProps) => {
  const {
    state: { accordion = {} },
  } = useWindyTheme();

  const {
    color = accordion.color,
    shadow = accordion.shadow,
    rounded = accordion.rounded,
    className,
    ...props
  } = accProps;

  const [accordionState, setAccordionState] = React.useState({
    isCurrent: null,
    color,
  });

  const onSetCurrentPanelExpandend = (currentPanelIndex) => {
    setAccordionState((prev) => ({ ...prev, isExpanded: currentPanelIndex }));
  };

  const decorateAccordionBg = (color) => {
    switch (color) {
      case "blue":
        return { "bg-blue-200": color === "blue" };
      case "gray":
        return { "bg-gray-200": color === "gray" };
      case "red":
        return { "bg-red-200": color === "red" };
      case "yellow":
        return { "bg-yellow-200": color === "yellow" };
      case "green":
        return { "bg-green-200": color === "green" };
      case "indigo":
        return { "bg-indigo-200": color === "indigo" };
      case "purple":
        return { "bg-purple-200": color === "purple" };
      case "pink":
        return { "bg-pink-200": color === "pink" };
      default:
        break;
    }
  };

  return (
    <div
      className={overrideTailwindClasses(
        classnames(
          decorateAccordionBg(color),
          generateRounded(rounded),
          generateShadow(shadow),
          "w-full flex flex-col px-2 py-3",
          `${className ? className : ""}`
        )
      )}
    >
      {React.Children.map(accProps.children, (child, index) => {
        const cloned = React.cloneElement(child);
        return {
          ...cloned,
          props: {
            ...cloned.props,
            accordionState,
            index,
            onSetCurrentPanelExpandend,
          },
        };
      })}
    </div>
  );
};

export default Accordion;

Accordion.Panel = function (props) {
  const { accordionState, index, className, isOpen = false, ...rest } = props;
  const [toggle, setToggle] = React.useState(isOpen && isOpen);

  const decorateAccordionPanelText = (color) => {
    switch (color) {
      case "blue":
        return { "text-blue-500": color === "blue" };
      case "gray":
        return { "text-gray-500": color === "gray" };
      case "red":
        return { "text-red-500": color === "red" };
      case "yellow":
        return { "text-yellow-500": color === "yellow" };
      case "green":
        return { "text-green-500": color === "green" };
      case "indigo":
        return { "text-indigo-500": color === "indigo" };
      case "purple":
        return { "text-purple-500": color === "purple" };
      case "pink":
        return { "text-pink-500": color === "pink" };
      default:
        break;
    }
  };

  return (
    <>
      <button
        onClick={() => {
          props.onSetCurrentPanelExpandend(index);
          setToggle(!toggle);
          typeof props.onClick === "function" ? props.onClick() : null;
        }}
        className={overrideTailwindClasses(
          classnames(
            generateDisabled(props.disabled),
            decorateAccordionPanelText(accordionState.color),
            "flex flex-row items-center justify-between w-full px-2 py-1 bg-white rounded-md shadow-md my-2",
            `${className ? className : ""}`
          )
        )}
      >
        {props.label}
        {toggle ? <ArrowUp /> : <ArrowDown />}
      </button>
      <div>{toggle && <div>{props.children}</div>}</div>
    </>
  );
};

Accordion.Panel.displayName = "AccordionPanel";

export const ArrowDown = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const ArrowUp = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fill-rule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clip-rule="evenodd"
      />
    </svg>
  );
};
