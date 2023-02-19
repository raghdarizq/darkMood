import React from 'react';
import {  useContext } from "react";
import ThemeContext from "./context/ThemeContext";
const Page2 = () => {
    const { name, changeTheme } = useContext(ThemeContext);

    return (
        <div className={`App ${name}`}>
            <h1>Page2</h1>
        </div>
    );
}

export default Page2;
