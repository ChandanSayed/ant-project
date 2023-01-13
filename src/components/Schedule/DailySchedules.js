import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useSchedule } from '../Provider/ScheduleProvider'
import DemoSchedule from './DemoSchedule';

export default function DailySchedules() {

  const { schedules, setSchedules, getSchedulesByDate } = useSchedule()
  const [schedulesForToday, setschedulesForToday] = useState([])
  const [schedulesForTomorrow, setschedulesForTomorrow] = useState([])

  useEffect(() => {
    let todaysSchedule = getSchedulesByDate(moment().add(0, 'days')._d)
    let tomorrowsSchedule = getSchedulesByDate(moment().add(1, 'days')._d)
    setschedulesForToday(todaysSchedule)
    setschedulesForTomorrow(tomorrowsSchedule)
  }, [schedules])

  return (
    <div className='schedule_container' style={{ marginTop: "2rem" }}>
      <div className='schedule_each_day'>
        {schedulesForToday.length > 0 && <p className='schedule_each_day_title'>Today {moment().add(0, 'days').format("Do")}</p>}
        {
          schedulesForToday?.map((item, i) => {
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
      </div>
      <div className='schedule_each_day'>
        {schedulesForTomorrow.length > 0 && <p className='schedule_each_day_title'>Tomorrow {moment().add(1, 'days').format("Do")}</p>}
        {
          schedulesForTomorrow?.map((item, i) => {
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
      </div>
      {
        ((!schedulesForToday || schedulesForToday?.length === 0) && (!schedulesForTomorrow || schedulesForTomorrow?.length === 0)) && <DemoSchedule />
      }
    </div>
  )
}
