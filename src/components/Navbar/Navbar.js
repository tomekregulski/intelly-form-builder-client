import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';

// import { AuthContext } from '../../context/AuthContext';

import image from '../../images/intelly_logo.png';

// import UserMenu from '../UserMenu/UserMenu';

const Navbar = (props) => {
  // const { user } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  // const [userData, setUserData] = user;
  // const [query, setQuery] = useState({});

  // const { handleLogout } = props;

  // useEffect(() => {
  //   if (Object.keys(userData).length) {
  //     setQuery({
  //       token: userData.token,
  //     });
  //   }
  // }, [userData]);

  return (
    <nav>
      <div className='navLinks'>
        <a href={`https://gallant-wing-415919.netlify.app/?`}>
          <img className='logo' src={image} alt='Intelly' />
        </a>
        {/* <UserMenu handleLogout={handleLogout} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
