// Children Component 2:
import { Component3 } from './Component3'
import { StyledElement } from './StyledElement';

export function Component2({ welcome }) {
    return(
        <>
            <h1> {welcome} Component 2 </h1>
            <Component3 welcome={welcome}> {welcome} Component 3 </Component3>
            <StyledElement colorPair={"blackWhite"}/>
        </>
    ) 
}