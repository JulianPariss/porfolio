import './style.css'
import SectionVFX from '../sectionVFX';
import SectionConcept from '../sectionConcept';
import Section3D from '../section3D';

const SectionBody = (props) => {
    const { currentSection } = props;

    return(
        <div className='stb-container'>
            <div className='stb-backgroundContainer'>
                <div className='stb-contentContainer'>
                    <img src='https://images.unsplash.com/photo-1721524743092-3295ea996916?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>}
                        {/*Posiblemente acá cargue los diferentes componentes con los diferentes contenidos.*/}
                </div>
                {currentSection == 0 && <SectionVFX/>}
                {currentSection == 1 && <SectionConcept/>}
                {currentSection == 2 && <Section3D/>}
            </div>
        </div>
    )
}

export default SectionBody;