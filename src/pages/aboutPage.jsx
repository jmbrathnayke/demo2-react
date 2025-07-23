import HeaderContext from '../components/HeaderContext/HeaderContext'
import BodyContext from '../components/BodyContext/BodyContext'
import '../App.css'
import { useState,useEffect } from 'react';
import React from 'react';

 function AboutPage() {
// Function to handle button click
  //let num1 = 10;


  // Using useState to manage the number of clicks
  // This allows us to update the state and re-render the component when the state changes
const [clicks, setClicks] = useState(0);


  // Using useState to manage state in functional components
  // This allows us to update the state and re-render the component when the state changes
 const [num1, setNum1] = useState(10);

//=========================================================
 // Using useState to manage the count state
 const [count, setCount] = useState(0);

//==========================================================
  // Function to add numbers and update the state
  function addNumbers() {
   // num1 = 11;
   
    alert("added " + (num1 + 1));
    // Update the state using setNum1 to trigger a re-render
    // This is the correct way to update state in a functional component
    setNum1(num1 + 1);
  }

//=========================================================

    //decrement function to decrease the count
    const decrementFunction= () =>{
      setCount(count - 1);
    }

   //increment function to increase the count
    const incrementFunction= () =>{
      setCount(count + 1);
    }
   
    // Effect to update the document title whenever clicks change
    useEffect(() => {
        document.title = `you clicked ${clicks} times`;
        console.log(`You clicked ${clicks} times`);
    }, [count]);

  return (
    <div id="wrapper-1">
    <HeaderContext />
    <BodyContext>
    <h3>About Page Content</h3>
    <p>This is the about page!</p>
    <br />

    <div>
    <p>{num1}</p>
    <button onClick={addNumbers}>Add Number</button>
    </div>
    <br />



  { /* Display the current count value========================= */ }
    <div className='counter'>
      <p>COUNTER</p>
      {/* Button to decrement the count */}
      <button className='btn1' onClick={decrementFunction}>-</button>
      {/* Button to increment the count */}
      <button className='btn2' onClick={incrementFunction}>+</button>
      <p>{count}</p>

    </div>
    <br />

    {/* Display the number of clicks */}
     {/* Display the current value of num2 */}
        <p>you clicked {clicks} times</p>
        <button onClick={() => setClicks(clicks + 1)}>Click Me</button>

    </BodyContext>
    </div>
  )
}
export default AboutPage;