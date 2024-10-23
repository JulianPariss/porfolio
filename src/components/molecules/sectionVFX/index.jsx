import './style.css';
import React from 'react';




const SectionVFX = () => {


    return(
        <div className='stv-vfx-container'>
            <div className='stv-vfx-box-container'>
                <div className='stv-vfx-box'><img className='stv-vfx-gif' src='vfx_00.gif'/></div>
                <div className='stv-vfx-box'><img className='stv-vfx-gif' src='vfx_01.gif'/></div>
                <div className='stv-vfx-box'><img className='stv-vfx-gif' src='vfx_02.gif'/></div>
            </div>
            <p className='stv-vfx-text'>
                Utilizo el sistema de partículas de Unreal Engine para desarrollar efectos visuales. Aunque soy principiante en el área, 
                me resulta sumamente interesante, y es sorprendente cómo efectos de este estilo pueden enriquecer la experiencia del usuario.
            </p>
        </div>
        
    )
}


export default SectionVFX;