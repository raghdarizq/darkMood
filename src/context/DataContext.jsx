import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const fixed_theme = { Color: "Dark", name: "Raghda N. Abu Rizq" };
const reducer = (Theam, action) => {
  switch (action.type) {
    case "MAKE_LIGHT":
      return { ...Theam, Color: action.NewValue };
    case "MAKE_DARK":
      return { ...Theam, Color: action.NewValue };
    case "MAKE_GREY":
      return { ...Theam, Color: action.NewValue };
    case "MAKE_PINK":
      return { ...Theam, Color: action.NewValue };
    case "MAKE_PINK":
      return { ...Theam, Color: action.NewValue };
    case "TOGGLE_THEAM":
      return { ...Theam, Color: action.NewValue };
    default:
      return Theam;
  }
};

export function ThemeProvider({ children }) {
  const [Theam, dispatch] = useReducer(reducer, fixed_theme);
  const MAKE_LIGHT = () => {
    dispatch({ type: "MAKE_LIGHT", NewValue: "Light" });
  };
  const MAKE_DARK = () => {
    dispatch({ type: "MAKE_DARK", NewValue: "Dark" });
  };
  const MAKE_GREY = () => {
    dispatch({ type: "MAKE_GREY", NewValue: "Grey" });
  };
  const MAKE_PINK = () => {
    dispatch({ type: "MAKE_PINK", NewValue: "pink" });
  };
  const TOGGLE_THEAM = () => {
    dispatch({
      type: "TOGGLE_THEAM",
      NewValue: Theam.Color === "Dark" ? "Light" : "Dark",
    });
  };
  return (
    <ThemeContexttt.Provider
      value={{
        ...Theam,
        MAKE_LIGHT,
        MAKE_DARK,
        MAKE_GREY,
        MAKE_PINK,
        TOGGLE_THEAM,
      }}
    >
      {children}
    </ThemeContexttt.Provider>
  );
}
export default ThemeContexttt;
