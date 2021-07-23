export const generateShadow = (shadow = "md") => {
  switch (shadow) {
    case "none":
      return {
        "shadow-none": shadow === "none",
      };

    case "sm":
      return {
        "shadow-sm": shadow === "sm",
      };

    case "md":
      return {
        "shadow-md": shadow === "md",
      };

    case "lg":
      return {
        "shadow-lg": shadow === "lg",
      };

    case "xl":
      return {
        "shadow-xl": shadow === "xl",
      };

    default:
      return {
        "shadow-md": shadow === "md",
      };
  }
};

export const generateRounded = (rounded = "md") => {
  switch (rounded) {
    case "none":
      return {
        "rounded-none": rounded === "none",
      };

    case "md":
      return {
        "rounded-md": rounded === "md",
      };

    case "lg":
      return {
        "rounded-lg": rounded === "lg",
      };

    case "xl":
      return {
        "rounded-xl": rounded === "xl",
      };

    case "full":
      return {
        "rounded-full": rounded === "full",
      };

    default:
      return {
        "rounded-md": rounded === "md",
      };
  }
};

export const generateSize = (size = "md") => {
  switch (size) {
    case "xs":
      return {
        "text-xs font-medium px-2 py-1.5": size === "xs",
      };
    case "sm":
      return {
        "text-sm font-medium px-2.5 py-1.5": size === "sm",
      };
    case "md":
      return {
        "text-base font-medium px-3.5 py-1.5": size === "md",
      };
    case "lg":
      return {
        "text-xl font-medium px-4 py-1.5": size === "lg",
      };
    case "xl":
      return {
        "text-2xl font-medium px-4 py-1.5": size === "xl",
      };
  }
};

export const generateDisabled = (disabled) => {
  if (disabled) {
    return {
      "opacity-50 pointer-events-none": true,
    };
  }
};

export const decorateBgAndText = (color) => {
  switch (color) {
    case "blue":
      return { "text-blue-500 bg-blue-200": color === "blue" };
    case "gray":
      return { "text-gray-700 bg-gray-200": color === "gray" };
    case "red":
      return { "text-red-700 bg-red-200": color === "red" };
    case "yellow":
      return { "text-yellow-700 bg-yellow-200": color === "yellow" };
    case "green":
      return { "text-green-700 bg-green-200": color === "green" };
    case "indigo":
      return { "text-indigo-700 bg-indigo-200": color === "indigo" };
    case "purple":
      return { "text-purple-700 bg-purple-200": color === "purple" };
    case "pink":
      return { "text-pink-700 bg-pink-200": color === "pink" };
    default:
      break;
  }
};
