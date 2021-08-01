import React from "react";
import Drawer from "./Drawer";

import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../index.js";
import Button from "../Button/Button";

const theme = { drawer: { color: "white" } };

export const BasicDrawer = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <WindyProvider theme={theme}>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer open={open} onClose={() => setOpen(false)} />
      </WindyProvider>
    </>
  );
};

export const BasicDrawerWithHeader = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <WindyProvider theme={theme}>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Drawer.Header>
            <div className="mx-6 shadow-xl px-3 py-2 bg-indigo-500 rounded-md my-6 text-white flex justify-between items-center">
              <span>Drawer Title</span>
              <div
                onClick={() => setOpen(false)}
                className="bg-white h-6 w-6 rounded-full p-2 text-black text-xs flex items-center justify-center cursor-pointer"
              >
                x
              </div>
            </div>
          </Drawer.Header>
        </Drawer>
      </WindyProvider>
    </>
  );
};

export const BasicDrawerWithHeaderAndContent = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <WindyProvider theme={theme}>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Drawer.Header>
            <div className="mx-6 shadow-xl px-3 py-2 bg-indigo-500 rounded-md my-6 text-white flex justify-between items-center">
              <span>Drawer Title</span>
              <div
                onClick={() => setOpen(false)}
                className="bg-white h-6 w-6 rounded-full p-2 text-black text-xs flex items-center justify-center cursor-pointer"
              >
                x
              </div>
            </div>
          </Drawer.Header>
          <Drawer.Content>
            <div className="mx-6 px-3 py-2 h-96 rounded-md my-6 text-black grid place-items-center">
              <span>Hi from Windy</span>
            </div>
          </Drawer.Content>
        </Drawer>
      </WindyProvider>
    </>
  );
};

export const BasicDrawerWithHeaderContentAndFooter = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <WindyProvider theme={theme}>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Drawer.Header>
            <div className="mx-6 shadow-md px-3 py-2 bg-indigo-500 rounded-md my-6 text-white flex justify-between items-center">
              <span>Drawer Title</span>
              <div
                onClick={() => setOpen(false)}
                className="bg-white h-6 w-6 rounded-full p-2 text-black text-xs flex items-center justify-center cursor-pointer"
              >
                x
              </div>
            </div>
          </Drawer.Header>
          <Drawer.Content>
            <div className="mx-6 px-3 py-2 h-96 rounded-md my-2 text-black">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt autem esse assumenda eius libero illo deserunt, enim
                itaque optio repellat natus perferendis ratione tenetur est
                similique saepe mollitia! Amet, dolorum. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nesciunt autem esse assumenda
                eius libero illo deserunt, enim itaque optio repellat natus
                perferendis ratione tenetur est similique saepe mollitia! Amet,
                dolorum. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nesciunt autem esse assumenda eius libero illo deserunt,
                enim itaque optio repellat natus perferendis ratione tenetur est
                similique saepe mollitia! Amet, dolorum. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nesciunt autem esse assumenda
                eius libero illo deserunt, enim itaque optio repellat natus
                perferendis ratione tenetur est similique saepe mollitia! Amet,
                dolorum. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nesciunt autem esse assumenda eius libero illo deserunt,
                enim itaque optio repellat natus perferendis ratione tenetur est
                similique saepe mollitia! Amet, dolorum. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nesciunt autem esse assumenda
                eius libero illo deserunt, enim itaque optio repellat natus
                perferendis ratione tenetur est similique saepe mollitia! Amet,
                dolorum. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nesciunt autem esse assumenda eius libero illo deserunt,
                enim itaque optio repellat natus perferendis ratione tenetur est
                similique saepe mollitia! Amet, dolorum.
              </span>
            </div>
          </Drawer.Content>
          <Drawer.Footer className="w-full bottom-5">
            <div className="mx-6 px-3 py-2 rounded-md text-white bg-indigo-500">
              <span>Footer</span>
            </div>
          </Drawer.Footer>
        </Drawer>
      </WindyProvider>
    </>
  );
};
