import './style.css';

const Icon = (props) => {

    return(
        <a className='anchor' href={props.linkTo} target='_blank'>
            <img className='icon' src={props.icon}></img>
        </a>
    )
}


export default Icon;