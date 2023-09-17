const Tech = ({isHighLight, data}) => {
    return (
        <div className="flex gap-x-4">
            {
                data.map((event, index) => (
                    <div key={`${event}-tech-${index}`} className={`bg-primaryTitle px-2 py-1 rounded-md cursor-pointer
                        ${isHighLight ? "text-gray-600" : ""} `}>
                            <h1 className="text-primarySubcontent">{event}</h1>
                    </div>  
                ))
            }         
        </div>       
    )
}

export default Tech;