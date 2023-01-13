import React, { useState } from 'react'
import "./ScheduleContainer.scss"
import Container from '../Container/Container'
import { useSchedule } from '../components/Provider/ScheduleProvider'
import AddSchedule from '../components/Schedule/AddSchedule'
import Daily from '../components/Schedule/Daily'
import Monthly from '../components/Schedule/Monthly'
import Weekly from '../components/Schedule/Weekly'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const ScheduleContainer = () => {
  const { showAddPopup, setShowAddPopup } = useSchedule()

  const [activeMode, setActiveMode] = useState("Monthly")
  const navigate = useNavigate()
  const switchMode = (e) => {
    let mode = e.target.innerText
    setActiveMode(mode)
  }
  return (
    <Container title="Schedule" className="Schedule">
      <div className="schedule">
        <header className="header">
          <button className="back_button" onClick={() => navigate("/home")}>
            <img src="/img/arrow-back.png" alt='Icon' />
          </button>
          <h1 className="header_title">My Schedule</h1>
          <button className="add_button" onClick={() => { setShowAddPopup(true) }}>
            <img src="img/plus-black.png" alt='Icon' />
          </button>
        </header>

        <div className="mode_buttons">
          <button className={`mode_button ${activeMode === "Daily" ? "active" : ""}`} onClick={switchMode}>Daily</button>
          <button className={`mode_button ${activeMode === "Weekly" ? "active" : ""}`} onClick={switchMode}>Weekly</button>
          <button className={`mode_button ${activeMode === "Monthly" ? "active" : ""}`} onClick={switchMode}>Monthly</button>
        </div>

        {
          activeMode === "Monthly" && <Monthly />
        }
        {
          activeMode === "Weekly" && <Weekly />
        }
        {
          activeMode === "Daily" && <Daily />
        }


        {
          showAddPopup && <AddSchedule />
        }
      </div>
      <Footer />
    </Container>
  )
}

export default ScheduleContainer