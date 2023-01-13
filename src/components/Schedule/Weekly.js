import React, { useState, useEffect } from 'react'
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
// import { useSchedule } from '../Provider/ScheduleProvider';
import Schedules from './Schedules';

export default function Weekly() {

  // const { schedules, setSchedules } = useSchedule()

  const [date, setDate] = useState(new Date())
  const [weekDays, setWeekDays] = useState([])
  const [activeIndex, setActiveIdex] = useState(1)

  useEffect(() => {
    generate7Days()
  }, [])

  useEffect(() => {
    // console.log(date);
  }, [date])

  const generate7Days = () => {
    let arr = []
    arr.push(moment().subtract(1, 'days')._d)
    for (let i = 0; i < 6; i++) {
      let date = moment().add(i, 'days')._d
      arr.push(date)
    }
    setWeekDays(arr)
  }

  return (
    <>
      <div className='weekly_calender_container'>
        {
          weekDays.map((item, i) => {
            return (
              <div
                className={`each_day ${activeIndex === i ? "active" : ""}`}
                key={i}
                onClick={() => {
                  setActiveIdex(i)
                  setDate(item)
                }}
              >
                <p>{moment(item).format("ddd")}</p>
                <p>{moment(item).format("DD")}</p>
              </div>
            )
          })
        }
      </div>
      <Schedules date={date} />
    </>
  )
}
