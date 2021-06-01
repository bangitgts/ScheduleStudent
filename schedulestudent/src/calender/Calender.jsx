import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class Calender extends React.Component {
  render() {
    return (
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: 'Test 1', date: '2021-06-01' },
          { title: 'event 2', date: '2021-06-22' }
        ]}
      />
    )
  }
}

export { Calender }