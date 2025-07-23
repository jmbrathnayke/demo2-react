import HeaderContext from '../components/HeaderContext/HeaderContext'
import BodyContext from '../components/BodyContext/BodyContext'
import '../App.css'
import { useState,useEffect, use } from 'react';

function ContentPage() {
    //let myNumber = 10;
const [num2, setNum2] = useState(12);
const [posts, setPosts] = useState([]);


/*if (myNumber == 5) {
     alert("equal to 5");
}else{
    alert("not equal to 5");
}
*/


// Function to handle button click
function add(){
      //alert("added " + (num2 + 1));
    setNum2(num2 + 1);
}

// Using useState to manage the count state
useEffect(() => {
    console.log("Component mounted");
}, [num2]);

// Effect to fetch data from an API when the component mounts
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(response => response.json())
        .then(blogSpots => setPosts(blogSpots));

        console.log("Data fetched from API");
}, []);




  return (
    <div id="wrapper-1">
    <HeaderContext/>
        <BodyContext>
        <h3>Content Page</h3>
        <p>This is the content page!</p>
        <br />
        
        {/* Display the current value of num2 */}
        <p>{num2}</p>
        <button onClick={add}>click</button>
        <br />
   



        <ul className="prod_list" style={{color: "black","paddingLeft": "20px"}}>
        {/* Map through the posts and display them */}
        {posts && posts.map((post) => <li key={post.id} 
        style={{listStyleType:"circle"}}>{post.title}</li>)}
        </ul>

        
        </BodyContext>

    </div>
)}
export default ContentPage;