import React, { useState } from "react";
import "tailwindcss/dist/tailwind.css";

import { Button, Modal, WindyProvider } from "../../index.js";

const theme = { modal: {} };

export const Basic = () => {
  const [opened, setOpened] = useState(false);

  function closeModal() {
    setOpened(false);
  }

  function openModal() {
    setOpened(true);
  }

  return (
    <WindyProvider theme={theme}>
      <div className="flex items-center space-x-5">
        <div className="flex items-center justify-center">
          <Button onClick={openModal}>Open dialog</Button>
        </div>
        <Modal isOpen={opened} title="A simple Dialog" onClickIcon={closeModal}>
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
    </WindyProvider>
  );
};

export const Actions = () => {
  const [opened, setOpened] = useState(false);

  function closeModal() {
    setOpened(false);
  }

  function openModal() {
    setOpened(true);
  }

  return (
    <WindyProvider theme={theme}>
      <div className="flex items-center space-x-5">
        <div className="flex items-center justify-center">
          <Button onClick={openModal}>Open dialog</Button>
        </div>
        <Modal
          isOpen={opened}
          title="A simple Dialog"
          onClickIcon={closeModal}
          actions={[
            <Button
              onClick={closeModal}
              layout="bordered"
              color="red"
              rounded="md"
              className="w-full justify-center"
            >
              Nothing
            </Button>,
            <Button
              className="w-full justify-center"
              onClick={() => alert("Confirmed")}
              color="green"
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
    </WindyProvider>
  );
};
