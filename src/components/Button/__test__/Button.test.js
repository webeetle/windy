import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Button, WindyProvider } from "../../../index.js";

test("<Button /> Should Render ", () => {
  render(
    <WindyProvider>
      <Button>Hello</Button>
    </WindyProvider>
  );
  const component = screen.getByTestId("Button-1");
  expect(component).toBeInTheDocument();
});

test("<Button /> Text Content", () => {
  render(
    <WindyProvider>
      <Button>Hello</Button>
    </WindyProvider>
  );
  const component = screen.getByTestId("Button-1");

  expect(component).toHaveTextContent(/Hello/i);
});

test("<Button /> Props", () => {
  render(
    <WindyProvider>
      <Button
        color="blue"
        size="lg"
        layout="contained"
        shadow="xl"
        rounded="md"
      >
        Hello
      </Button>
    </WindyProvider>
  );
  const component = screen.getByTestId("Button-1");

  expect(component).toHaveClass(
    "bg-gradient-to-l from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-xl font-medium shadow-xl rounded-md"
  );
});

test("<Button /> Disabled", () => {
  render(
    <WindyProvider>
      <Button disabled>Hello</Button>
    </WindyProvider>
  );
  const component = screen.getByTestId("Button-1");
  expect(component).toHaveClass("opacity-50 pointer-events-none");
  expect(component).toBeDisabled();
});

test("<Button /> Click Event To Change Layout Contained => Text", () => {
  let layoutType = "contained";

  const { unmount } = render(
    <WindyProvider>
      <Button
        color="blue"
        layout={layoutType}
        onClick={() => (layoutType = "text")}
      >
        Hello
      </Button>
    </WindyProvider>
  );

  const component = screen.getByTestId("Button-1");
  expect(component).toHaveClass(
    "bg-gradient-to-l from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500"
  );
  fireEvent.click(component);
  unmount(component);
});

test("<Button /> Click Event To Change Layout Text => Bordered ", () => {
  let layoutType = "text";
  const { unmount } = render(
    <WindyProvider>
      <Button
        color="blue"
        layout={layoutType}
        onClick={() => (layoutType = "bordered")}
      >
        Hello
      </Button>
    </WindyProvider>
  );
  const component = screen.getByTestId("Button-1");
  expect(component).toHaveClass("hover:text-blue-500");
  fireEvent.click(component);
  unmount(component);

  render(
    <WindyProvider>
      <Button color="blue" layout={layoutType}>
        Hello
      </Button>
    </WindyProvider>
  );

  const componentTwo = screen.getByTestId("Button-1");
  expect(componentTwo).toHaveClass(
    "border-blue-300 text-blue-700 hover:bg-blue-50 active:bg-blue-200"
  );
});

test("<Button /> Give Custom ClassName ", () => {
  render(
    <WindyProvider>
      <Button className="bg-red-500">Hi</Button>
    </WindyProvider>
  );

  const component = screen.getByTestId("Button-1");
  expect(component).toHaveClass("bg-red-500");
});

test("<Button /> Give Custom Style ", () => {
  render(
    <WindyProvider>
      <Button color="blue" style={{ backgroundColor: "red" }}>
        Hi
      </Button>
    </WindyProvider>
  );

  const component = screen.getByTestId("Button-1");
  expect(component).toHaveStyle({ "background-color": "red" });
});
