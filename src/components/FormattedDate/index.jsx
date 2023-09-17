const FormattedDate = ({isHighLight, children}) => {
    return (
        <div className="text-2xl">
            <span className={`text-sm ${isHighLight ? "text-primarySubcontent" : ""}`}>
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;