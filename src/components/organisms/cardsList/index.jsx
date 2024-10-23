import './style.css'
import { SectionDivider_01 } from "../../atoms/sectionDivider"
import Card from '../../molecules/card';

const cardList = [
    {
        title: "Diseño Web",
        image: "webDesign.png",
        type: "web",
    },
    {
        title: "Proyect Managment",
        image: "prmDesign.png",
        type: "prm",
    },
    {
        title: "Infrastructura",
        image: "infraDesign.png",
        type: "inf",
    }
]


const CardsList = () => {


    return(
        <>
            <SectionDivider_01 direction={"up"}/>
            <div className="cdl-conatiner">
                {cardList.map((card, indx) => {
                    return <Card title={card.title} image={card.image} type={card.type} key={indx}/>
                })} 
            </div>
            <SectionDivider_01 direction={"down"}/>
        </>

    )
}

export default CardsList;