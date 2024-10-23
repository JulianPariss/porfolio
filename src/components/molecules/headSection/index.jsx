import './style.css';
import NavSectionItem from '../../atoms/navSectionItem';
import { useState } from 'react';

const HeadSection = (props) => {
    const { currentSection, setCurrentSection } = props;
    const sections = [
        {
            id: 0,
            title: "vfx",
            disabled: false,
        },
        {
            id: 1,
            title: "concept",
            disabled: false,
        },
        {
            id: 2,
            title: "3d art",
            disabled: false,
        },
        {
            id: 3,
            title: "animation",
            disabled: true,
        }
    ]

    return(
        <div className='sectionContainer'>
            <div className="sectionHead"/>
            <div className="sectionHead-back"/>
            <div className='sectionHead-content'>
                {sections.map((section) => {
                    return <NavSectionItem disabled={section.disabled} id={section.id} title={section.title} isActive={section.id == currentSection} onClick={setCurrentSection}/>
                })}
            </div>
        </div>
    )
}

export default HeadSection;