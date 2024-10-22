import './style.css';
import React from 'react';




const Footer = () => {


    return(

        <div className='ft-conatiner'>
            <div className='ft-topDivider'/>
            <div className='ft-content'>
                <div className='ft-navBar'>
                    <div className='ft-bar'>
                        <div className='ft-bar-icon-container' onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>
                             <img className='ft-arrow-icon' src='arrow-up-icon.svg' alt='arrow up'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;