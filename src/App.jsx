import React from 'react'
import HeaderContext from './components/HeaderContext/HeaderContext'
import BodyContext from './components/BodyContext/BodyContext'
import './App.css'
import styled from 'styled-components'

//styled components css apply type
const Title = styled.h3`
color: brown;
font-size : 20px;
`;


function App() {

  //inline css>> variable call
const styles ={
  color: 'yellow',
  marginBottom: '2em',
  fontSize: '2rem',
  backgorundColor:'red'
}

  // Function to handle button click
  function handleClick1(e) {
    console.log('Button clicked 1!', e);
  }
// Arrow  function to handle a different button click
  const handleClick2 =() => {
    console.log('Button clicked 2!');
  }
  // Function with parameter to handle a third button click
   function handleClick3(newbutton,z) {
    console.log('Button clicked 3!' + newbutton,z);
  }
//arrow function with parameter to handle a fourth button click 
  const handleClick4 =(new2button) => {
    console.log('Button clicked 4!' + new2button);

  }
  return (
      <div id="wrapper">
       <HeaderContext /> 
       <BodyContext>
          
           <button onClick={handleClick1}>Click Here 1</button>
            <button onClick={handleClick2}>Click Here 2</button>
            {/* anonymous function for  handleClick3 */}
             <button onClick={(z) => handleClick3("btn3",z)}>Click Here 3</button>
              <button onClick={() => handleClick4("btn4")}>Click Here 4</button>
       </BodyContext>

        {/* for  external css */}
       <div className="body-content-1">
        <p>(external css)Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic!</p>
       </div>

        {/*inline css type(1)*/}
        <div className="body-content-2">
        <p style={{ color:'blue', marginBottom: '2em' ,fontSize:'2rem' }}>(internal css) Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic!</p>
      </div>
  {/*inline css type(2) variable called*/}
      <div className="body-content-3">
        <p style={styles}>(internal css) Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, hic!</p>
      </div>


     {/*inline css type(3) styled components*/}
      <Title>
        hello styled!!
      </Title>
      

       </div>
  )
}


export default App