import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaXmark, FaBars } from 'react-icons/fa6';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // navItems
  const navItems = [
    {path: "/", link: "Home"},
    {path: "/project", link: "Project"},
    {path: "/resume", link: "Resume"},
    {path: "/contact", link: "Contact"}
  ]

  return (
    <header className=' bg-black opacity-80 text-white fixed top-0 left-0 right-0'>
      <div className='w-[100%] mx-auto px-4 sm:px-12'>
      <nav className=' px-4 py-4 max-w-full flex flex-row justify-between items-center'>
        <NavLink 
        to="/" 
        className={`
          flex flex-row gap-1 text-2xl font-bold font-[interFont]
        `}>
          <h1 className='text-white'>Portfolio</h1>
          <h1 className='text-[cornflowerblue] uppercase'>mpn</h1>
        </NavLink>

        {/* navItems for lg devices */}
        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navItems.map((item, index) => {
              return (
                <li 
                className='text-white font-[interFont] text-2xl'
                key={index}
                >
                  <NavLink className={({ isActive, isPending }) => (
                    isActive ? "active" : isPending ? "pending" : ""
                  )}
                  to={item.path}
                  >
                    {item.link}
                  </NavLink>
                </li>
              )
            })
          }
        </ul> 

        {/* mobile menu btn, display mobile screen */}
        <div className='md:hidden'>
          <button 
          onClick={toggleMenu}
          className='cursor-pointer'
          > 
            {
            isMenuOpen
              ? <FaXmark className="w-5 h-5" />
              : <FaBars className="w-5 h-5" />
            }
          </button>
        </div>
      </nav>
      </div>

      {/* menu items only for mobile */}
      <div>
        <ul 
        className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 
          bg-white 
          ${isMenuOpen
            ? "fixed top-0 left-0 w-full transition-all ease-out duration-1000"
            : "hidden"}
        `}>
          {
            navItems.map(({ path, link }) => {
              return (
                <li className='text-black' key={path}>
                  <NavLink
                  onClick={toggleMenu}
                  to={path}
                  >
                    {link}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    </header>
  )
}

export default Navbar