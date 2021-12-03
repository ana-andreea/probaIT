import React from 'react'
import './Nav.css'

import unda from '../assets/unda.png'
import logo from '../assets/logo.png'

function Nav()
{
    return(
    <div className='nav_container'>

        <img src={unda} alt='unda_sus' className='nav_unda' />

        {/* Logo */}
        <img src={logo} alt="logo" className='nav_logo' />

        {/* Nav */}
        <nav>
            <button className='nav_link'>Logare</button>
            <button className='nav_link'>Creare cont</button>
            <button className='nav_link'>Contact</button>
        </nav>

    </div> 
    )
}
export default Nav