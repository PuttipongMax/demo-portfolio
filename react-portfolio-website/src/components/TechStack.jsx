import react from 'react';
import { FaReact, FaHtml5, FaCss3Alt,   } from 'react-icons/fa6';
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

function TechStack(){
    return (
        <div>
            <div className='flex flex-row gap-2 text-4xl'>               
                <FaHtml5 />
                <FaCss3Alt />
                <RiJavascriptFill />        
                <FaReact />
                <SiTailwindcss />
            </div>
        </div>
    )
}

export default TechStack;