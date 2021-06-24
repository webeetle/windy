import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import Button from "../Button/Button";

const Modal = ({
  //   isOpen = false,
  title = "Dialog",
  actions = [
    <Button layout="bordered" color="blue">
      Ciao
    </Button>,
  ],
  children,
}) => {
  let [opened, setOpened] = useState(false);

  function closeModal() {
    setOpened(false);
  }

  function openModal() {
    setOpened(true);
  }
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <Transition appear show={opened} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                {children}
                <div className="flex items-center space-x-5 mt-4">
                  {actions &&
                    actions.map((Button) => {
                      return (
                        <div>
                          <Button />
                        </div>
                      );
                    })}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;

{
  /* <button
type="button"
className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
onClick={closeModal}
>
Got it, thanks!
</button> */
}
