import './style.css';
import React from 'react';



const Section3D = () => {



    return(
        <div className='stv-3d-container'>
            <div className='stv-3d-grid-container'>
                <img className='stv-3d-image' src="3D_01.png" alt="character concept" />
                <img className='stv-3d-image' src="3D_03.png" alt="character concept" />
                <img className='stv-3d-image' src="3D_02.png" alt="character concept" />
                <img className='stv-3d-image' src="3D_00.png" alt="character concept" />
            </div>
            <p className='stv-3d-text'>
                "Estos son los modelos realizados con los conceptos que desarrollé para mi último proyecto."
            </p>
        </div>
    )
}

export default Section3D;