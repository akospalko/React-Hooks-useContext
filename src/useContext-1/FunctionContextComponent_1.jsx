// Parent Component:
import React, { useState, createContext } from 'react'
import { Component1 } from './Component1'

//create & initialize context, export it 
export const ThemeContext = createContext();

export function FunctionContextComponent_1( { welcome } ) {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleHandler = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
        console.log(darkTheme);
      }

    return(
        <>
            <h1> {welcome} Parent Component </h1>
            <button 
                onClick={toggleHandler}
            > 
                Toggle Theme
            </button>
            <ThemeContext.Provider value={darkTheme}> 
                <Component1 welcome={welcome}/>
            </ThemeContext.Provider>
        </>
    ) 
}