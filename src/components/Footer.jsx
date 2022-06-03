import React from 'react'
import kasa from '../images/kasa.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={kasa} alt="kasa logo" className='footer__logo' />
      <span className='footer__text'>© 2020 Kasa. All rights reserved</span> 
    </footer>
  )
}

export default Footer