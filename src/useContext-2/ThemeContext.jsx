import React, {useState, createContext, useContext} from 'react';

const ThemeContext = createContext();
const ThemeToggleContext = createContext();

//wrap context inside a custom hook, so we can access it within the whole context w/o importing it into each file
export function useTheme() {
  return useContext(ThemeContext);
}

export function useToggleTheme() {
  return useContext(ThemeToggleContext);
}

export function ThemeProvider( {children} ) {
  //State
  const [darkTheme, setDarkTheme] = useState(false);
  
  //Toggle state handler
  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme);
  }
  
  return(
    <ThemeContext.Provider value={darkTheme}>  
      <ThemeToggleContext.Provider value={toggleTheme}>
        { children }
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  )
}