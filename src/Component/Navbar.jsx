import React, { useState } from 'react';
import { FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='nav'>
      <div className='logo'>
        <FaGamepad style={{ fontSize: '48px', color: '#57e2b2' }} />
        <h3>ODD</h3>
      </div>

      <div className={`menulist ${isOpen ? 'open' : ''}`}>
        <ul>
          <Link to={'/'}><li onClick={() => setIsOpen(false)}>Home</li></Link>
          <Link to={'/about'}><li onClick={() => setIsOpen(false)}>About</li></Link>
          <Link to={'/gaming'}><li onClick={() => setIsOpen(false)}>Gaming</li></Link>
          <Link to={'/blog'}><li onClick={() => setIsOpen(false)}>Blog</li></Link>
          <Link to={'/contact'}><li onClick={() => setIsOpen(false)}>Contact</li></Link>
        </ul>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
