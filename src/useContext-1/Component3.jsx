// Children Component 3:
import React, { useContext } from 'react'
import { StyledElement } from './StyledElement'


export function Component3( { welcome }) {
  return (
    <>
      <h1> {welcome} Component 3</h1>
      <StyledElement colorPair={"greenYellow"}/>
    </>
  )
}