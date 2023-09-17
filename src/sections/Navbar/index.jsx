import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Experience", sectionId: "Experience-section"},
  { title: "Project", sectionId: "Project-section"},
  { title: "Article", sectionId: "Article-section"}
]

const Navbar = ({ navBarItems, currentSection }) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    console.log(sectionId)
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth"})
  }
    return (
        <div className={`hidden lg:flex flex-col font-semibold`}>
          {
            navBarItems.map((event, index) => (
              <div
                  key={`nav-${event}-${index}`}
                  onClick={() => handleClick(event.sectionId)}
                  onMouseEnter={() => setIsMouseEnter({ [event.title] : true })}
                  onMouseLeave={() => setIsMouseEnter({ [event.title] : false })}
                  className='cursor-pointer flex py-2'
                >
                  <div>
                    <FontAwesomeIcon icon={faArrowRight}
                    className={`mr-2 new-arrow
                    ${currentSection === event.sectionId ? "text-primaryTitle" : isMouseEnter[event.title] ? "" : "hidden"}`}
                              
                  />
                  </div>
                  <div className={
                    `${currentSection === event.sectionId || isMouseEnter[event.title] ? "translate-x-4" : ""} 
                    transition-all duration-500 ease-out`}>
                    {event.title}
                  </div>                 
              </div>
            ))
          }   
        </div>
    )
}

export default Navbar;