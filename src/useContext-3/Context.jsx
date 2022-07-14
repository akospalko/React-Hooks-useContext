import React, {useState, createContext, useContext} from 'react'

//Using a single context
const ToggledContext = createContext();

//Create context
export function useToggledContext() {
    return useContext(ToggledContext);
}

export function ThemeContext({ children }) {
    const [toggled, setToggled] = useState(false);

    function toggleHandler() {
        setToggled(prevToggledValue => !prevToggledValue);
    }

    return(
        <ToggledContext.Provider value={{toggled, toggleHandler}} >   
            { children }
        </ToggledContext.Provider>
    )
} 

