import React from "react";
import Carousel from "./Carousel";
import "tailwindcss/dist/tailwind.css";
import { WindyProvider } from "../../index.js";

const images = [
  "https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
];

const theme = {
  carousel: { rounded: "md", color: "transparent" },
};

export const Basic = () => {
  return (
    <div className="flex items-center justify-centr w-1/2 p-12">
      <WindyProvider theme={theme}>
        <Carousel images={images} />
      </WindyProvider>
    </div>
  );
};

export const NextAndPrevious = () => {
  return (
    <div className="flex items-center justify-centr w-1/2 p-12">
      <WindyProvider theme={theme}>
        <Carousel
          color="indigo"
          images={images}
          onNext={() => alert("Image Changed Next")}
          onPrevious={() => alert("Image Changed Previous")}
        />
      </WindyProvider>
    </div>
  );
};

export const GetCurrentIndex = () => {
  return (
    <div className="flex items-center justify-centr w-1/2 p-12">
      <WindyProvider theme={theme}>
        <Carousel
          color="red"
          images={images}
          getCurentIndex={(value) => console.log(value)}
        />
      </WindyProvider>
    </div>
  );
};
