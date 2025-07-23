import HeaderContext from '../components/HeaderContext/HeaderContext'
import LoggedIn from '../components/LoggedIn';
import LoggedOut from '../components/LoggedOut';
import BodyContext from '../components/BodyContext/BodyContext'
import '../App.css'


 function loginPage() {
  //boolean variable
   const loggedin = true;

    // Example of using an array and its length
   const names = ['manj', 'guyj'];
   const namescount = names.length;

  return (
    <>
    <HeaderContext />
    <h3 style={{ color: 'blue' }}>Login Page Content</h3>

    {/* Conditional rendering based on the loggedin variable */}
    {loggedin && <LoggedIn />}
    {!loggedin && <LoggedOut />}


    {/* Display the names array */}
    {namescount > 0 && names.map((name) => {
      return <h2>{name}</h2>
    })}

    {/* Display the count of names */}
    {namescount === 0 && <h2>No names found</h2>}
    </>
  )
}
export default loginPage;
    
  