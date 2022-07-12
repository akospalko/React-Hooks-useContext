// Children Component: styled element 
import React, { useContext } from 'react'
import { ThemeContext } from './FunctionContextComponent_1'; // We must import the context before using it
import { StylingLogic } from './StylingLogic';

export function StyledElement( { welcome, colorPair }) {
  //Use the imported context: 
  let darkTheme = useContext(ThemeContext); 
    
  //Theme specific styling: 
  let conditionalStyle = StylingLogic(colorPair, darkTheme);

  return (
    <>
      <h1> {welcome} Styled Element </h1>
      <div style={{
            ...conditionalStyle,
            width: "250px", 
            height: "250px", 
            display: "flex", 
            justifyContent: "center",
            alignItems: "center" 
            }}>
            <span style={{alignItems:"center"}}> 
            {darkTheme ? "On" : "Off" }
            </span>
      </div>
    </>
  )
}