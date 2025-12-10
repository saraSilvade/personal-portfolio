import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/Logo Shapes 20.svg'

import {FaBars, FaTimes} from 'react-icons/fa';


const Header: React.FC = () =>{

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu =() =>{
    setMenuOpen(!menuOpen);
};


    
    return(
        <div className='header'>
            <Link to="/">
            <img className='logo' src={logo} alt="logo"/>
            </Link>
           {/* Here goes the hamburger menu*/}
           <div className="hamburger" onClick={toggleMenu}>
{menuOpen ? <FaTimes size={30}/>: <FaBars size={30}/>}
           </div>


<nav className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
          
          <ul> <li><Link className='nav-link' to="/"  onClick={toggleMenu}>Home</Link></li>
          <li><Link className='nav-link' to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link className='nav-link' to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link className='nav-link' to="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link className='nav-link' to="https://drive.google.com/file/d/1-lMb0ZNPdNdF5t99ki-W6Yzoj6mxRPcS/view?usp=sharing">Resume</Link></li>
          </ul>


      
            </nav>

           

        </div>
    )

}


export default Header;