import React from 'react';
import {Link} from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import logo from '../images/Logo Shapes 20.svg'
const Footer: React.FC = () =>{
    return(
        <div className='footer'>

           <div >
           <nav className='footer-logo'>
           <Link to="/">
            <img className='logo' src={logo} alt="logo"/>
            </Link>
           <div className='footer-nav'>
          <ul> <li><Link className='nav-link' to="/">Home</Link></li>
          <li><Link className='nav-link' to="/projects">Projects</Link></li>
          <li><Link className='nav-link' to="/about">About</Link></li>
          <li><Link className='nav-link' to="/contact">Contact</Link></li>
          <li><Link className='nav-link' to="https://drive.google.com/file/d/1X6D1blotjslgvN5euvhnxof2_qhaDgeK/view?usp=sharing">Resume</Link></li>
          </ul>
          
           </div>
       
            </nav>
           </div>

           <ul className='contact-links'>
           <li> <a href="https://www.linkedin.com/in/sara-leepark-5ba013263/" target="_blank" rel="noopener noreferrer" title="linked in profile">
            <FaLinkedin size={30} />
        </a></li>
        <li> <a href="https://github.com/leeparksara" target="_blank" rel="noopener noreferrer" title="Github profile"><FaGithubAlt size={30} />  </a>     </li>
</ul>
         
        </div>
    )
}


export default Footer;