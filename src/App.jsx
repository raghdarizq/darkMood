import "./App.css";
import "./theme.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { name, changeTheme } = useContext(ThemeContext);
  return (
    <div className={`App ${name}`}>
      <Link to={`/Page2`}>Page2</Link>
      <button
        style={{ marginBottom: "44px" }}
        onClick={() => {
          changeTheme(name === "light" ? "dark" : "light");
        }}
      >
        Toggle Theme
      </button>
      <div>
        <button
          onClick={() => {
            changeTheme("light");
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            changeTheme("dark");
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            changeTheme("grey");
          }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            changeTheme("pink");
          }}
        >
          Pink
        </button>
      </div>
      <h2 style={{ marginTop: "66px" }}>My name is : Raghda N Abu Rizq</h2>
      <h2>My Age is :20 </h2>
    </div>
  );
}

export default App;
