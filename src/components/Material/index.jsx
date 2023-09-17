import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({isHighLight, link, icon}) => {
    return (
        <a href={link} target="_blank">
            <FontAwesomeIcon icon={icon} 
                className="" />
        </a>
    )
}

export default Material;