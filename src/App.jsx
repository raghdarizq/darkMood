import { useContext } from "react";
import "./Theam.css";
import { Link } from "react-router-dom";
import ThemeContexttt from "./context/DataContext";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "MAKE_DARK":
//       return { ...state, Color: action.NewValue };
//     case "MAKE_LIGHT":
//       return { ...state, Color: action.NewValue };
//     case "MAKE_GREY":
//       return { ...state, Color: action.NewValue };
//     case "MAKE_PINK":
//       return { ...state, Color: action.NewValue };
//     case "TOGGLE_THEAM":
//       return { ...state, Color: action.NewValue };
//     case "CHANGE_Name":
//       return { ...state, name: action.NewValue };
//     default:
//       return state;
//   }
// };
function App() {
  const { Color, MAKE_LIGHT, MAKE_DARK, MAKE_GREY, MAKE_PINK, TOGGLE_THEAM } =
    useContext(ThemeContexttt);
  return (
    <div className={`App ${Color}`}>
      <h1>{Color}</h1>
      <Link to="/Page2">pag2</Link>

      <button
        onClick={() => {
          TOGGLE_THEAM();
        }}
      >
        Toggle Theam
      </button>
      <div className={`divbuttons`}>
        <button
          onClick={() => {
            MAKE_LIGHT();
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            MAKE_DARK();
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            MAKE_GREY();
          }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            MAKE_PINK();
          }}
        >
          pink
        </button>
      </div>
    </div>
  );
}

export default App;
