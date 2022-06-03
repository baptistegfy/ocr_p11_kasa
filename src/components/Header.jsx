import React from 'react'
import kasa from '../images/kasa.svg'

const Header = () => {
  return (
    <header className='header'>
      <img src={kasa} alt="kasa logo" className='header__logo' />
      <nav className='header__nav'>
        <a href='#' className='header__nav-link'>Accueil</a>
        <a href='#' className='header__nav-link'>A Propos</a>
      </nav>
    </header>
  )
}

export default Header