import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"


const Navigation = () => {
  return (
    <nav className="bg-transparent  top-0 w-full font-libre">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" className="  h-20" />
        </div>
        <div className="flex space-x-4 cursor-pointer  text-sm pr-20 ">
          {/* Navigation links with animated scrolling */}
          <div className='mr-5'>
          <Link to="/" smooth={true} duration={500} className="nav-link ">Home</Link>
          </div>
          
          <div className='pr-5'>
            
          <Link to="/about" smooth={true} duration={500} className="nav-link ">About</Link>
          </div>
         
          <div className='pr-5'>
          <Link to="/elab" smooth={true} duration={500} className="nav-link ">Elab</Link>
          </div>
          
          <div>
          <Link to="" smooth={true} duration={500} className="nav-link ">Contact us</Link>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
