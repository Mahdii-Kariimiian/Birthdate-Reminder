import React from 'react'
import '../App.css'

function Events({events , setEvents , darkMode}) {
  
  let todaysEvent = []
  let allEvents = []

  //Today's date
  const time = new Date()
  const day = time.getDate()
  const month = time.getMonth() + 1
  const year = time.getFullYear()
  const today = `${year}-${month <10 ? "0" + month : month}-${day<10 ? "0" + day : day}`

  // Compare the date of event to today's date 
  if (events.length > 0) {
    events.map(event => {
      if (event[0].date === today) {
        todaysEvent.push(event)
      } else {
        allEvents.push(event)
      }
    })
  }
  
  // Render Todays Events
  const renderTodaysEvents = todaysEvent.map( (event) => {
    return (
      <div 
        id={event[0].id} 
        key={event[0].id} 
        className={ darkMode ? 'light-yellow-mode today-card' : 'dark-yellow-mode today-card' }
      >
        <p className="event-name"><span className='event-headers'>Occasion</span> : {event[0].name}</p>
        <p className="event-date"><span className='event-headers'>Date</span> : {event[0].date}</p>
        <p className="event-ideas"><span className='event-headers'>Ideas</span> : {event[0].ideas}</p>
        <button onClick={(e)=> {handleRemove(e)}} className='remove-event'> X  </button>
      </div>
    ) 
  })

  // Render All Events
  const renderAllEvents = allEvents.map((event) => {
    const eventDate = new Date(event[0].date);
    const today = new Date();
  
    // Set the year of both dates to the same year (doesn't matter which year)
    eventDate.setFullYear(today.getFullYear());
  
    // Calculate the difference in milliseconds
    let timeDiff = eventDate.getTime() - today.getTime();
  
    // If the event has already occurred this year, add a year to the event date
    if (timeDiff < 0) {
      eventDate.setFullYear(today.getFullYear() + 1);
      timeDiff = eventDate.getTime() - today.getTime();
    }
  
    // Convert milliseconds to days
    let daysUntilEvent = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
    return { event, timeDiff, daysUntilEvent };
  })
  .sort((a, b) => a.timeDiff - b.timeDiff) // Sort by the difference
  .map(({ event ,daysUntilEvent }) => {
    return (
      <div 
        id={event[0].id} 
        key={event[0].id} 
        className={ darkMode ? 'light-blue-mode all-card' : 'dark-blue-mode all-card'}
        >
        <p className="event-name"><span className='event-headers'>Occasion</span> : {event[0].name}</p>
        <p className="event-date"><span className='event-headers'>Date</span> : {event[0].date} (Remaining days: {daysUntilEvent})</p>
        <p className="event-ideas"><span className='event-headers'>Ideas</span> : {event[0].ideas}</p>
        <button onClick={(e)=> {handleRemove(e)}} className='remove-event'> X </button>
      </div>
    );
  });

  // handleRemove
  function handleRemove(e) {
    const removingItemElement = e.target.parentElement
    setEvents(prevEvents => {
      return prevEvents.filter(event => {
        return event[0].id !== removingItemElement.id
      })
    })

  }
  return (
    <div className='event'>
      <div className={ darkMode ? 'dark-yellow-mode today-events' : 'light-yellow-mode today-events' }>
      <h3>Today occasions</h3>
        {renderTodaysEvents.length
          ? renderTodaysEvents
          : <p>No events today!</p>}
      </div>
    
      <div className={ darkMode ? 'dark-blue-mode all-events' : 'light-blue-mode all-events'}>
        <h3>All occasions</h3>
        {renderAllEvents.length
        ? renderAllEvents 
        : <p>No events yet!</p>}
      </div>
    </div>
  )
}

export default Events
