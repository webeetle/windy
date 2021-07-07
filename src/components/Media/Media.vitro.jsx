import React from "react";
import Media from "./Media";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../index.js";

const theme = { media: {} };

export const Basic = () => {
  return (
    <div className="flex items-center space-x-5 max-w-4xl w-full">
      <WindyProvider theme={theme}>
        <Media
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non dapibus massa.
          </p>
        </Media>
      </WindyProvider>
    </div>
  );
};

//Size
export const Size = () => {
  return (
    <div className="flex space-x-5 max-w-6xl flex-row">
      <WindyProvider theme={theme}>
        <Media
          size="xs"
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">Lorem ipsum dolor sit amet</p>
        </Media>
        <Media
          size="sm"
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">Lorem ipsum dolor sit amet</p>
        </Media>
        <Media
          size="md"
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">Lorem ipsum dolor sit amet</p>
        </Media>
        <Media
          size="lg"
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">Lorem ipsum dolor sit amet</p>
        </Media>
        <Media
          size="xl"
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">Lorem ipsum dolor sit amet</p>
        </Media>
      </WindyProvider>
    </div>
  );
};

export const Rounded = () => {
  return (
    <div className="flex items-center space-x-5 max-w-4xl w-full">
      <WindyProvider theme={theme}>
        <Media
          rounded
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non dapibus massa.
          </p>
        </Media>
      </WindyProvider>
    </div>
  );
};

export const AlignedToCenter = () => {
  return (
    <div className="flex items-center space-x-5 max-w-4xl ">
      <WindyProvider theme={theme}>
        <Media
          align={"center"}
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non dapibus massa. Phasellus nec porta sapien. Proin tempus velit
            neque, quis blandit nulla bibendum sit amet. Vestibulum faucibus
            justo ac felis varius, ut pulvinar leo malesuada. Vivamus sed odio
            tempus nulla ullamcorper tempor a at odio. Donec eu diam aliquam,
            pulvinar orci facilisis, vestibulum magna.
          </p>
        </Media>
      </WindyProvider>
    </div>
  );
};

export const AlignedToEnd = () => {
  return (
    <div className="flex items-center space-x-5 max-w-4xl ">
      <WindyProvider theme={theme}>
        <Media
          align={"end"}
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non dapibus massa. Phasellus nec porta sapien. Proin tempus velit
            neque, quis blandit nulla bibendum sit amet. Vestibulum faucibus
            justo ac felis varius, ut pulvinar leo malesuada. Vivamus sed odio
            tempus nulla ullamcorper tempor a at odio. Donec eu diam aliquam,
            pulvinar orci facilisis, vestibulum magna.
          </p>
        </Media>
      </WindyProvider>
    </div>
  );
};

export const Stretched = () => {
  return (
    <div className="flex items-center space-x-5 max-w-4xl ">
      <WindyProvider theme={theme}>
        <Media
          align={"center"}
          sizeToFit
          rounded
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non dapibus massa. Phasellus nec porta sapien. Proin tempus velit
            neque, quis blandit nulla bibendum sit amet. Vestibulum faucibus
            justo ac felis varius, ut pulvinar leo malesuada. Vivamus sed odio
            tempus nulla ullamcorper tempor a at odio. Donec eu diam aliquam,
            pulvinar orci facilisis, vestibulum magna.
          </p>
        </Media>
      </WindyProvider>
    </div>
  );
};

export const MediaOnRight = () => {
  return (
    <div className="flex items-center space-x-5 max-w-4xl ">
      <WindyProvider theme={theme}>
        <Media
          position="end"
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non dapibus massa. Phasellus nec porta sapien. Proin tempus velit
            neque, quis blandit nulla bibendum sit amet. Vestibulum faucibus
            justo ac felis varius, ut pulvinar leo malesuada. Vivamus sed odio
            tempus nulla ullamcorper tempor a at odio. Donec eu diam aliquam,
            pulvinar orci facilisis, vestibulum magna.
          </p>
        </Media>
      </WindyProvider>
    </div>
  );
};

export const Nested = () => {
  return (
    <div className="flex items-center space-x-5 max-w-4xl pb-5">
      <WindyProvider theme={theme}>
        <Media
          src={
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        >
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            non dapibus massa. Phasellus nec porta sapien. Proin tempus velit
            neque, quis blandit nulla bibendum sit amet. Vestibulum faucibus
            justo ac felis varius, ut pulvinar leo malesuada. Vivamus sed odio
            tempus nulla ullamcorper tempor a at odio. Donec eu diam aliquam,
            pulvinar orci facilisis, vestibulum magna.
          </p>
          <Media
            src={
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          >
            <h4 className="text-lg font-bold">Lorem ipsum</h4>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non dapibus massa.
            </p>
          </Media>
          <Media
            src={
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
          >
            <h4 className="text-lg font-bold">Lorem ipsum</h4>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non dapibus massa. Phasellus nec porta sapien. Proin tempus velit
              neque, quis blandit nulla bibendum sit amet.
            </p>
          </Media>
        </Media>
      </WindyProvider>
    </div>
  );
};
