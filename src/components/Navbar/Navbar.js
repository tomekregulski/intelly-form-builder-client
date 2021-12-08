import React from 'react';
import './Navbar.css';

import image from '../../images/intelly_logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className='navLinks'>
        <a href={`https://gallant-wing-415919.netlify.app/?`}>
          <img className='logo' src={image} alt='Intelly' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
