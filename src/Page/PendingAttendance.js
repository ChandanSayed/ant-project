import React from 'react'

import Container from '../Container/Container'
import WelcomeLoggedIn from '../components/WelcomeLoggedIn'
import AttendanceList from '../components/AttendanceList'

import { pendingAttendance } from '../components/PendingAttendanceList'

const PendingAttendance = () => {
  return (
    <Container title="Pending Attendance" className="Pending-Attendance">

      <WelcomeLoggedIn leftBtnLink="/home" leftBtnIcon="/img/arrow-back.png" title="Pending Attendance" rightBtn={true} rightBtnLink="/settings" rightBtnIcon="/img/three-dots.png" />

      <div className="attendance-section">
        {pendingAttendance.map(list => <AttendanceList list={list} key={list.id} />)}


      </div>
    </Container>
  )
}

export default PendingAttendance