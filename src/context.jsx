import * as React from "react";

const WindyContext = React.createContext();

const windyTheme = {
  button: {
    layout: "contained",
    color: "indigo",
    size: "md",
    shadow: "md",
    light: true,
    dark: false,
    gradient: true,
    rounded: "md",
  },
};

function WindyReducer(state, action) {
  switch (action.type) {
    case "changeButton": {
      return { ...state, button: { ...state.button, ...action.value } };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function WindyProvider({ theme = null, children }) {
  const elTheme = {
    button: { ...windyTheme.button, ...theme.button },
  };
  const [state, dispatch] = React.useReducer(WindyReducer, elTheme);
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
