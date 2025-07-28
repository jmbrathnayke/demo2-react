import React from 'react'
import Comp4 from './comp4'

function Comp3() {
  return (
    <>
    <div>
        <h2>Child 2 component</h2>
       
    </div>

      <Comp4  />
      
    {/* Pass the user prop to Comp4 */}
    {/* <Comp4 user={props.user} /> */}
  
    </>
  )
}

export default Comp3