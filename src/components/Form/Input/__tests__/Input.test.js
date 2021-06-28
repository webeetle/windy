import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Input";

//Example Basic Use Case
const ExampleInput = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      aria-label="ExampleInput"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

test("<Input /> should render ", () => {
  render(<Input />);

  const component = screen.getByTestId("input-1");
  expect(component).toBeInTheDocument();
});

test("<Input /> style props ", () => {
  render(<Input rounded="sm" shadow="sm" />);

  const component = screen.getByTestId("input-1");
  expect(component).toHaveClass("rounded-sm shadow-sm");
  expect(component).not.toBeDisabled();
});

test("<Input /> show prefix | suffix ", () => {
  render(<Input prefix="Hello One" suffix="Hello Two" />);

  const componentPrefix = screen.getByText("Hello One");
  expect(componentPrefix).toBeInTheDocument();
  expect(componentPrefix).toHaveTextContent("Hello One");

  const componentSuffix = screen.getByText("Hello Two");
  expect(componentSuffix).toBeInTheDocument();
  expect(componentSuffix).toHaveTextContent("Hello Two");
});

test("<Input /> have focus ", () => {
  render(<Input rounded="sm" shadow="sm" color="blue" name="test" />);

  const component = screen.getByTestId("input-1");
  fireEvent.focus(component);

  expect(component).toHaveClass("focus:ring-2");
});

test("<Input /> placeholder ", () => {
  render(<Input placeholder="Hello" />);

  const component = screen.getByTestId("input-1");
  expect(component.placeholder).toBe("Hello");
});

test("<Input /> label ", () => {
  render(<Input placeholder="Hello" label="From Label" id="id" />);

  const component = screen.getByText("From Label");
  expect(component).toBeInTheDocument();
  expect(component).toHaveAttribute("for", "id");
});

test("<Input /> disabled ", () => {
  render(<Input rounded="sm" shadow="sm" disabled />);

  const component = screen.getByTestId("input-1");
  expect(component).toBeDisabled();
});

test("<Input /> default value ", () => {
  render(<Input rounded="sm" shadow="sm" defaultValue="value" />);

  const component = screen.getByTestId("input-1");
  expect(component).toHaveValue("value");
});

test("<Input /> type number ", () => {
  render(<Input rounded="sm" shadow="sm" type="number" />);

  const component = screen.getByTestId("input-1");
  expect(component).toHaveAttribute("type", "number");
});

test("<Input /> change event ", () => {
  render(<ExampleInput />);
  const component = screen.getByLabelText("ExampleInput");
  expect(component).toBeInTheDocument();

  expect(component.value).toBe("");
  fireEvent.change(component, { target: { value: "Good Day" } });
  expect(component.value).toBe("Good Day");
  expect(component).toHaveDisplayValue("Good Day");
});
