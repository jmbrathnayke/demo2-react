import HeaderContext from '../components/HeaderContext/HeaderContext'
import BodyContext from '../components/BodyContext/BodyContext'
import '../App.css'


 function AboutPage() {
  return (
    <div id="wrapper-1">
    <HeaderContext />
    <BodyContext>
    <h3>About Page Content</h3>
    <p>This is the about page!</p>
    </BodyContext>
    </div>
  )
}
export default AboutPage;