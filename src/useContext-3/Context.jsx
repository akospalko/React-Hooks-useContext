//create context, 
//create an exported function for use context
//create state + click handler1  
//create context provider pass state + click handler to their respective context

import React, {useState, createContext, useContext} from 'react'

const ToggledContext = createContext();
const ToggleHandlerContext = createContext();

export function useToggledContext() {
    return useContext(ToggledContext);
}

export function useToggleHandlerContext() {
    return useContext(ToggleHandlerContext);
}

export function ThemeContext({ children }) {
    const [toggled, setToggled] = useState(false);

    function toggleHandler() {
        setToggled(prevToggledValue => !prevToggledValue);
    }

    return(
        <ToggledContext.Provider value={toggled} >
            <ToggleHandlerContext.Provider value={toggleHandler}>
                { children }
            </ToggleHandlerContext.Provider>
        </ToggledContext.Provider>
    )
} 

