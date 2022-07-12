// Children Component 1:
import React from 'react'
import { Component2 } from './Component2'

export function Component1( { welcome } ) {
    return(
        <>
            <h1> {welcome} Component 1 </h1>
            <Component2 welcome={welcome}> </Component2>
        </>
    ) 
}