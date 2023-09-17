const Picture = ({img, title}) => {
    if(!img){
        return null;
    }
    return (
        <div className="w-5/6 rounded-md">
            <img src={img} title={title} />
        </div>
    )
}

export default Picture