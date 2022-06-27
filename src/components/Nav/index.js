import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <nav className="h-14">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between sm:h-16 mb-3">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              </div>
              <div className="hidden sm:block">
                <div className="flex items-baseline space-x-4">
                  <a
                    id="menu-background"
                    className="px-3 py-1 rounded-sm text-lg font-bold" 
                    href="#">ABOUT<span className="overlay"></span></a>
                  <a
                    id="menu-background"                    
                    className="px-3 py-1 rounded-sm text-lg font-bold" 
                    href="#">PORTFOLIO<span className="overlay"></span></a>
                  <a
                    id="menu-background" 
                    className="px-3 py-1 rounded-sm text-lg font-bold" 
                    href="#">RESUME<span className="overlay"></span></a>
                  <a
                    id="menu-background" 
                    className="px-3 py-1 rounded-sm text-lg font-bold" 
                    href="#">CONTACT<span className="overlay"></span></a>
                </div>
              </div>
            </div>
            <div className="flex sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-7 w-7 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                ) : (
                  <svg
                    className="block h-7 w-7 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-50 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref) => (
            <div className="sm:hidden" id="mobile-menu">

              <div ref={ref} className="pb-3 tracking-widest">

                <a className="block pb-3 text-md font-black flex justify-center" href="#">ABOUT</a>

                <a className="block pb-3 text-md font-black flex justify-center" href="#">PORTFOLIO</a>

                <a className="block pb-3 text-md font-black flex justify-center" href="#">RESUME</a>

                <a className="block pb-3 text-md font-black flex justify-center" href="#">CONTACT</a>
              </div>

            </div>
          )}
        </Transition>
      </nav>
  );
}

export default Nav;