import * as React from "react";

const WindyContext = React.createContext();

const windyTheme = {
  badge: {
    color: "gray",
    rounded: "full",
    size: "sm",
    shadow: "sm",
    pointer: false,
  },
  button: {
    layout: "contained",
    color: "indigo",
    size: "md",
    shadow: "md",
    gradient: true,
    rounded: "md",
  },
  dropdown: {
    size: "md",
    color: "indigo",
    layout: "contained",
    shadow: "md",
    rounded: "md",
    caret: true,
    gradient: true,
  },
  checkbox: {
    color: "indigo",
    shadow: true,
    rounded: true,
    gradient: true,
  },
  input: {
    fullWidth: false,
    color: "gray",
    shadow: "md",
    rounded: "md",
    size: "md",
  },
  radio: {
    color: "indigo",
    shadow: true,
    gradient: true,
  },

  select: {
    color: "gray",
    rounded: "md",
    shadow: "md",
  },
  modal: {
    showCloseButton: true,
    color: "white",
    size: "md",
    rounded: "md",
    overlayGradient: false,
  },
  panel: { layout: "default" },
  media: {
    responsive: true,
    position: "start",
    size: "sm",
    align: "start",
  },
  loader: { color: "indigo", type: "circle" },
  avatar: {
    size: "md",
    rounded: "full",
    color: "gray",
    stroke: "md",
    shadow: "none",
    layout: "image",
  },
  carousel: {},
  skeleton: { color: "gray" },
  table: { color: "indigo" },
  tooltip: { color: "indigo" },
  tabs: { color: "indigo", rounded: "md", shadow: "md" },
  accordion: { color: "indigo", rounded: "md", shadow: "md" },
  toggle: { color: "indigo" },
  drawer: { color: "white" },
};

function WindyReducer(state, action) {
  switch (action.type) {
    case "mutate": {
      if (!action.component) {
        throw new Error('action "mutate" required "component" attr');
      }
      return {
        ...state,
        [action.component]: { ...state[action.component], ...action.value },
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function WindyProvider({ theme = {}, children }) {
  const elTheme = {
    ...windyTheme,
    badge: { ...windyTheme.badge, ...theme.badge },
    button: { ...windyTheme.button, ...theme.button },
    dropdown: { ...windyTheme.dropdown, ...theme.dropdown },
    checkbox: { ...windyTheme.checkbox, ...theme.checkbox },
    input: { ...windyTheme.input, ...theme.input },
    radio: { ...windyTheme.radio, ...theme.radio },
    select: { ...windyTheme.select, ...theme.select },
    modal: { ...windyTheme.modal, ...theme.modal },
    panel: { ...windyTheme.panel, ...theme.panel },
    media: { ...windyTheme.media, ...theme.media },
    loader: { ...windyTheme.loader, ...theme.loader },
    avatar: { ...windyTheme.avatar, ...theme.avatar },
    carousel: { ...windyTheme.carousel, ...theme.carousel },
    skeleton: { ...windyTheme.skeleton, ...theme.skeleton },
    table: { ...windyTheme.table, ...theme.table },
    tooltip: { ...windyTheme.tooltip, ...theme.tooltip },
    tabs: { ...windyTheme.tabs, ...theme.tabs },
    accordion: { ...windyTheme.accordion, ...theme.accordion },
    toggle: { ...windyTheme.toggle, ...theme.toggle },
    drawer: { ...windyTheme.drawer, ...theme.drawer },
  };

  // create a ref to know if this component is mounted
  const mounted = React.useRef(false);
  // set ref - true when mount, false on cleanup
  React.useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  // unsafeDispatch can be called also this component is onmounted
  const [state, unsafeDispatch] = React.useReducer(WindyReducer, elTheme);

  // useCallback to optimize unsafeDispatch and don't call it on onmount
  const dispatch = React.useCallback((...props) => {
    if (mounted.current) {
      unsafeDispatch(...props);
    }
  }, []);

  const value = { state, dispatch };
  return (
    <WindyContext.Provider value={value}>{children}</WindyContext.Provider>
  );
}

function useWindyTheme() {
  const context = React.useContext(WindyContext);
  if (context === undefined) {
    throw new Error("useWindyTheme must be used within a WindyProvider");
  }
  return context;
}

export { WindyProvider, useWindyTheme, windyTheme };
