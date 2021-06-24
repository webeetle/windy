import React, { useState } from "react";
import Modal from "./Modal";
import "tailwindcss/dist/tailwind.css";
import Button from "../Button/Button";

export const Basic = () => {
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
        onClickIcon={closeModal}
        color="blue"
        size="md"
        rounded="md"
        actions={[
          <Button
            onClick={closeModal}
            layout="bordered"
            color="blue"
            rounded="md"
          >
            Nothing
          </Button>,
          <Button
            onClick={() => alert("Confirmed")}
            layout="bordered"
            color="blue"
            rounded="md"
          >
            Confirm
          </Button>,
        ]}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          non hic molestias vel, excepturi ad accusantium eos necessitatibus
          neque accusamus pariatur obcaecati assumenda amet, illum alias illo?
          Delectus, laboriosam quam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Inventore, non hic molestias vel, excepturi ad
          accusantium eos necessitatibus neque accusamus pariatur obcaecati
          assumenda amet, illum alias illo? Delectus, laboriosam quam.
        </div>
      </Modal>
    </div>
  );
};
