import './MenuLink.css';
import { Link } from 'react-router-dom';

function MenuLink(props) {
  return (
    <>
    {/* Render a link with the provided URL and link name */}
     <Link to={props.url} className="link">{props.linkname}</Link>
     
    </>
  )
}
export default MenuLink