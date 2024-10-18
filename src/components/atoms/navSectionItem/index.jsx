import "./style.css"

const NavSectionItem = (props) => {
    const { title, isActive, onClick, id} = props;

    return(
        <div className="nsi-container" onClick={() => {onClick(id)}}>
            <h2 className={`nsi-title ${isActive && "nsi-active"}`}>{title}</h2>
            <div className="nsi-bar" style={isActive ? {visibility: "visible"} : {visibility: "hidden"}}>
                <div className="nsi-light"/>
            </div>
        </div>
    )
}


export default NavSectionItem;