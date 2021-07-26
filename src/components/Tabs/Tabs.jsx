import React from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import { useWindyTheme } from "../../context.jsx";

//Utils
import { generateShadow, decorateBgAndText } from "../../Utils/Utils";

const Tabs = (tabsProps) => {
  const {
    state: { tabs = {} },
  } = useWindyTheme();

  const {
    color = tabs.color,
    // rounded = tabs.rounded,
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

  return (
    <div
      className={overrideTailwindClasses(
        classnames(
          // generateRounded(rounded),
          decorateBgAndText(color),
          generateShadow(shadow),
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

Tabs.propTypes = {
  onChange: PropTypes.func,
  color: PropTypes.string,
  bordered: PropTypes.bool,
  shadow: PropTypes.bool,
  children: PropTypes.any,
};

export default Tabs;

Tabs.Tab = function (props) {
  const { tabIndex, tabState, onClick, render, label = "Tab" } = props;

  const borderSelected = tabIndex === tabState.selectedTab;
  const borderColor =
    tabState.color === "white" || tabState.color === "none"
      ? `border-gray-500`
      : `border-${tabState.color}-500`;
  const textColor = `text-${tabState.color}-700`;
  const textHoverColor = `hover:text-${tabState.color}-500`;

  return (
    <button
      onClick={() => onClick(tabIndex)}
      className={overrideTailwindClasses(
        classnames(
          `${borderSelected ? borderColor : null}`,
          `${textColor ? textColor : null}`,
          `${textHoverColor ? textHoverColor : null}`,
          "py-4 px-6 block w-full focus:outline-none border-b-2 font-medium"
        )
      )}
    >
      {typeof render === "function" ? render() : label}
    </button>
  );
};
Tabs.Tab.propTypes = {
  tabIndex: PropTypes.number,
  tabState: PropTypes.object,
  onClick: PropTypes.func,
  render: PropTypes.func,
  label: PropTypes.any,
};
Tabs.Tab.displayName = "Tab";
