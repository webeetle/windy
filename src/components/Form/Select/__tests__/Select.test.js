import React, {useState} from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  cleanup,
  waitFor, getByTestId, getAllByRole, within,
} from "@testing-library/react";
import {Select, WindyProvider} from "../../../../index.js";
import userEvent from "@testing-library/user-event";

const exampleOptions = [
  {label: "Wade Cooper", value: "Wade Cooper"},
  {label: "Arlene Mccoy", value: "Arlene Mccoy"},
  {label: "Devon Webb", value: "Devon Webb"},
  {label: "Tom Cook", value: "Tom Cook"},
  {label: "Tanya Fox", value: "Tanya Fox"},
  {label: "Hellen Schmidt", value: "Hellen Schmidt"},
];

afterEach(cleanup)

//NOTE : If you don't pass options array you will get an error , it needs double check
test("<Select /> should render ", () => {
  render(
    <WindyProvider>
      <Select options={exampleOptions}/>
    </WindyProvider>
  );

  const component = screen.getByTestId("select-1");
  expect(component).toBeInTheDocument()
  expect(component).not.toBeDisabled()
});

test("<Select /> options change selection", async () => {

  render(
    <WindyProvider>
      <Select options={exampleOptions}/>
    </WindyProvider>
  )

  //get open button
  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument()
  expect(button).not.toBeDisabled()
  //click open button and show options
  userEvent.click(button)

  //get options list
  const listBox = document.body.querySelector('ul[role=listbox]')
  expect(listBox).toBeInTheDocument()
  //get single option
  const listItem = within(listBox).getByText("Tom Cook")
  expect(listItem).toBeInTheDocument()
  //click option
  userEvent.click(listItem)

  //await for options close
  await waitForElementToBeRemoved(() => document.body.querySelector('ul[role=listbox]'))

})

test("<Select /> ", async () => {

  let value = 1
  render(
    <WindyProvider>
      <Select options={exampleOptions} onSelect={() => value = 2}/>
    </WindyProvider>
  )

  //get open button
  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument()
  expect(button).not.toBeDisabled()
  //click open button and show options
  userEvent.click(button)

  //get options list
  const listBox = document.body.querySelector('ul[role=listbox]')
  expect(listBox).toBeInTheDocument()

  //get single option
  const listItem = within(listBox).getByText("Tom Cook")
  expect(listItem).toBeInTheDocument()
  //click option
  userEvent.click(listItem)

  expect(value).toBe(2)

  await waitForElementToBeRemoved(() => document.body.querySelector('ul[role=listbox]'))
})

test("<Select /> options default selected", () => {

  render(
    <WindyProvider>
      <Select selected={"Tom Cook"} options={exampleOptions}/>
    </WindyProvider>
  )

  const select = screen.getByTestId('select-1')
  expect(select).toBeInTheDocument()

  expect(select).toHaveTextContent("Tom Cook")

})

test("<Select /> disabled", () => {

  render(
    <WindyProvider>
      <Select disabled={true} options={exampleOptions}/>
    </WindyProvider>
  )

  //get open button
  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument()
  expect(button).toBeDisabled()

})

test("<Select /> select colors", () => {

  render(
    <WindyProvider>
      <Select color={"white"} options={exampleOptions}/>
    </WindyProvider>
  )

  const buttonWhite = screen.getByRole("button")
  expect(buttonWhite).toBeInTheDocument()
  expect(buttonWhite).toHaveClass('bg-transparent focus:ring-2 ring-0 ring-black border-black text-black hover:bg-gray-50')

  cleanup()

  render(
    <WindyProvider>
      <Select color={"gray"} options={exampleOptions}/>
    </WindyProvider>
  )

  const buttonGray = screen.getByRole("button")
  expect(buttonGray).toBeInTheDocument()
  expect(buttonGray).toHaveClass('bg-transparent focus:ring-2 focus:ring-gray-500 ring-gray-300 text-black hover:bg-gray-50')

  cleanup()

  render(
    <WindyProvider>
      <Select color={"red"} options={exampleOptions}/>
    </WindyProvider>
  )

  const buttonRed = screen.getByRole("button")
  expect(buttonRed).toBeInTheDocument()
  expect(buttonRed).toHaveClass('bg-transparent focus:ring-2 focus:ring-red-500 ring-red-500 text-black hover:bg-red-50')

  cleanup()

  render(
    <WindyProvider>
      <Select color={"yellow"} options={exampleOptions}/>
    </WindyProvider>
  )

  const buttonYellow = screen.getByRole("button")
  expect(buttonYellow).toBeInTheDocument()
  expect(buttonYellow).toHaveClass('bg-transparent focus:ring-2 focus:ring-yellow-500 ring-yellow-500 text-black hover:bg-yellow-50')
  cleanup()
  render(
    <WindyProvider>
      <Select color={"green"} options={exampleOptions}/>
    </WindyProvider>
  )

  const buttonGreen = screen.getByRole("button")
  expect(buttonGreen).toBeInTheDocument()
  expect(buttonGreen).toHaveClass('bg-transparent focus:ring-2 focus:ring-green-500 ring-green-500 text-black hover:bg-green-50')

  cleanup()

  render(
    <WindyProvider>
      <Select color={"blue"} options={exampleOptions}/>
    </WindyProvider>
  )

  const buttonBlue = screen.getByRole("button")
  expect(buttonBlue).toBeInTheDocument()
  expect(buttonBlue).toHaveClass('bg-transparent focus:ring-2 focus:ring-blue-500 ring-blue-500 text-black hover:bg-blue-50')

  cleanup()

  render(
    <WindyProvider>
      <Select color={"indigo"} options={exampleOptions}/>
    </WindyProvider>
  )

  const buttonIndigo = screen.getByRole("button")
  expect(buttonIndigo).toBeInTheDocument()
  expect(buttonIndigo).toHaveClass('bg-transparent focus:ring-2 focus:ring-indigo-500 ring-indigo-500 text-black hover:bg-indigo-50')

  cleanup()

  render(
    <WindyProvider>
      <Select color={"purple"} options={exampleOptions}/>
    </WindyProvider>
  )

  const buttonPurple = screen.getByRole("button")
  expect(buttonPurple).toBeInTheDocument()
  expect(buttonPurple).toHaveClass('bg-transparent focus:ring-2 focus:ring-purple-500 ring-purple-500 text-black hover:bg-purple-50')

  cleanup()

  render(
    <WindyProvider>
      <Select color={"pink"} options={exampleOptions}/>
    </WindyProvider>
  )

  const buttonPink = screen.getByRole("button")
  expect(buttonPink).toBeInTheDocument()
  expect(buttonPink).toHaveClass('bg-transparent focus:ring-2 focus:ring-pink-500 ring-pink-500 text-black hover:bg-pink-50')

  cleanup()
})
