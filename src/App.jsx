import React from 'react'
import HeaderContext from './components/HeaderContext/HeaderContext'
import BodyContext from './components/BodyContext/BodyContext'

function App() {
  return (
      <div id="wrapper">
       <HeaderContext />
       <BodyContext>
           <button>Click Here</button>
       </BodyContext>

       <BodyContext>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic!</p>
       </BodyContext>
      </div>
     
    
  )
}

export default App