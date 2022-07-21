import React from "react";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Navigation = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center px-1 py-3 md:fixed md:top-0 md:w-full">
        <div className="flex flex-wrap items-center w-full">
          <div className="w-full relative flex justify-start">
            <button
              className="cursor-pointer px-1 py-1 mx-1 my-1 block md:hidden absolute"
              id="hamburger"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <Icon icon="ph:hamburger" height="30"/>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger">

            <ul className="flex flex-col md:flex-row list-none lg:ml-auto w-full">

              <li className="nav-item mx-3">
                <Link to="/" className="pt-12 px-3 pb-2 md:py-1 flex font-bold box">
                  <span>ABOUT</span>
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link to="/" className="px-2 py-2 md:py-1 flex font-bold box">
                  <span>CONTACT</span>
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link to='/portfolio' className="px-3 py-2 md:py-1 flex font-bold box">
                  <span>PORTFOLIO</span>
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link to='/' className="px-3 pt-2 md:py-1 flex font-bold box">
                  <span>RESUME</span>
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;