/* 
<ContentContainer
    title = ""
    data = {[]}
/>
*/
import { useEffect, useState } from "react";
import FormattedDate from "../FormattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
    onInitial,
    title: sectionTitle = "",
    data = []
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`

    useEffect(() => {
        onInitial(SECTION_ID)
    }, []);

    return (
        <div id={SECTION_ID} className="scroll-m-14">
            <div className="text-primaryAccent font-medium px-2">{sectionTitle}</div>
            {
                data.map(({
                    date,
                    title,
                    link,
                    materials,
                    descriptions,
                    skills,
                    picture
                }, index) => (
                    <div 
                    key={`${SECTION_ID}-${index}-${title.replace("_","")}`}
                    className={`grid grid-cols-[25%_75%] ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-gray-600" : ""} rounded-md px-2 py-6`}
                    onMouseEnter={() => setIsMouseEnter({[`${SECTION_ID}-${index}`] : true})}
                    onMouseLeave={() => setIsMouseEnter({[`${SECTION_ID}-${index}`] : false})}>
                        <div>
                            <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
                            <Picture img={picture} />
                        </div>
                        <div className="grid gap-y-4">
                            <TitleLink 
                                isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} 
                                link={link}
                                title={title} />
                        {
                            materials.length > 0 ?
                            <div className="flex gap-x-4 text-xl ">
                            {
                                materials.map((event, index) => (
                                    <Material key={`material-${index}`}
                                    isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}
                                    icon={event.type}
                                    link={event.link} />
                                ))
                            }           
                            </div>
                            : null
                        }        
                        
                            {
                                descriptions.map((e, index) => (
                                    <Description key={`description-${index}`}
                                    description={e} />
                                ))
                            }
                            {
                                skills.map((e, index) => (
                                    <Tech 
                                    key={`skill-${index}`}
                                    isHighLight={isMouseEnter["exp1"]} 
                                    data={e} />
                                ))
                            } 
                        </div>    
                    </div> 
                ))
            }
        </div>
    )
}

export default ContentContainer;