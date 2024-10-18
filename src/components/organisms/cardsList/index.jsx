import './style.css'
import { SectionDivider_01 } from "../../atoms/sectionDivider"
import Card from '../../molecules/card';
const CardsList = () => {


    return(
        <>
            <SectionDivider_01 direction={"up"}/>
            <div className="cdl-conatiner">
                <Card/>
            </div>
            <SectionDivider_01 direction={"down"}/>
        </>

    )
}

export default CardsList;