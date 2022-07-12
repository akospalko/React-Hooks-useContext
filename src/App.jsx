import React, { useState } from 'react'
import { FunctionContextComponent_1 } from './useContext-1/FunctionContextComponent_1'

function App() {
const [welcome, setWelcome] = useState("Hello");

  return (
    <div>
      <pre> using context with a functional component: </pre>
      <FunctionContextComponent_1 welcome={welcome}/>
    </div>
  )
}

export default App

