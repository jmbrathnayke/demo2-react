import HeaderContext from '../components/HeaderContext/HeaderContext'
import BodyContext from '../components/BodyContext/BodyContext'
import '../App.css'


 function ContactPage() {
  return (
    <div id="wrapper-1">
    <HeaderContext />
    <BodyContext>
    <h3>Contact Page Content</h3>
    <p>This is the contact page!</p>
    </BodyContext>
    </div>
  )
}
export default ContactPage;