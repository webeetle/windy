import React from "react";

import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import { useWindyTheme } from "../../context.jsx";

const Media = (mediaProps) => {
  const {
    state: { media: defMedia = {} },
  } = useWindyTheme();

  const {
    className = "",
    media = null,
    src = null,
    align = defMedia.align,
    rounded = false,
    size = defMedia.size,
    sizeToFit = false,
    position = defMedia.position,
    responsive = defMedia.responsive,
    ...props
  } = mediaProps;

  const getImageSize = (size = "sm", sizeToFit = false) => {
    switch (size) {
      case "xs":
        return !sizeToFit ? "h-12 w-12" : "h-full w-12";
      case "sm":
        return !sizeToFit ? "h-16 w-16" : "h-full w-16";
      case "md":
        return !sizeToFit ? "h-24 w-24" : "h-full w-24";
      case "lg":
        return !sizeToFit ? "h-32 w-32" : "h-full w-32";
      case "xl":
        return !sizeToFit ? "h-40 w-40" : "h-full w-40";
    }
  };

  return (
    <div
      data-testid="media-1"
      {...props}
      className={overrideTailwindClasses(
        classnames(
          { "md:flex pb-5 md:pb-0 md:pt-5": responsive },
          { "flex pt-5": !responsive },
          position === "end" ? "flex-row-reverse" : "",
          className
        )
      )}
    >
      <div
        data-testid="media-img-container-1"
        className={overrideTailwindClasses(
          classnames(
            position === "start" ? "mr-4" : "ml-4",
            `self-${align}`,
            sizeToFit ? "self-stretch" : "",
            "flex-shrink-0"
          )
        )}
      >
        {src ? (
          <img
            data-testid="media-img-1"
            className={overrideTailwindClasses(
              classnames(
                getImageSize(size, sizeToFit),
                rounded && !sizeToFit ? "rounded-full" : "rounded",
                sizeToFit ? "object-cover" : "",
                "inline-block"
              )
            )}
            src={src}
            alt="media-image"
          />
        ) : (
          <div data-testid="media-component-1">{media}</div>
        )}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

Media.propTypes = {
  className: PropTypes.string,
  media: PropTypes.any,
  align: PropTypes.oneOf(["center", "start", "end"]),
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  sizeToFit: PropTypes.bool,
  position: PropTypes.oneOf(["start", "end"]),
  children: PropTypes.any,
};

export default Media;
