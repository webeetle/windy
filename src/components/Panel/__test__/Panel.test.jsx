import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Panel, WindyProvider } from "../../../index.js";

describe("<Panel/>", () => {
  test("should render default", () => {
    render(
      <WindyProvider>
        <Panel />
      </WindyProvider>
    );
    const component = screen.getByTestId("panel-1");
    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("bg-white border border-gray-200 divide-gray-200")
  });

  test("should render custom props layout with `error` ", () => {
    render(
      <WindyProvider>
        <Panel layout="error" />
      </WindyProvider>
    );

    const component = screen.getByTestId("panel-1");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("bg-red-100 border-red-400 text-red-600 divide-red-200")
  });


  test("should render custom props layout `warning`", () => {
    render(
      <WindyProvider>
        <Panel layout="warning" />
      </WindyProvider>
    );

    const component = screen.getByTestId("panel-1");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("bg-yellow-100 border-yellow-400 text-yellow-600 divide-yellow-200")
  });

  test("should render custom props layout `success`", () => {
    render(
      <WindyProvider>
        <Panel layout="success" />
      </WindyProvider>
    );

    const component = screen.getByTestId("panel-1");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("bg-green-100 border-green-400 text-green-600 divide-green-200")
  });

  test("should render custom props layout `info`", () => {
    render(
      <WindyProvider>
        <Panel layout="info" />
      </WindyProvider>
    );

    const component = screen.getByTestId("panel-1");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("bg-blue-100 border-blue-400 text-blue-600 divide-blue-200")
  });

  test("should render custom props layout `paper`", () => {
    render(
      <WindyProvider>
        <Panel layout="paper" />
      </WindyProvider>
    );

    const component = screen.getByTestId("panel-1");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("bg-white divide-gray-200 shadow-md border border-gray-200")
  });

  test("should render custom props layout `dashed`", () => {
    render(
      <WindyProvider>
        <Panel layout="dashed" />
      </WindyProvider>
    );

    const component = screen.getByTestId("panel-1");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("bg-gray-100 border-4 border-gray-200 border-dashed")
  });

  test("should render with Custom ClassName", () => {
    render(
      <WindyProvider>
        <Panel className="px-6 py-6" />
      </WindyProvider>
    );

    const component = screen.getByTestId("panel-1");
    expect(component).toHaveClass("px-6 py-6");
  });

  test("should render with Custom Style ", () => {
    render(
      <WindyProvider>
        <Panel style={{ maxWidth: 400 }} />
      </WindyProvider>
    );
    const component = screen.getByTestId("panel-1");

    expect(component).toHaveStyle({ "max-width": "400px" });
  });
});
