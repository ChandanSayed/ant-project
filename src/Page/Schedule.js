import React from 'react'
import ScheduleProvider from '../components/Provider/ScheduleProvider'
import ScheduleContainer from '../components/ScheduleContainer'

const Schedule = () => {
  return (
    <ScheduleProvider>
      <ScheduleContainer />
    </ScheduleProvider>
  )
}

export default Schedule