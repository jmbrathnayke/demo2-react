import React from 'react'
import { useContext } from 'react'
import { UserApp } from './comp1' // Import the context created in comp1.jsx

function Comp4() {
// Use the context to access the username
const user = useContext(UserApp);

  return (
    <div>
        <h2>Child 3 component</h2>
        <p>welocme {user}</p>
    </div>
  )
}

export default Comp4