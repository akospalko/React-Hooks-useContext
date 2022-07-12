import React  from "react"
import { useTheme, useToggleTheme } from "./ThemeContext";

export function FunctionContextComponent_2 () {
    const darkTheme = useTheme();
    const toggleTheme = useToggleTheme();

    const themeStyles = {
        backgroundColor: darkTheme ? "#bbb" : "#000",
        color: darkTheme ? "#000" : "#fff",
        padding: "2rem",
        margin: "2rem"
    }
    
    return(
        <>
            <button onClick={toggleTheme}> Toggle </button>
            <div style={themeStyles}> Theme </div>
        </>
    )
}