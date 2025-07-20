import MenuLink from '../MenuLink/MenuLink';
import './HeaderContext.css';
import logo from '../../assets/react.svg';

 function HeaderContext() {
  return (
    <div id='navcontent'>
    <a href="http://www.react.dev">
    <img src={logo} alt='React Logo' />
    <img src="vite.svg" alt="react" />
     </a>
<div>
    
    <MenuLink linkname="Home" url="#home" />
    <MenuLink linkname="About" url="#about" />
    <MenuLink linkname="Contact" url="#contact" />
    <MenuLink linkname="Login" url="#login" />
     
       
</div>
    </div>
  )
}

export default HeaderContext;