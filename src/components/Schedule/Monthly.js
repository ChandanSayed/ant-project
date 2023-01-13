import React, { useState, useEffect } from 'react'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Schedules from './Schedules';

export default function Monthly() {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    // console.log(date);
  }, [date])

  return (
    <>
      <div className='calender_container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <Schedules date={date} />
    </>
  )
}
