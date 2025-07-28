import React from 'react'
import Comp3 from './comp3'

function Comp2() {
  return (
    <>
    <div>
        <h2>Child 1 component</h2>
        {        /* Display the username passed from the parent component */}
        
    </div>
    <Comp3 />
    {/* <Comp3 user ={props.user} /> */}
    </>
  )
}

export default Comp2