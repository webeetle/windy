import React from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import { useWindyTheme } from "../../context.jsx";

//Utils
import {
  generateShadow,
  generateRounded,
  generateSize,
  generateDisabled,
} from "../../Utils/Utils";

const Tabs = (tabsProps) => {
  const {
    state: { tabs = {} },
  } = useWindyTheme();

  const {
    color = tabs.color,
    rounded = tabs.rounded,
    bordered = false,
    shadow = tabs.shadow,
    onChange,
    ...props
  } = tabsProps;

  const [tabState, setTabState] = React.useState({
    selectedTab: 0,
    color,
  });

  React.useEffect(() => {
    if (typeof onChange !== "function") return;

    onChange(tabState);
  }, [tabState]);

  const decorateTabsLayout = () => {
    switch (color) {
      case "blue":
        return { "text-blue-500 bg-blue-200": color === "blue" };
      case "gray":
        return { "text-gray-700 bg-gray-200": color === "gray" };
      case "red":
        return { "text-red-700 bg-red-200": color === "red" };
      case "yellow":
        return { "text-yellow-700 bg-yellow-200": color === "yellow" };
      case "green":
        return { "text-green-700 bg-green-200": color === "green" };
      case "indigo":
        return { "text-indigo-700 bg-indigo-200": color === "indigo" };
      case "purple":
        return { "text-purple-700 bg-purple-200": color === "purple" };
      case "pink":
        return { "text-pink-700 bg-pink-200": color === "pink" };
      default:
        break;
    }
  };

  return (
    <div
      className={overrideTailwindClasses(
        classnames(
          generateRounded(rounded),
          decorateTabsLayout(),
          generateShadow(),
          `${bordered ? "border" : "border-none"}`
        )
      )}
    >
      <nav className="flex flex-row justify-between">
        {React.Children.map(tabsProps.children, (child, index) => {
          const cloned = React.cloneElement(child);
          if (cloned.type.displayName === "Tab") {
            return {
              ...cloned,
              props: {
                ...cloned.props,
                tabState,
                onClick: (value) =>
                  setTabState((prev) => ({ ...prev, selectedTab: value })),
                tabIndex: index,
              },
            };
          }
        })}
      </nav>
    </div>
  );
};

export default Tabs;

Tabs.Tab = function (props) {
  const borderSelected = props.tabIndex === props.tabState.selectedTab;
  console.log(props, "props");
  const borderColor = `border-${props.tabState.color}-500`;
  const textColor = `text-${props.tabState.color}-700`;
  const textHoverColor = `hover:text-${props.tabState.color}-500`;
  return (
    <button
      onClick={() => props.onClick(props.tabIndex)}
      className={overrideTailwindClasses(
        classnames(
          `${borderSelected ? borderColor : null}`,
          `${textColor ? textColor : null}`,
          `${textHoverColor ? textHoverColor : null}`,
          "py-4 px-6 block w-full focus:outline-none border-b-2 font-medium"
        )
      )}
    >
      {props.children}
    </button>
  );
};
Tabs.Tab.displayName = "Tab";
