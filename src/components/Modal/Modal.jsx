import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import PropTypes from "prop-types";

import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import { generateRounded } from "../../Utils/Utils";
import { useWindyTheme } from "../../context.jsx";
const Modal = (modalProps) => {
  const {
    state: { modal = {} },
  } = useWindyTheme();

  const {
    isOpen = false,
    onClose = () => null,
    onClickIcon = () => null,
    showCloseButton = modal.showCloseButton,
    color = modal.color,
    title = "",
    size = modal.size,
    actions = [],
    children,
    rounded = modal.rounded,
    className = "",
    overlayGradient = modal.overlayGradient,
  } = modalProps;

  //TODO : Enable Header Color Features
  const decorateHeaderColor = () => {
    switch (color) {
      case "white":
        return {
          "bg-white text-black": color === "white",
        };
      case "gray":
        return {
          "bg-gradient-to-l from-gray-500 to-gray-600 px-5 text-white rounded-md shadow-md":
            color === "gray",
        };
      case "red":
        return {
          "bg-gradient-to-l from-red-500 to-red-600 px-5 text-white rounded-md shadow-md":
            color === "red",
        };
      case "yellow":
        return {
          "bg-gradient-to-l from-yellow-500 to-yellow-600 px-5 rounded-md shadow-md":
            color === "yellow",
        };

      case "green":
        return {
          "bg-gradient-to-l from-green-500 to-green-600 text-white px-5 rounded-md shadow-md":
            color === "green",
        };
      case "blue":
        return {
          "bg-gradient-to-l from-blue-500 to-blue-600 text-white px-5 rounded-md shadow-md":
            color === "blue",
        };
      case "indigo":
        return {
          "bg-gradient-to-l from-indigo-500 to-indigo-600 text-white px-5 rounded-md shadow-md":
            color === "indigo",
        };
      case "purple":
        return {
          "bg-gradient-to-l from-purple-500 to-purple-600 text-white px-5 rounded-md shadow-md":
            color === "purple",
        };
      case "pink":
        return {
          "bg-gradient-to-l from-pink-500 to-pink-600 text-white px-5 rounded-md shadow-md":
            color === "pink",
        };
    }
  };

  const decorateGradientForOverlay = () => {
    switch (color) {
      case "gray":
        return {
          "bg-gradient-to-b from-gray-500 to bg-transparent ":
            overlayGradient && color === "gray",
        };
      case "red":
        return {
          "bg-gradient-to-b from-red-500 to bg-transparent":
            overlayGradient && color === "red",
        };
      case "yellow":
        return {
          "bg-gradient-to-b from-yellow-500 to bg-transparent":
            overlayGradient && color === "yellow",
        };

      case "green":
        return {
          "bg-gradient-to-b from-green-500 to bg-transparent":
            overlayGradient && color === "green",
        };
      case "blue":
        return {
          "bg-gradient-to-b from-blue-500 to bg-transparent":
            overlayGradient && color === "blue",
        };
      case "indigo":
        return {
          "bg-gradient-to-b from-indigo-500 to bg-transparent":
            overlayGradient && color === "indigo",
        };
      case "purple":
        return {
          "bg-gradient-to-b from-purple-500 to bg-transparent":
            overlayGradient && color === "purple",
        };
      case "pink":
        return {
          "bg-gradient-to-b from-pink-500 to bg-transparent":
            overlayGradient && color === "pink",
        };
    }
  };

  const decorateSizeModal = () => {
    switch (size) {
      case "sm":
        return {
          "mx-auto w-full md:w-2/4 md:h-2/4 text-center": size === "sm",
        };
      case "md":
        return {
          "mx-auto w-full md:w-3/5 md:h-3/5 text-center": size === "md",
        };
      case "lg":
        return {
          "mx-auto w-full md:w-3/4 md:h-3/4 text-center": size === "lg",
        };

      case "full":
        return {
          "mx-auto w-full h-full text-center": size === "full",
        };

      default:
        return {
          "mx-auto w-full md:w-2/4 h-2/4 text-center": size === "md",
        };
    }
  };

  return (
    <>
      <Transition
        appear
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          data-testid="modal-container"
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-50"
          onClose={() => (typeof onClose() === "function" ? onClose() : null)}
        >
          <div
            className={overrideTailwindClasses(
              classnames(
                generateRounded(rounded),
                decorateSizeModal(),
                "mx-auto"
              )
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay
                className={overrideTailwindClasses(
                  classnames(decorateGradientForOverlay(), "fixed inset-0")
                )}
              />
            </Transition.Child>
            <span
              className="inline-block h-screen align-bottom md:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={overrideTailwindClasses(
                  classnames(
                    generateRounded(rounded),
                    decorateSizeModal(),
                    "inline-block px-5 py-3 text-left align-middle transition-all transform bg-white shadow-xl"
                  )
                )}
              >
                <div className="flex flex-col justify-between h-full">
                  <Dialog.Title
                    as="h3"
                    className={overrideTailwindClasses(
                      classnames(
                        "text-lg font-medium leading-6 text-gray-900 py-3",
                        decorateHeaderColor()
                      )
                    )}
                  >
                    <div className="flex items-center justify-between">
                      {title}
                      {showCloseButton && (
                        <button
                          className="focus:outline-none"
                          onClick={() =>
                            typeof onClickIcon() === "function"
                              ? onClickIcon()
                              : null
                          }
                        >
                          <CloseIcon />
                        </button>
                      )}
                    </div>
                  </Dialog.Title>
                  <div className="flex-1 h-auto overflow-y-auto mt-5">
                    {children}
                  </div>
                  {actions && actions.length > 0 && (
                    <div className="block md:flex space-x-0 space-y-5 md:space-y-0 md:space-x-5 md:ml-auto mt-5 items-center">
                      {actions.map((Button) => {
                        return <div>{Button}</div>;
                      })}
                    </div>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

Modal.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full", "none"]),
  isOpen: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  actions: PropTypes.array,
  onClose: PropTypes.func,
};

export default Modal;

const CloseIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 cursor-pointer"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  );
};
