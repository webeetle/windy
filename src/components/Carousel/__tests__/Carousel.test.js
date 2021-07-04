import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Carousel, WindyProvider } from "../../../index.js";

const images = [
  "https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
];

const theme = {
  carousel: { rounded: "md", color: "indigo" },
};

afterEach(cleanup);

test("<Carousel/> should render ", () => {
  render(
    <WindyProvider theme={theme}>
      <Carousel images={images} />
    </WindyProvider>
  );

  const component = screen.getByTestId("carousel");
  expect(component).toBeInTheDocument();

  const arrowLeft = screen.getByText("◀");
  const arrowRight = screen.getByText("▶");

  expect(arrowLeft).toBeInTheDocument();
  expect(arrowRight).toBeInTheDocument();
});

test("<Carousel/> props style", () => {
  render(
    <WindyProvider theme={theme}>
      <Carousel images={images} />
    </WindyProvider>
  );

  const arrowLeft = screen.getByTestId("arrow-left");
  const arrowRight = screen.getByTestId("arrow-right");

  expect(arrowLeft).toHaveClass("bg-indigo-500 text-white");
  expect(arrowRight).toHaveClass("bg-indigo-500 text-white");
});

//TODO
// test("<Carousel/> cb", () => {
//   let idx = 0;
//   render(
//     <WindyProvider theme={theme}>
//       <Carousel getCurentIndex={(value) => (idx = value)} images={images} />
//     </WindyProvider>
//   );

//   const arrowLeft = screen.getByTestId("arrow-left");
//   const arrowRight = screen.getByTestId("arrow-right");

//   fireEvent.click(arrowRight);
//   expect(idx).toBe(1);
//   fireEvent.click(arrowLeft);
//   expect(idx).toBe(0);
// });
