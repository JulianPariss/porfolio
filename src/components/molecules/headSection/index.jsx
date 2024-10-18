import './style.css';
import NavSectionItem from '../../atoms/navSectionItem';
import { useState } from 'react';

const HeadSection = (props) => {
    const { currentSection, setCurrentSection } = props;
    const sections = [
        {
            id: 0,
            title: "vfx",
        },
        {
            id: 1,
            title: "concept"
        },
        {
            id: 2,
            title: "3d art"
        },
        {
            id: 3,
            title: "animation"
        }
    ]

    return(
        <div className='sectionContainer'>
            <div className="sectionHead"/>
            <div className="sectionHead-back"/>
            <div className='sectionHead-content'>
                {sections.map((section) => {
                    return <NavSectionItem id={section.id} title={section.title} isActive={section.id == currentSection} onClick={setCurrentSection}/>
                })}
            </div>
        </div>
    )
}

export default HeadSection;