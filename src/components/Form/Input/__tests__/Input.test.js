import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input, WindyProvider } from "../../../../index";

//Example Basic Use Case
const ExampleInput = () => {
  const [value, setValue] = useState("");

  return (
    <WindyProvider>
      <Input
        value={value}
        aria-label="ExampleInput"
        onChange={(e) => setValue(e.target.value)}
      />
    </WindyProvider>
  );
};

test("<Input /> should render ", () => {
  render(
    <WindyProvider>
      <Input />
    </WindyProvider>
  );

  const component = screen.getByTestId("input-1");
  expect(component).toBeInTheDocument();
});

test("<Input /> style props ", () => {
  render(
    <WindyProvider>
      <Input rounded="sm" shadow="sm" />
    </WindyProvider>
  );

  const component = screen.getByTestId("input-1");
  expect(component).toHaveClass("rounded-sm shadow-sm");
  expect(component).not.toBeDisabled();
});

test("<Input /> show prefix | suffix ", () => {
  render(
    <WindyProvider>
      <Input prefix="Hello One" suffix="Hello Two" />
    </WindyProvider>
  );

  const componentPrefix = screen.getByText("Hello One");
  expect(componentPrefix).toBeInTheDocument();
  expect(componentPrefix).toHaveTextContent("Hello One");

  const componentSuffix = screen.getByText("Hello Two");
  expect(componentSuffix).toBeInTheDocument();
  expect(componentSuffix).toHaveTextContent("Hello Two");
});

test("<Input /> have focus ", () => {
  render(
    <WindyProvider>
      <Input rounded="sm" shadow="sm" color="blue" name="test" />
    </WindyProvider>
  );

  const component = screen.getByTestId("input-1");
  fireEvent.focus(component);

  expect(component).toHaveClass("focus:ring-2");
});

test("<Input /> placeholder ", () => {
  render(
    <WindyProvider>
      <Input placeholder="Hello" />
    </WindyProvider>
  );

  const component = screen.getByTestId("input-1");
  expect(component.placeholder).toBe("Hello");
});

test("<Input /> label ", () => {
  render(
    <WindyProvider>
      <Input placeholder="Hello" label="From Label" id="id" />
    </WindyProvider>
  );

  const component = screen.getByText("From Label");
  expect(component).toBeInTheDocument();
  expect(component).toHaveAttribute("for", "id");
});

test("<Input /> disabled ", () => {
  render(
    <WindyProvider>
      <Input rounded="sm" shadow="sm" disabled />
    </WindyProvider>
  );

  const component = screen.getByTestId("input-1");
  expect(component).toBeDisabled();
});

test("<Input /> default value ", () => {
  render(
    <WindyProvider>
      <Input rounded="sm" shadow="sm" defaultValue="value" />
    </WindyProvider>
  );

  const component = screen.getByTestId("input-1");
  expect(component).toHaveValue("value");
});

test("<Input /> type number ", () => {
  render(
    <WindyProvider>
      <Input rounded="sm" shadow="sm" type="number" />
    </WindyProvider>
  );

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
