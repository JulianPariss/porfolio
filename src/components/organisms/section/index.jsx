import './style.css'
import HeadSection from '../../molecules/headSection'
import SectionBody from '../../molecules/sectionBody';
import { useState } from 'react';
const Section = () => {

    const [currentSection, setCurrentSection] = useState(0);


    return(
        <div>
            <HeadSection currentSection={currentSection} setCurrentSection={setCurrentSection}/>
            <SectionBody currentSection={currentSection}/>
        </div>
        
    )
}


export default Section;