import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Modal, Button, WindyProvider } from "../../../index.js";

const theme = {
  modal: { color: "indigo", rounded: "md", title: "TitleFromTheme" },
};

const action = [<button>Ciaone</button>];

afterAll(cleanup);

test("<Modal /> Should Render ", () => {
  let flag = false;

  render(<button onClick={() => (flag = true)}>Trigger</button>);
  const trigger = screen.getByText("Trigger");

  fireEvent.click(trigger);

  render(
    <WindyProvider>
      <Modal isOpen={flag}>Ciao</Modal>
    </WindyProvider>
  );
  const component = screen.getByTestId("modal-container");
  expect(component).toBeInTheDocument();
});

// test("<Modal /> Props ", () => {
//   render(
//     <WindyProvider theme={theme}>
//       <Modal
//         isOpen={true}
//         actions={[<Button>Nothing</Button>, <Button>Confirm</Button>]}
//       >
//         Ciao
//       </Modal>
//     </WindyProvider>
//   );

//   const component = screen.getByText("modal-container");
//   const title = screen.getByText("TitleFromTheme");

//   const buttonOne = screen.getByText("Nothing");
//   const buttonTwo = screen.getByText("Confirm");

//   expect(buttonOne).toBeInTheDocument();
//   expect(buttonTwo).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
//   expect(title).toHaveClass(
//     "bg-gradient-to-l from-indigo-500 to-indigo-600 text-white px-5 rounded-md shadow-md"
//   );
//   expect(component).toHaveClass("rounded-md");
// });
