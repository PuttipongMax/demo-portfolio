import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TitleLink = ({isHighLight, title, link}) => {
    if(!link){
        return (
            <div className={`text-primaryContent text-2xl 
            ${isHighLight ? "duration-1000 text-primaryTitle" : ""}`}>
                {title} 
            </div>
        )
    }

    return (
        <div >
            <a href={link} target="_blank" className={`text-primaryContent text-2xl 
            ${isHighLight ? "duration-1000 text-primaryTitle" : ""}`}>
                {title} <FontAwesomeIcon icon={faArrowRight} className={`text-xl 
                    -rotate-45 duration-1000 ease-in-out
                    ${isHighLight ? "translate-x-1 -translate-y-1 text-primaryTitle" : ""}`} />
            </a>
        </div>
    )
}

export default TitleLink;