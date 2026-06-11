function CalendarPanel() {

  const events = [
    { time: '6:00 AM - 2:30 PM', title: 'Work' },
    { time: '7:45 AM - 8:00 AM', title: '1st Break' },
    { time: '9:00 AM - 12:00 PM', title: 'Nico - Reverse Phone Shadowing' },
    { time: '10:45 AM - 11:15 AM', title: 'Lunch' },
    { time: 'All Day', title: 'Carter OOO' },
  ]

  return (
    <div className="calendar-panel">

      <div className="calendar-date">
        <span className="calendar-day-name">WEDNESDAY, JUNE</span>
        <span className="calendar-day-number">10</span>
      </div>

      <div className="calendar-events">
        {events.map((event, index) => (
          <div key={index} className="calendar-event">
            <span className="event-dot"></span>
            <div className="event-details">
              <span className="event-time">{event.time}</span>
              <span className="event-title">{event.title}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CalendarPanel