import { useReducer } from "react";
import "./App.css";
import "./Theam.css";
const Ftheam = { Color: "Light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "MAKE_DARK":
      return { ...state, Color: action.NewValue };
    case "MAKE_LIGHT":
      return { ...state, Color: action.NewValue };
    case "MAKE_GREY":
      return { ...state, Color: action.NewValue };
    case "MAKE_PINK":
      return { ...state, Color: action.NewValue };
    case "TOGGLE_THEAM":
      return { ...state, Color: action.NewValue };
    default:
      return state;
  }
};
function App() {
  const [Theam, dispatch] = useReducer(reducer, Ftheam);
  return (
    <div className={`App ${Theam.Color}`}>
      <button
        onClick={() => {
          dispatch({
            type: "TOGGLE_THEAM",
            NewValue: Theam.Color ==="Dark"? "Light" : "Dark",
          });
        }}
      >
        Toggle Theam
      </button>
      <div className="btn-container">
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
      </div>
      <div className={`divbuttons`}>
        <button
          onClick={() => {
            dispatch({ type: "MAKE_LIGHT", NewValue: "Light" });
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            dispatch({ type: "MAKE_DARK", NewValue: "Dark" });
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            dispatch({ type: "MAKE_GREY", NewValue: "Grey" });
          }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            dispatch({ type: "MAKE_PINK", NewValue: "pink" });
          }}
        >
          pink
        </button>
      </div>
      <h1>The Name :Raghda N. Abu Rizq </h1>
      <h1>The Age : 20</h1>
    </div>
  );
}

export default App;
