import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (


  <footer className='w-full text-right font-bold hidden md:contents'>
    <Link to="/" className='pr-5 fixed bottom-0 w-full animate-bounce'>CassDoes</Link>
  </footer>

  );
}

export default Footer;