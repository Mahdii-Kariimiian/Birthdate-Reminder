import React from 'react'
import { FaGithub } from "react-icons/fa";
import '../App.css'

function Footer({darkMode}) {
  return (
    <div className= { darkMode ? 'dark-mode footer' : 'light-mode footer' }> 
      <h3 className='footer-title'>Developed by : Mahdi Karimian </h3>
      <a className='github' target='_blank' href="https://github.com/Mahdii-Kariimiian"> <FaGithub /> </a>
    </div>
  )
}

export default Footer
