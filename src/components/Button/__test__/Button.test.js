import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";
import { unmountComponentAtNode } from "react-dom";

test("<Button /> Should Render ", () => {
  render(<Button>Hello</Button>);
  const component = screen.getByTestId("Button-1");
  expect(component).toBeInTheDocument();
});

test("<Button /> Text Content", () => {
  render(<Button>Hello</Button>);
  const component = screen.getByTestId("Button-1");

  expect(component).toHaveTextContent(/Hello/i);
});

test("<Button /> Props", () => {
  render(
    <Button color="blue" size="lg" layout="contained" shadow="xl" rounded="md">
      Hello
    </Button>
  );
  const component = screen.getByTestId("Button-1");

  expect(component).toHaveClass(
    "bg-gradient-to-l from-blue-500 to-blue-600 hover:opacity-80 text-xl font-medium px-5 py-3 shadow-xl rounded-md"
  );
});

test("<Button /> Disabled", () => {
  render(<Button disabled>Hello</Button>);
  const component = screen.getByTestId("Button-1");
  expect(component).toHaveClass("opacity-50 pointer-events-none");
  expect(component).toBeDisabled();
});

test("<Button /> Click Event To Change Layout Contained => Text", () => {
  let layoutType = "contained";

  const { unmount } = render(
    <Button
      color="blue"
      layout={layoutType}
      onClick={() => (layoutType = "text")}
    >
      Hello
    </Button>
  );

  const component = screen.getByTestId("Button-1");
  expect(component).toHaveClass(
    "bg-gradient-to-l from-blue-500 to-blue-600 hover:opacity-80"
  );
  fireEvent.click(component);
  unmount(component);
});

test("<Button /> Click Event To Change Layout Text => Bordered ", () => {
  let layoutType = "text";
  const { unmount } = render(
    <Button
      color="blue"
      layout={layoutType}
      onClick={() => (layoutType = "bordered")}
    >
      Hello
    </Button>
  );
  const component = screen.getByTestId("Button-1");
  expect(component).toHaveClass("hover:text-blue-500");
  fireEvent.click(component);
  unmount(component);

  render(
    <Button color="blue" layout={layoutType}>
      Hello
    </Button>
  );

  const componentTwo = screen.getByTestId("Button-1");
  expect(componentTwo).toHaveClass(
    "border-blue-300 text-blue-700 hover:bg-blue-50 active:bg-blue-200"
  );
});

test("<Button /> Give Custom ClassName ", () => {
  render(<Button className="bg-red-500">Hi</Button>);

  const component = screen.getByTestId("Button-1");
  expect(component).toHaveClass("bg-red-500");
});

test("<Button /> Give Custom Style ", () => {
  render(
    <Button color="blue" style={{ backgroundColor: "red" }}>
      Hi
    </Button>
  );

  const component = screen.getByTestId("Button-1");
  expect(component).toHaveStyle({ "background-color": "red" });
});
