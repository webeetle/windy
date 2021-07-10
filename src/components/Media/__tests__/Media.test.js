import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Media, WindyProvider } from "../../../index.js";

//Render
test("<Media/> Should Render src", () => {
  render(
    <WindyProvider>
      <Media>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();
});

test("<Media/> Should Render component", () => {
  render(
    <WindyProvider>
      <Media>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const componentMedia = screen.getByTestId("media-component-1");
  expect(componentMedia).toBeInTheDocument();
});

//Basic complete
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media src="test">
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const mediaImgContainer = screen.getByTestId("media-img-container-1");
  expect(mediaImgContainer).toBeInTheDocument();
  expect(mediaImgContainer).toHaveClass("mr-4 self-start flex-shrink-0");
});

//Rounded
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media src="test" rounded>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const mediaImgContainer = screen.getByTestId("media-img-container-1");
  expect(mediaImgContainer).toBeInTheDocument();

  const mediaImg = screen.getByTestId("media-img-1");
  expect(mediaImg).toBeInTheDocument();

  expect(mediaImg).toHaveClass("rounded-full");
});

//Align to center
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media src="test" align="center">
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const mediaImgContainer = screen.getByTestId("media-img-container-1");
  expect(mediaImgContainer).toBeInTheDocument();

  expect(mediaImgContainer).toHaveClass("self-center");
});

//Align to end
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media src="test" align="end">
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const mediaImgContainer = screen.getByTestId("media-img-container-1");
  expect(mediaImgContainer).toBeInTheDocument();

  expect(mediaImgContainer).toHaveClass("self-end");
});

//Stretched
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media src="test" sizeToFit>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");
  expect(component).toBeInTheDocument();

  const mediaImgContainer = screen.getByTestId("media-img-container-1");
  expect(mediaImgContainer).toBeInTheDocument();

  expect(mediaImgContainer).toHaveClass("mr-4 self-stretch flex-shrink-0");
});

//Media on right
test("<Media/> Should Render ", () => {
  render(
    <WindyProvider>
      <Media src="test" position="end">
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );
  const component = screen.getByTestId("media-1");

  expect(component).toHaveClass("flex pt-5 flex-row-reverse");
});

test("<Media /> Size", () => {

  render(
    <WindyProvider>
      <Media src="test" size={"xs"}>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );

  const sizeXS = screen.getByTestId("media-img-1");
  expect(sizeXS).toHaveClass("h-12 w-12 rounded inline-block");

  cleanup()

  render(
    <WindyProvider>
      <Media src="test" size={"sm"}>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );

  const sizeSM = screen.getByTestId("media-img-1");
  expect(sizeSM).toHaveClass("h-16 w-16 rounded inline-block");

  cleanup()

  render(
    <WindyProvider>
      <Media src="test" size={"md"}>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );


  const sizeMD = screen.getByTestId("media-img-1");
  expect(sizeMD).toHaveClass("h-24 w-24 rounded inline-block");

  cleanup()

  render(
    <WindyProvider>
      <Media src="test" size={"lg"}>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );

  const sizeLG = screen.getByTestId("media-img-1");
  expect(sizeLG).toHaveClass("h-32 w-32 rounded inline-block");

  cleanup()

  render(
    <WindyProvider>
      <Media src="test" size={"xl"}>
        <h4 className="text-lg font-bold">Lorem ipsum</h4>
        <p className="mt-1">
          Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
          expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
        </p>
      </Media>
    </WindyProvider>
  );

  const sizeXL = screen.getByTestId("media-img-1");
  expect(sizeXL).toHaveClass("h-40 w-40 rounded inline-block");

})
