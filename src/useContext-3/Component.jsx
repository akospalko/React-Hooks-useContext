import React from 'react'
import {useToggledContext, useToggleHandlerContext} from './Context'

export function Component() {
    const toggledTheme = useToggledContext();
    const toggleHandler = useToggleHandlerContext();

    const themeStyle = {
    margin: "3rem",
    padding: "3rem",
    textAlign: "center",
    backgroundColor: toggledTheme ? "#555" : "#fff",
    color: toggledTheme ? "#fff" : "#555"
}

    return (
        <>
            <button onClick={toggleHandler}>  Toggle </button>
            <div style={themeStyle}> 
                {toggledTheme ? <span>black </span> : <span> white </span>} theme
            </div>
        </>
    )
}