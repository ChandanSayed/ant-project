import React, { useState, useContext, createContext } from "react"
import moment from 'moment';

export const ScheduleContext = createContext()


export const useSchedule = () => {
  return useContext(ScheduleContext)
}

export default function ScheduleProvider({ children }) {

  const [schedules, setSchedules] = useState([])
  const [showAddPopup, setShowAddPopup] = useState(false)

  const getSchedulesByDate = (date) => {
    let arr = schedules.filter((item) => {
      return moment(date).format('YYYY:DD:MM') === moment(item.startDate).format('YYYY:DD:MM')
    })
    return arr
  }

  return (
    <ScheduleContext.Provider value={{ schedules, setSchedules, showAddPopup, setShowAddPopup, getSchedulesByDate }}>
      {children}
    </ScheduleContext.Provider>
  )
}