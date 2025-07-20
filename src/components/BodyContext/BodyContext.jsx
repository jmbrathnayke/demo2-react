import React from 'react'
import './BodyContext.css';
 function BodyContext(props) {
  return (
    <>
    <div className='content'>
        <h2>main content</h2>
        
        {props.children}
    </div>
    </>
  )
}

export default BodyContext;