import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Dropdown from "../Dropdown";
import {WindyProvider} from "../../../index.js";
import userEvent from "@testing-library/user-event";

const EditIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
  );
};

const exampleOptions = [
  {
    label: "Text With Icon",
    icon: <EditIcon/>,
    className: "hover:bg-indigo-100",
    handler: () => alert("Clicked"),
  },
  {
    label: "Text",
    icon: null,
    handler: () => console.log("Clicked"),
  },
];


test("<Dropdown /> should render", () => {
  render(
    <WindyProvider>
      <Dropdown
        buttonText="Text Button"
        layout="default"
        options={exampleOptions}
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("dropdown-button-1");
  expect(component).toBeInTheDocument();
});

test("<Dropdown /> should render with caret", () => {
  render(
    <WindyProvider>
      <Dropdown
        buttonText="Text Button"
        layout="default"
        options={exampleOptions}
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("dropdown-button-1");
  expect(component).toBeInTheDocument();

  const svg = screen.getByTestId("caret-1");
  expect(svg).toBeInTheDocument()

});

test("<Dropdown /> should render without caret", () => {
  const {queryByTestId} = render(
    <WindyProvider>
      <Dropdown
        buttonText="Text Button"
        layout="text"
        caret={false}
        options={exampleOptions}
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("dropdown-button-1");
  expect(component).toBeInTheDocument();

  expect(queryByTestId(/caret-1/i)).toBeNull()

});

test("<Dropdown /> should be text style", () => {
  render(
    <WindyProvider>
      <Dropdown
        buttonText="Text Button"
        layout="text"
        options={exampleOptions}
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("dropdown-button-1");
  expect(component).toBeInTheDocument();

  expect(component).toHaveClass("hover:text-indigo-500 text-base rounded-md inline-flex items-center justify-center w-full hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75")

});

test("<Dropdown /> should be contained style", () => {
  render(
    <WindyProvider>
      <Dropdown
        buttonText="Text Button"
        layout="contained"
        options={exampleOptions}
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("dropdown-button-1");
  expect(component).toBeInTheDocument();

  expect(component).toHaveClass("bg-gradient-to-l from-indigo-500 to-indigo-600 hover:opacity-80 text-white shadow-md text-base font-medium px-3.5 py-1.5 rounded-md inline-flex items-center justify-center w-full hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75")

});

test("<Dropdown /> should be bordered style", () => {
  render(
    <WindyProvider>
      <Dropdown
        buttonText="Text Button"
        layout="bordered"
        options={exampleOptions}
      />
    </WindyProvider>
  );

  const component = screen.getByTestId("dropdown-button-1");
  expect(component).toBeInTheDocument();

  expect(component).toHaveClass("bg-transparent border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 active:bg-indigo-200 px-4 py-2 shadow-md text-base font-medium px-3.5 py-1.5 rounded-md inline-flex items-center justify-center w-full hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75")

});
