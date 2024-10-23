import './style.css';
import React from 'react';



const SectionConcept = () => {



    return(
        <div className='stv-cc-container'>
            <div className='stv-cc-grid-container'>
                <img className='stv-cc-image' src="CA_00.png" alt="character concept" />
                <img className='stv-cc-image' src="CA_01.png" alt="character concept" />
                <img className='stv-cc-image' src="CA_02.png" alt="character concept" />
                <img className='stv-cc-image' src="CA_04.png" alt="character concept" />
                <img className='stv-cc-image' src="CA_05.png" alt="character concept" />
            </div>
            <p className='stv-cc-text'>
                "Estos son algunos bocetos que desarrollé para mi último proyecto."
            </p>
        </div>
    )
}

export default SectionConcept;