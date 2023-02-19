import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { name: "dark"  };
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, name: action.newValue };
  }
};
export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeTheme = (color) => {
    dispatch({ type: "CHANGE_THEME", newValue: color });

  }

  return (
     <ThemeContexttt.Provider value={{ ...firstState,changeTheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;