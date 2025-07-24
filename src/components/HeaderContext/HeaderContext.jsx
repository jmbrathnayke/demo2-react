import MenuLink from '../MenuLink/MenuLink';
import './HeaderContext.css';
import logo from '../../assets/react.svg';

 function HeaderContext() {
  return (
    <div id='navcontent'>
    <a href="http://www.react.dev">
    <img src={logo} alt='React Logo' />
    
     </a>
<div>
    {/* Render the MenuLink components for navigation */}
    <MenuLink linkname="Home" url="/" />
    <MenuLink linkname="About" url="/about" />
    <MenuLink linkname="Contact" url="/contact" />
    <MenuLink linkname="Login" url="/login" />
    <MenuLink linkname="Content" url="/content" />
    <MenuLink linkname="Product" url="/product" />
    <MenuLink linkname="Map" url="/map" />

</div>
    </div>
  )
}

export default HeaderContext;