import React from 'react'
import { FaRegMoon } from "react-icons/fa";
import { BiMemoryCard } from "react-icons/bi";
import { MdOutlineWbSunny } from "react-icons/md";
import '../App.css'

function Header({darkMode, setDarkMode}) {
  return (
    <div  className= { darkMode ? 'header dark-mode' : 'header light-mode' }>
      <h2 className='header-title'><BiMemoryCard /> Occasion Reminder </h2>
      <button onClick={()=> {setDarkMode(darkMode = !darkMode)}} 
      className= { darkMode ? 'header-dark-mode dark-mode' : 'header-dark-mode light-mode' }> 
        {darkMode ? <MdOutlineWbSunny /> :  <FaRegMoon />} 
      </button>
    </div>
  )
}

export default Header
