import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className="flex items-end gap-4 text-2xl">
            <FontAwesomeIcon icon={faGithub} 
                className="hover:scale-125 hover:text-primaryTitle transition-all
                duration-1000 cursor-pointer" 
            />
            <FontAwesomeIcon icon={faMedium} 
                className="hover:scale-125 hover:text-primaryTitle transition-all
                duration-1000 cursor-pointer" 
            />
            <FontAwesomeIcon icon={faLinkedin} 
                className="hover:scale-125 hover:text-primaryTitle transition-all
                duration-1000 cursor-pointer" 
            />
        </div>
    )
}

export default Contact;