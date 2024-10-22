import './style.css';
import React from "react";
import RocksMask_03 from "../../molecules/rocksMask/rocksMask_03";
import ImageDivider from '../../atoms/imageDivider';

const LevelDesign = () => {


    return(
        <>
        <div className='ld-head'>
            <RocksMask_03/>
            <h2 className='ld-title'>Level Design</h2>
        </div>
        <div className='ld-container'>
            
            <img src="level_00.png" alt="levelImage" className="ld-image level-00"/>
            <ImageDivider/>
            <img src="level_01.png" alt="levelImage" className="ld-image level-01"/>
            <ImageDivider/>
            <img src="level_00.png" alt="levelImage" className="ld-image level-00"/>
            <ImageDivider/>
            <img src="level_01.png" alt="levelImage" className="ld-image level-01"/>

        </div>
        </>
    )
}


export default LevelDesign;