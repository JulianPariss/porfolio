import './style.css';




const CardTitle = (props) => {


    return(
        <div className="cdt-container">
            <img src={props.image} className='cdt-background-color' alt={"#"}/>
            <div className='cdt-background-blur'/>
            <h3>{props.title}</h3>
        </div>
    )
}

export default CardTitle;