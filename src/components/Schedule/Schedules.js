import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useSchedule } from '../Provider/ScheduleProvider'
import DemoSchedule from './DemoSchedule';

export default function Schedules({ date }) {

  const { schedules, setSchedules, getSchedulesByDate } = useSchedule()
  const [schedulesByDate, setSchedulesByDate] = useState([])

  useEffect(() => {
    let filtered = getSchedulesByDate(date)
    setSchedulesByDate(filtered)
  }, [schedules, date])

  return (
    <div className='schedule_container'>
      {
        schedulesByDate?.map((item, i) => {
          return (
            <div className='each_schedule' key={i}>
              <div className='schedule_time_container'>
                <p>
                  {moment(item.startDate).format('hh:mm')}
                  <span> {moment(item.startDate).format('a')}</span>
                </p>
                <p>
                  {moment(item.endDate).format('hh:mm')}
                  <span> {moment(item.endDate).format('a')}</span>
                </p>
              </div>
              <div className='schedule_details_container'>
                <p className='schedule_details_title'>{item.title}</p>
                <p className='schedule_details_desc'>{item.desc}</p>
              </div>
            </div>
          )
        })
      }
      {
        (!schedulesByDate || schedulesByDate?.length === 0) && <DemoSchedule />
      }
    </div>
  )
}
