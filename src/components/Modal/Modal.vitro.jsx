import React from "react";
import Modal from "./Modal";
import "tailwindcss/dist/tailwind.css";

export const Contained = () => {
  return (
    <div className="flex items-center space-x-5">
      <Modal>Sono Una Modale</Modal>
    </div>
  );
};
