import CardTitle from '../../atoms/cardTitle';
import CardSubtitle from '../../atoms/cardSubtitle';
import CardContent from '../../atoms/cardContent';

import './style.css';

const Card = (props) => {

    return( 
        <div className='cd-container'>
            <CardTitle title={props.title} image={props.image}/>
            <div className='cd-content'>
                <CardSubtitle/> 
                <CardContent/>
            </div>
        </div>
    )
}

export default Card;