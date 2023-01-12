import { useState } from "react";
import "./App.css";
import "./Theam.css";

function App() {
  const [change, setChange] = useState("peraon");
  const [Theme, setTheme] = useState("");

  const changeName = () => {
    setChange("Raghda N. Abu Rizq");
  };
  return (
    <div className={`App ${Theme}`}>
      <button
        onClick={() => {
          setTheme(Theme == "" ? "Dark" : "");
        }}
      >
        Toggle Theam
      </button>
      <div
        className="btn-container"
        onChange={() => {
          setTheme(Theme == "" ? "Dark" : "");
        }}
      >
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
            setTheme("");
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            setTheme("Dark");
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            setTheme("Grey");
          }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            setTheme("pink");
          }}
        >
          pink
        </button>
      </div>
      <h1>The Name is {change}</h1>
      <button onClick={changeName}>changeName</button>
      <h1>{Theme}</h1>
    </div>
  );
}

export default App;
