import React from 'react'
import Logo from '../../assets/Logo.png'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={Logo} alt="SPOTTABL" />
        </div>
        <div className='header__text'>
            <h1>YOUR SPOTTABL TEAM</h1>
            <h3>Spottabl supports you all throughout</h3>
        </div>
    </div>
  )
}

export default Header