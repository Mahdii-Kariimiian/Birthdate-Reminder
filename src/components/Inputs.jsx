import React , {useState} from 'react'
import { nanoid } from 'nanoid'
import '../App.css'

function Inputs({  
  setEvents ,
  darkMode
}) {

  // States for inputs
const [name, setName] = useState('')
const [date, setDate] = useState('')
const [ideas, setIdeas] = useState('')

  let id = nanoid()

  // Handle inputs                   
  function handleChange(e) {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else if (e.target.name === 'date') {
      setDate(e.target.value)
    } else if (e.target.name === 'ideas') {
      setIdeas(e.target.value)
    }
  }

  //Handle submit button
  function handleInsert(e) {
    e.preventDefault();
    const newEvent = [
      { key : id , 
        id : id , 
        name : name, 
        date : date, 
        ideas: ideas
      }];
    if (name && date) {
      setEvents((prev) => [...prev,     newEvent]);
      // Reset input fields
      setName('');
      setDate('');
      setIdeas('');
    } else {
      alert('Please fill out all fields');
    }
  }

  return (
    <div className= { darkMode ? 'dark-mode' : 'light-mode'}> 
      <form className='inputs' action="">
        
        <div>
          <label className='label inputs-name' htmlFor="name">Name
          <input  
            onChange={(e)=> handleChange(e)} 
            value={name}
            className={ darkMode ? 'dark-mode input' : 'light-mode input'} 
            type="text" 
            name="name" 
            id="name" 
            placeholder="What's the special occasion?" 
          />
          </label>

          <label className='label inputs-date' htmlFor="date">Date
          <input  
            onChange={(e)=> handleChange(e)} 
            value={date}
            className={ darkMode ? 'dark-mode input' : 'light-mode input'} 
            type="date" 
            name="date" 
            id="date" 
          />
          </label>
        </div>

        <label 
          className='label inputs-ideas' 
          value={ideas}
          htmlFor="ideas"
        >Ideas
          <textarea 
            value={ideas}
            onChange={(e)=> handleChange(e)} 
            className={ darkMode ? 'dark-mode input text-area' : 'light-mode input text-area'} 
            name="ideas" 
            id="ideas"
            rows={5}
            placeholder="What do you want to do on this day?"
          >
          </textarea>
        </label>

        <button
          onClick={handleInsert} 
          className={ darkMode ? 'dark-mode input-submit button' : 'light-mode input-submit button'} 
          type='submit'
        >
          Insert
        </button>
      </form>
    </div>
  )
}

export default Inputs
