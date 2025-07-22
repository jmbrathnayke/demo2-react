import HeaderContext from '../components/HeaderContext/HeaderContext'
import BodyContext from '../components/BodyContext/BodyContext'
import '../App.css'


 function loginPage() {
  return (
    <div id="wrapper-1">
        {/* This is the login page */}
    <HeaderContext />

    {/* The BodyContext component is used to wrap the main content of the page */}
    <BodyContext>
    <h3>Login Page Content</h3>
    <p>This is the login page!</p>
    </BodyContext>
    </div>
  )
}
export default loginPage;