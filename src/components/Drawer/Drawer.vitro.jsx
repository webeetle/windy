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
        <Drawer open={open} onClose={() => setOpen(false)} color="blue">
          <Drawer.Header>
            <div className="bg-white  mx-6 shadow-xl px-3 py-2 rounded-md my-6 text-white flex justify-between items-center">
              <span className="text-black">Drawer Title</span>
              <div
                onClick={() => setOpen(false)}
                className="h-6 w-6 rounded-full p-2 text-xs flex items-center justify-center cursor-pointer"
              >
                x
              </div>
            </div>
          </Drawer.Header>
          <Drawer.Content>
            <div className="px-6 h-full rounded-none text-black">
              <div className="bg-white h-full w-full rounded-md shadow-xl grid place-items-center">
                <span>Hello From Windy</span>
              </div>
            </div>
          </Drawer.Content>
        </Drawer>
      </WindyProvider>
    </>
  );
};

export const BasicDrawerWithCustomBgColorIntensity = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <WindyProvider theme={theme}>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer open={open} onClose={() => setOpen(false)} color="indigo">
          <Drawer.Header>
            <div className="bg-white  mx-6 shadow-xl px-3 py-2 rounded-md my-6 text-white flex justify-between items-center">
              <span className="text-black">Drawer Title</span>
              <div
                onClick={() => setOpen(false)}
                className="h-6 w-6 rounded-full p-2 text-xs flex items-center justify-center cursor-pointer"
              >
                x
              </div>
            </div>
          </Drawer.Header>
          <Drawer.Content>
            <div className="px-6 h-full rounded-none text-black">
              <div className="bg-white h-full w-full rounded-md shadow-xl grid place-items-center">
                <span>Hello From Windy</span>
              </div>
            </div>
          </Drawer.Content>
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
        <Drawer open={open} onClose={() => setOpen(false)} color="indigo">
          <Drawer.Header>
            <div className="bg-white  mx-6 shadow-xl px-3 py-2 rounded-md my-6 text-white flex justify-between items-center">
              <span className="text-black">Drawer Title</span>
              <div
                onClick={() => setOpen(false)}
                className="bg-white h-6 w-6 rounded-full p-2 text-black text-xs flex items-center justify-center cursor-pointer"
              >
                x
              </div>
            </div>
          </Drawer.Header>
          <Drawer.Content>
            <div className="px-6 h-full rounded-none text-black pb-10">
              <div className="h-full w-full rounded-md shadow-xl grid place-items-center">
                <span className="px-3 py-2 bg-white rounded-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt autem esse assumenda eius libero illo deserunt, enim
                  itaque optio repellat natus perferendis ratione tenetur est
                  similique saepe mollitia! Amet, dolorum. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nesciunt autem esse
                  assumenda eius libero illo deserunt, enim itaque optio
                  repellat natus perferendis ratione tenetur est similique saepe
                  mollitia! Amet, dolorum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt autem esse assumenda
                  eius libero illo deserunt, enim itaque optio repellat natus
                  perferendis ratione tenetur est similique saepe mollitia!
                  Amet, dolorum. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Nesciunt autem esse assumenda eius libero
                  illo deserunt, enim itaque optio repellat natus perferendis
                  ratione tenetur est similique saepe mollitia! Amet, dolorum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt autem esse assumenda eius libero illo deserunt, enim
                  itaque optio repellat natus perferendis ratione tenetur est
                  similique saepe mollitia! Amet, dolorum. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nesciunt autem esse
                  assumenda eius libero illo deserunt, enim itaque optio
                  repellat natus perferendis ratione tenetur est similique saepe
                  mollitia! Amet, dolorum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt autem esse assumenda
                  eius libero illo deserunt, enim itaque optio repellat natus
                  perferendis ratione tenetur est similique saepe mollitia!
                  Amet, dolorum.
                </span>
              </div>
            </div>
          </Drawer.Content>
        </Drawer>{" "}
      </WindyProvider>
    </>
  );
};
