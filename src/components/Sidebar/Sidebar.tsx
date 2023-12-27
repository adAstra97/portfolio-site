import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFolder, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

import './Sidebar.scss';

const Sidebar = () => {
   return (
      <div className='nav-bar'>
         <Link className='logo' to='/'>
            <span>V</span>
         </Link>
         <nav>
            <NavLink className={link => link.isActive ? "active" : ""} to="/">
               <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink className={link => link.isActive ? "about-link active" : "about-link"} to="/about">
               <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink className={link => link.isActive ? "projects-link active" : "projects-link"} to="/projects">
               <FontAwesomeIcon icon={faFolder} color='#4d4d4e' />
            </NavLink>
            <NavLink className={link => link.isActive ? "contact-link active" : "contact-link"} to="/contact">
               <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
         </nav>
         <ul>
            <li>
               <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/veranikaliauchuk/'>
                  <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
               </a>
            </li>
            <li>
               <a target='_blank' rel='noreferrer' href='https://github.com/adAstra97'>
                  <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
               </a>
            </li>
            <li>
               <a target='_blank' rel='noreferrer' href='https://t.me/phantasmagoria666'>
                  <FontAwesomeIcon icon={faTelegram} color='#4d4d4e'/>
               </a>
            </li>
         </ul>
      </div>
   )
};

export default Sidebar;