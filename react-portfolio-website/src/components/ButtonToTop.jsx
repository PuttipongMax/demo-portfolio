import React, { useState, useEffect } from 'react'
import { FaChevronUp } from 'react-icons/fa6'

function ButtonToTop({ showBelow }) {
  const [show, setShow] = useState(showBelow ? false : true);
  const handleScroll = () => {
    if(window.scrollY > showBelow){
      if(!show){
        setShow(true);
      }
    }
    else{
      if(show){
        setShow(false);
      }
    }
  }
  useEffect(() => {
    if(showBelow){
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  })
  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" })
  }

  return (
    <div
    onClick={handleClick}
    className={`flex items-center justify-center 
      ${show ? `fixed w-16 h-16 rounded-full bg-white 
        bg-opacity-90 right-4 bottom-12 cursor-pointer border-gray-400 
        border-2` : ""}
    `}
    >
      <FaChevronUp 
      className='text-black text-[32px]'
      />
    </div>
  )
}

export default ButtonToTop