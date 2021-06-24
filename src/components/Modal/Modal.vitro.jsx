import React, { useState } from "react";
import Modal from "./Modal";
import "tailwindcss/dist/tailwind.css";
import Button from "../Button/Button";

export const Contained = () => {
  const [opened, setOpened] = useState(false);

  function closeModal() {
    setOpened(false);
  }

  function openModal() {
    setOpened(true);
  }

  return (
    <div className="flex items-center space-x-5">
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <Modal
        isOpen={opened}
        actions={[
          <Button
            onClick={closeModal}
            layout="bordered"
            color="blue"
            rounded="md"
          >
            Ciao
          </Button>,
        ]}
      >
        I'm the modal
      </Modal>
    </div>
  );
};
