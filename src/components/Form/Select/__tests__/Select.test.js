import React, { useState } from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  cleanup,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "../Select";

const exampleOptions = [
  { label: "Wade Cooper", value: "Wade Cooper" },
  { label: "Arlene Mccoy", value: "Arlene Mccoy" },
  { label: "Devon Webb", value: "Devon Webb" },
  { label: "Tom Cook", value: "Tom Cook" },
  { label: "Tanya Fox", value: "Tanya Fox" },
  { label: "Hellen Schmidt", value: "Hellen Schmidt" },
];

//NOTE : If you don't pass options array you will get an error , it needs double check
test("<Input /> should render ", () => {
  render(<Select options={exampleOptions} />);

  const component = screen.getByTestId("select-1");
  expect(component).toBeInTheDocument();
});

// test("<Input /> options and change selection", async () => {
//   const { getByTestId, getByText } = render(
//     <Select options={exampleOptions} />
//   );
//   // where <value> is the option value without angle brackets!
//   userEvent.selectOptions(getByTestId("select-1"), getByText("Tom Cook"));
//   expect(getByTestId("Tom Cook-1").selected).toBeTruthy();
//   expect(getByTestId("Wade Cooper-1").selected).toBeFalsy();
// });
