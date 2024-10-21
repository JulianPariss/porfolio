import './style.css'
import { SectionDivider_01 } from "../../atoms/sectionDivider"
import Card from '../../molecules/card';

const cardList = [
    {
        title: "Diseño Web",
        image: "webDesign.png"
    },
    {
        title: "Proyect Managment",
        image: "prmDesign.png"
    },
    {
        title: "Infrastructura",
        image: "infraDesign.png"
    }
]


const CardsList = () => {


    return(
        <>
            <SectionDivider_01 direction={"up"}/>
            <div className="cdl-conatiner">
                {cardList.map((card, indx) => {
                    return <Card title={card.title} image={card.image} key={indx}/>
                })} 
            </div>
            <SectionDivider_01 direction={"down"}/>
        </>

    )
}

export default CardsList;