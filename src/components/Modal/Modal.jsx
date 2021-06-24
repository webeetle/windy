import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";

import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
const Modal = ({
  isOpen = false,
  onClose = () => null,
  onClickIcon = () => null,
  showCloseButton = true,
  color = "white",
  title = "Dialog",
  size = "md",
  actions = [],
  children,
  rounded = "sm",
  className = "",
}) => {
  //TODO : Enable Header Color Features
  const decorateHeaderColor = () => {
    switch (color) {
      case "white":
        return {
          "bg-white text-black": color === "white",
        };
      case "gray":
        return {
          "bg-gray-500 text-white": color === "gray",
        };
      case "red":
        return {
          "bg-red-500 text-white": color === "red",
        };
      case "yellow":
        return {
          "bg-yellow-500 text-white": color === "yellow",
        };

      case "green":
        return {
          "bg-green-500 text-white": color === "green",
        };
      case "blue":
        return {
          "bg-blue-500 text-white": color === "blue",
        };
      case "indigo":
        return {
          "bg-indigo-500 text-white": color === "indigo",
        };
      case "purple":
        return {
          "bg-purple-500 text-white": color === "purple",
        };
      case "pink":
        return {
          "bg-pink-500 text-white": color === "pink",
        };
    }
  };

  const decorateRoundedModal = () => {
    switch (rounded) {
      case "sm":
        return {
          "rounded-md": rounded === "sm",
        };

      case "md":
        return {
          "rounded-xl": rounded === "md",
        };
      case "lg":
        return {
          "rounded-2xl": rounded === "lg",
        };
      case "none":
        return {
          "rounded-none": rounded === "none",
        };
      default:
        return {
          "rounded-2xl": rounded === "lg",
        };
    }
  };
  const decorateSizeModal = () => {
    switch (size) {
      case "md":
        return {
          "mx-auto w-2/4 h-2/4 text-center": size === "md",
        };
      case "lg":
        return {
          "mx-auto w-3/4 h-3/4 text-center": size === "lg",
        };

      case "full":
        return {
          "mx-auto w-full h-full text-center": size === "full",
        };

      default:
        return {
          "mx-auto w-2/4 h-2/4 text-center": size === "md",
        };
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => (typeof onClose() === "function" ? onClose() : null)}
        >
          <div
            className={overrideTailwindClasses(
              classnames(decorateRoundedModal(), decorateSizeModal(), "mx-auto")
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
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
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
                    decorateRoundedModal(),
                    decorateSizeModal(),
                    "inline-block  p-3 text-left align-middle transition-all transform bg-white shadow-xl"
                  )
                )}
              >
                <div className="flex flex-col justify-between h-full">
                  <Dialog.Title
                    as="h3"
                    className={overrideTailwindClasses(
                      classnames(
                        // decorateHeaderColor(),
                        "text-lg font-medium leading-6 text-gray-900 py-3"
                      )
                    )}
                  >
                    <div className="flex items-center justify-between">
                      {title}
                      {showCloseButton && (
                        <CloseIcon
                          onClick={() =>
                            typeof onClickIcon() === "function"
                              ? onClickIcon()
                              : null
                          }
                        />
                      )}
                    </div>
                  </Dialog.Title>
                  <div className="flex-1 h-auto overflow-y-auto">
                    {children}
                  </div>
                  <div className="flex items-center ml-auto space-x-5 mt-4">
                    {actions &&
                      actions.map((Button) => {
                        return <div>{Button}</div>;
                      })}
                  </div>
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
  size: PropTypes.string,
  className: PropTypes.string,
  actions: PropTypes.array,
  onClose: PropTypes.func,
  children: PropTypes.any,
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
