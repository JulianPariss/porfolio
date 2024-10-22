import './style.css';
import React from 'react';




const Footer = () => {


    return(

        <div className='ft-conatiner'>
            <div className='ft-topDivider'/>
            <div className='ft-content'>
                <img src='smoke.png' alt='smoke' className='ft-smoke smoke00'/>
                <img src='smoke.png' alt='smoke' className='ft-smoke smoke01'/>
                <img src='smoke.png' alt='smoke' className='ft-smoke smoke02'/>
                <div className='ft-logo-container'>
                    <div className='ft-logo-light'/>
                    <div className='ft-logo-gif'/>
                    <div className='ft-logo-border'>                        
                        <img src='Logo.png' className='ft-logo-icon' alt='zero icon'/>
                        <h1 className='ft-logo-title baseColor'>ZERO</h1>
                        <h1 className="ft-logo-title backgroundBlend">ZERO</h1> 
                    </div>
                </div>
                <h3 className='ft-author'>By Julian Paris</h3>
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