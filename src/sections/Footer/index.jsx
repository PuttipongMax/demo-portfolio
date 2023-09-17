import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="mb-10">
            <div className="flex justify-end">
                <a href="http://www.google.com" target="_blank">
                   <span>                  
                        Powered by React, Js and Tailwinds
                        <FontAwesomeIcon className="ml-2" icon={faGithub} />
                    </span>   
                </a>                          
            </div>
        </div>
    )
}

export default Footer;