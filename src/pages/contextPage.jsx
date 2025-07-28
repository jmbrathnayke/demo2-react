import React from 'react'
import HeaderContext from '../components/HeaderContext/HeaderContext'
import Comp1 from '../components/comp1'

function ContextPage() {
  return (
    <>
      <HeaderContext />
      <div style={{ padding: '20px' }}>
        <h3>Context Page Content</h3>
       
      </div>
       <Comp1 />
    </>
  )
}

export default ContextPage