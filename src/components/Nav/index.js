import React from 'react';

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>ABOUT<span className='overlay'></span></li>
          <li>PORTFOLIO<span className='overlay'></span></li>
          <li>RESUME<span className='overlay'></span></li>
          <li>CONTACT<span className='overlay'></span></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;