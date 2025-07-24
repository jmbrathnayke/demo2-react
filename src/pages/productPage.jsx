import React, { use, useEffect, useRef, useState } from 'react'
import HeaderContext from '../components/HeaderContext/HeaderContext'

function ProductPage() {
    const [input, setInput] = useState("<input text goes here>");
    const [count, setCount] = useState(0);

    const countref =  useRef(0);

    const inputref = useRef();
    const inputref1 = useRef();

    const inputref2 = useRef();
 

    // useRef is used to persist values across renders without causing re-renders
    useEffect(() => {
        //setcount((count)) => count +1;
        countref.current = countref.current + 1;
       // console.log(inputref.current)
       // console.log(inputref1.current)

       inputref.current.style.backgroundColor = "blue";
       inputref.current.style.color = "white";
       inputref1.current.style.backgroundColor = "yellow";
       inputref1.current.style.color = "black";
    })

    //this function handles the change event of the input field
    // It updates the state with the input value and increments the count
    const handleChange = (e) => {
        if (e.target.value.length === 0) {
            setInput("<input text goes here>");
        } else {
            setInput(e.target.value);
            //setCount(count + 1)
            //console.log(`Input changed to: ${e.target.value}`);
            //console.log(`Count is now: ${count + 1}`);
        }
    }

    //==================================================================================
    // This function validates the input from inputref2
    const handleClick = () => {
            // If the input is empty, it focuses on the input and alerts the user
        if(inputref2.current.value =="") {
            inputref2.current.focus();
            alert("Please enter a value", inputref2.current.value);
            console.log("Please enter a value", inputref2.current.value);
        }
        // If the input is higher than to 50, it alerts success and logs the value
        else if(inputref2.current.value > 50) {
            alert("sucess");
            console.log("sucess", inputref2.current.value);
            //if the input is less than  50, it alerts error and logs the value
        }else{
            alert("error");
            console.log("error", inputref2.current.value);
        }
    }

    return (
        <>
            <HeaderContext />
            <div style={{ padding: '20px' }}>
                <h2>Product Page</h2>

              {/* This input is controlled by the state and will update the input value */} 
           <input   type="text"   style={{ margin: '1em 0', marginLeft: '1em', padding: '8px' }} ref={inputref1} onChange={handleChange} placeholder="Type something..."  />
                <p style={{ marginLeft: '1em' }}>You have input: {input}</p>
                <p style={{ marginLeft: '1em' }}>Rendered:{countref.current}</p>

                {/* This input is uncontrolled and will not update the state */}
             <input type="text" ref={inputref} style={{ margin: '1em 0', marginLeft: '1em', padding: '8px' }} /> <br />
  

            {/* This input is for validation */}
            <input type="text" style={{ margin: '1em 0', marginLeft: '1em', padding: '8px' }} ref={inputref2} />
            <button onClick={handleClick} style={{ margin: '1em 0', marginLeft: '1em', padding: '6px', border: '1px solid black' }} >validate</button>


            </div>
        </>
    )
}

export default ProductPage