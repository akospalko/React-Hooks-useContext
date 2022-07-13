import React, { createContext, useState } from 'react'
import { FunctionContextComponent_1 } from './useContext-1/FunctionContextComponent_1'
import { FunctionContextComponent_2 } from './useContext-2/FunctionContextComponent_2'
import { ThemeProvider } from './useContext-2/ThemeContext'
//3
import { ThemeContext } from './useContext-3/Context'
import { Component } from './useContext-3/Component'
function App() {
const [welcome, setWelcome] = useState("Hello");

  return (
    <div>
      {/*<span> useContext with a functional component: </span>
       <FunctionContextComponent_1 welcome={welcome}/> */}

      {/* <h1> using context with a functional component 2: </h1>
      <ThemeProvider>
        <FunctionContextComponent_2/>
      </ThemeProvider> */}

      <h1> using context with a functional component 3: </h1>
      <ThemeContext>
        <Component/>
      </ThemeContext>
    </div>
  )
}

export default App

