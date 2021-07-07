import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Media, WindyProvider } from "../../../index.js";

//Render
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();
});

//Basic complete
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const mediaImgContainer = screen.getByTestId("media-img-container-1")
  expect(mediaImgContainer).toBeInTheDocument()
  expect(mediaImgContainer).toHaveClass("mr-4 self-start flex-shrink-0")
});

//Rounded
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media rounded>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const mediaImgContainer = screen.getByTestId("media-img-container-1")
  expect(mediaImgContainer).toBeInTheDocument()

  const mediaImg = screen.getByTestId("media-img-1")
  expect(mediaImg).toBeInTheDocument()

  expect(mediaImg).toHaveClass("rounded-full")
});

//Align to center
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media align="center">
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const mediaImgContainer = screen.getByTestId("media-img-container-1")
  expect(mediaImgContainer).toBeInTheDocument()

  expect(mediaImgContainer).toHaveClass("self-center")
});

//Align to end
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media align="end">
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const mediaImgContainer = screen.getByTestId("media-img-container-1")
  expect(mediaImgContainer).toBeInTheDocument()

  expect(mediaImgContainer).toHaveClass("self-end")
});

//Stretched
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media sizeToFit>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const mediaImgContainer = screen.getByTestId("media-img-container-1")
  expect(mediaImgContainer).toBeInTheDocument()

  expect(mediaImgContainer).toHaveClass("mr-4 self-stretch flex-shrink-0")
});

//Media on right
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media position="end">
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
          quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");

  expect(component).toHaveClass("flex pt-5 flex-row-reverse")
});

