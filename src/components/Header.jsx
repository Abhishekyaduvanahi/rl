import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Projects", "Education", "Contact"];

  // NavLinkItem Component for Each Link
  const NavLinkItem = ({ name, onClick }) => {
    return (
      <li className="relative py-3 md:py-0 group overflow-hidden">
        <Link
          to={name.toLowerCase()}
          smooth={true}
          duration={500}
          className="relative inline-block text-white text-lg uppercase tracking-wide font-semibold transition-all duration-300 
                               hover:text-greenColor before:absolute before:-bottom-2 before:left-0 
                               before:w-0 before:h-[2px] before:bg-greenColor before:transition-all 
                               before:duration-300 hover:before:w-full cursor-pointer"
          onClick={onClick}
        >
          {/* Letter-by-Letter Up & Down Effect */}
          <span className="flex space-x-1 relative overflow-hidden">
            {name.split("").map((letter, index) => (
              <span
                className="relative inline-block h-6 overflow-hidden"
                key={index}
              >
                <span
                  className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-6"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {letter}
                </span>
                <span
                  className="absolute top-6 left-0 block transition-transform duration-500 ease-in-out group-hover:-translate-y-6"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {letter}
                </span>
              </span>
            ))}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <header className="bg-slate-900 fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo (Left Side) */}
        <div className="text-2xl font-bold text-white">RL</div>

        {/* Navigation Links (Centered) */}
        <ul className="hidden md:flex md:space-x-10 absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item) => (
            <NavLinkItem key={item} name={item} />
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Navigation */}
        <ul
          className={`absolute top-16 left-0 w-full bg-slate-900 md:hidden flex flex-col items-center space-y-4 py-4 
                               transition-all duration-300 ease-in-out ${
                                 menuOpen ? "block" : "hidden"
                               }`}
        >
          {menuItems.map((item) => (
            <NavLinkItem
              key={item}
              name={item}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
