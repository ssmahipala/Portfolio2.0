import React from 'react'

import logo from '../assets/portfoliologo.png'

function Header() {
  return (
    <div className='header'>
        <a href='#hero' className='logo-a-tag'>
            <img src={logo} alt="Logo" className='logo-header' />
        </a>
    </div>
  )
}

export default Header