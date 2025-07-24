import HeaderContext from '../components/HeaderContext/HeaderContext'
import BodyContext from '../components/BodyContext/BodyContext'
import '../App.css'


 function ContactPage() {
  // Example of using rest parameters in a function
  // Rest parameters allow you to accept an indefinite number of arguments as an array
  function sum (...sumnumbers) {
    let total = 0;
    sumnumbers.forEach((sumnumber) => {
      total += sumnumber;
    });
    return total;
  }

// Example of using rest parameters in a function with multiple parameters
  function mybio(name,age,...rest){
    console.log(name,age,rest);

  }
  mybio("John", 30, "Engineer", "Loves coding");

  console.log(sum(5, 10,2,3,4,5,))
   console.log(sum(5, 10,2,3,4,5,5))
   
   let arr = [5, 10, 2, 3, 4, 5, 6];
   console.log(Math.max(...arr))
   console.log(Math.min(...arr))

  return (
     <>
    <HeaderContext />
    <h3>Contact Page Content</h3>
    
</>    
  )
}
export default ContactPage;