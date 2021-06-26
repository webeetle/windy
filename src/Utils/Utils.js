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
