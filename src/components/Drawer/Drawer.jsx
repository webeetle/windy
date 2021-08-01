import React, { Fragment } from "react";

import {
  decorateBgStandard,
  decorateBg,
  decorateBgWithGradient,
} from "../../Utils/Utils";

import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";

import { useWindyTheme, WindyProvider } from "../../context.jsx";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";

const Drawer = (drawerProps) => {
  const {
    state: { drawer = {} },
  } = useWindyTheme();

  const {
    open = false,
    onClose,
    color = drawer.color,
    overlay = true,
    overlayDisabled,
    intensity = "500",
    className,
    setGradient,
  } = drawerProps;

  const renderingComponentsFilterCallback = (item) => {
    if (item.type.displayName === "Drawer-Header") {
      console.log(item, "item");
      return true;
    } else if (item.type.displayName === "Drawer-Content") {
      return true;
    } else if (item.type.displayName === "Drawer-Footer") {
      return true;
    }
  };

  // const decorateBgWrapper = (color, intensity, setGradient) => {
  //   if (setGradient && typeof setGradient === "object") {
  //     decorateBgWithGradient(color, setGradient);
  //   } else {
  //     decorateBg(color, intensity);
  //   }
  // };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={open}
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          {overlay && (
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className={`absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                  overlayDisabled ? "pointer-events-none" : ""
                }`}
              />
            </Transition.Child>
          )}
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => onClose()}
                    >
                      <span className="sr-only">Close panel</span>
                    </button>
                  </div>
                </Transition.Child>
                <div
                  className={overrideTailwindClasses(
                    classnames(
                      decorateBg(color, intensity),
                      "h-full flex flex-col shadow-xl overflow-y-scroll",
                      `${className ? className : ""}`
                    )
                  )}
                >
                  {React.Children.toArray(drawerProps.children).filter(
                    (child) =>
                      renderingComponentsFilterCallback(
                        React.cloneElement(child, {
                          color: drawerProps.color || drawer.color,
                        })
                      )
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Drawer.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ]),
  onClose: PropTypes.func,
  overlay: PropTypes.bool,
  overlayDisabled: PropTypes.bool,
  intensity: PropTypes.string,
  className: PropTypes.string,
};

export default Drawer;

Drawer.Header = function (props) {
  const { className, children } = props;

  return (
    <div
      className={overrideTailwindClasses(
        classnames(`${className ? className : ""}`)
      )}
    >
      <div>{children}</div>
    </div>
  );
};
Drawer.Header.displayName = "Drawer-Header";

Drawer.Content = function (props) {
  const { className, children, color } = props;

  return (
    <div
      className={overrideTailwindClasses(
        classnames(
          decorateBg(color),
          "flex flex-col overflow-y-scroll h-full",
          `${className ? className : ""}`
        )
      )}
    >
      {children}
    </div>
  );
};
Drawer.Content.displayName = "Drawer-Content";

// Drawer.Footer = function (props) {
//   const { className, children, color } = props;

//   return (
//     <div
//       className={overrideTailwindClasses(
//         classnames(
//           decorateBg(color),
//           "absolute bottom-0",
//           `${className ? className : ""}`
//         )
//       )}
//     >
//       {children}
//     </div>
//   );
// };
// Drawer.Footer.displayName = "Drawer-Footer";
