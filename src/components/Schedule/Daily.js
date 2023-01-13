import React, { useState, useEffect } from 'react'
import DailySchedules from './DailySchedules';

export default function Daily() {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    // console.log(date);
  }, [date])

  return (
    <DailySchedules />
  )
}
