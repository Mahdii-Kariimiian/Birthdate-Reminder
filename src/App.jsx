import React , { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Inputs from './components/Inputs'
import Events from './components/Events'
import Footer from './components/Footer'


function App() {
// Dark mode 
const [darkMode, setDarkMode] = useState(true)

// load from local storage
const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || [])

// Save to local storage 
localStorage.setItem('events', JSON.stringify(events))
// localStorage.removeItem("events")

  return (
    <div 
      className= { darkMode ? 'dark-mode app' : 'light-mode app'}
    >
      <Header 
        setDarkMode={setDarkMode} 
        darkMode={darkMode} 
      /> 
      <Inputs 
        setEvents={setEvents}
        darkMode = {darkMode}
      />
      <Events
      setEvents={setEvents}
        events={events}
        darkMode = {darkMode}
      />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
