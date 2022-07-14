import React from 'react'
import { useToggledContext } from './Context'

export function Component() {
    const {toggled, toggleHandler} = useToggledContext();

    const themeStyle = {
    margin: "3rem",
    padding: "3rem",
    textAlign: "center",
    backgroundColor: toggled ? "#555" : "#fff",
    color: toggled ? "#fff" : "#555"
}

    return (
        <>
            <button onClick={toggleHandler}>  Toggle </button>
            <div style={themeStyle}> 
                {toggled ? <span>black </span> : <span> white </span>} theme
            </div>
        </>
    )
}