import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import Container from '../Container/Container'
import WelcomeLoggedIn from '../components/WelcomeLoggedIn'

import { pendingAttendance } from '../components/PendingAttendanceList'
import AttendanceList from '../components/AttendanceList'
import EmployeeSummary from '../components/EmployeeSummary'
import ReviewSection from '../components/ReviewSection'
import ConfirmRevision from '../components/ConfirmRevision'




const JobReview = () => {
  const [openPop, setOpenPop] = useState(false)
  const [jobDetails, setJobDetails] = useState(pendingAttendance)
  const { id } = useParams()
  const getId = id
  useEffect(() => {
    function fetchPost() {
      setJobDetails(prev => prev.filter(list => list.id == getId))
    }
    fetchPost()
  }, [getId])

  return (
    <Container title="Job Review" className="Job-Review">

      <WelcomeLoggedIn leftBtnLink="/pending-attendance" leftBtnIcon="/img/arrow-back.png" title="Job Review" rightBtn={true} rightBtnLink="/settings" rightBtnIcon="/img/three-dots.png" />

      <div className="attendance-section">
        {jobDetails.map(list => <AttendanceList list={list} key={list.id} />)}
        <EmployeeSummary />
      </div>
      <ConfirmRevision setOpenPop={setOpenPop} />
      <ReviewSection openPop={openPop} setOpenPop={setOpenPop} />
    </Container>
  )
}

export default JobReview