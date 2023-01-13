import React, { useState } from 'react'
import moment from 'moment';

import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { useSchedule } from '../Provider/ScheduleProvider';


export default function AddSchedule() {

  const { schedules, setSchedules, setShowAddPopup } = useSchedule()

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(moment().add(1, "hour")._d)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  return (
    <div className='add_schedule_popup'>
      <div className='add_schedule_container'>
        <div className='add_schedule_title'>
          <p className=''>Add Schedule</p>
          <button onClick={() => { setShowAddPopup(false) }}>
            <img src="https://img.icons8.com/ios-glyphs/60/ff0000/delete-sign.png" alt='close-icon' />
          </button>
        </div>
        <div className='add_schedule_details'>
          <input
            value={title}
            placeholder="Title*"
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <input
            value={desc}
            placeholder="Description*"
            onChange={(e) => { setDesc(e.target.value) }}
          />
        </div>
        <div className='schedule_picker'>
          <div className='schedule_picker_each'>
            <p>Starts at: </p>
            <Flatpickr
              options={{
                minDate: new Date(),
                dateFormat: "M j, Y | h:i K",
              }}
              data-enable-time
              value={startDate}
              onChange={([date]) => {
                setStartDate(date)
              }}
            />
          </div>
          <div className='schedule_picker_each'>
            <p>Ends at: </p>
            <Flatpickr
              options={{
                minDate: startDate,
                dateFormat: "M j, Y | h:i K",
              }}
              data-enable-time
              value={endDate}
              onChange={([date]) => {
                setEndDate(date)
              }}
            />
          </div>
        </div>
        <div className='add_schedule_button_container'>
          <button className={`${(title && desc) ? "" : "disabled"}`} onClick={() => {
            if (title && desc && (startDate?.getTime() < endDate?.getTime())) {
              setSchedules([...schedules, {
                startDate,
                endDate,
                title,
                desc
              }])
              setShowAddPopup(false)
            }
          }}>Add</button>
        </div>
      </div>
    </div>
  )
}
