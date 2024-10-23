import './style.css';

const CardContent = (props) => {

    return(

        <div className='cdc-container'>
            {props.children}
        </div>
    )
}

export default CardContent;