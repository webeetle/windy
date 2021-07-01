import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Badge, WindyProvider } from "../../../index.js";

test("<Badge/> Should Render ", () => {
  render(
    <WindyProvider>
      <Badge
        text="Hello"
        color="blue"
        disabled={true}
        onClick={() => {}}
        rounded="full"
        shadow="none"
      />
    </WindyProvider>
  );
  const component = screen.getByTestId("badge-1");
  expect(component).toBeInTheDocument();
});

test("<Badge/> Props ", () => {
  render(
    <WindyProvider>
      <Badge
        text="Hello"
        color="blue"
        disabled={true}
        onClick={() => setValue(10)}
        rounded="full"
        shadow="none"
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("badge-1");

  expect(component).toBeInTheDocument();
  2;

  expect(component).toHaveTextContent("Hello");

  expect(component).toHaveClass("bg-blue-200");
  expect(component).toHaveClass("rounded-full");
  expect(component).toHaveClass("shadow-none");

  expect(component).toHaveClass("pointer-events-none");
});

test("<Badge/> Click Event ", () => {
  let value = 0;
  render(
    <WindyProvider>
      <Badge
        text="Hello"
        color="blue"
        disabled={true}
        onClick={() => (value = 10)}
        rounded="full"
        shadow="none"
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("badge-1");
  fireEvent.click(component);
  expect(value).toBe(10);
});

test("<Badge/> Give Custom ClassName ", () => {
  render(
    <WindyProvider>
      <Badge className="bg-red-500" />
    </WindyProvider>
  );

  const component = screen.getByTestId("badge-1");
  expect(component).toHaveClass("bg-red-500");
});

test("<Badge/> Give Custom Style ", () => {
  render(
    <WindyProvider>
      <Badge color="blue" style={{ backgroundColor: "red" }} />
    </WindyProvider>
  );

  const component = screen.getByTestId("badge-1");
  expect(component).toHaveStyle({ "background-color": "red" });
});
