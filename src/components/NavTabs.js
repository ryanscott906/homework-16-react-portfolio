import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <Link to='/' className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/projects' className={window.location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>
          Projects
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/contact' className={window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default NavTabs;