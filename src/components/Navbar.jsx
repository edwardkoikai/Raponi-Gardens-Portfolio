import React, { useState } from 'react';
import logo from './Images/logo.png';
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <a href="#home">
            <img src={logo} alt="Logo" className="w-16"/>
          </a>
        </div>
        <div className={`nav-links md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${isMenuOpen ? 'top-[-9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5 transition-all duration-300 ease-in-out`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {['About Us', 'Our Services', 'Testimonials', 'Contact'].map((item) => (
              <li key={item}>
                <a className="hover:text-green-400" href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden">
          {isMenuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;