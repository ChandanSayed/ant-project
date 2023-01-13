import React from 'react'

import Container from '../Container/Container'
import Footer from '../components/Footer'
import TimeSheet from '../components/TimeSheet'
import { timeTracking } from '../components/TimeTrackingList'
import WelcomeLoggedIn from '../components/WelcomeLoggedIn'
import CountDownSection from '../components/CountDownSection'




const TimeTracking = () => {

  return (
    <Container title="Time Tracking" className="Time-Tracking">

      <WelcomeLoggedIn leftBtnLink="/home" leftBtnIcon="/img/arrow-back.png" title="Time Tracking" rightBtn={false} rightBtnLink="/settings" rightBtnIcon="/img/settings.png" />

      <CountDownSection />
      <div className="time-sheets">
        <h6>Time sheets</h6>
        {timeTracking.map(list => <TimeSheet list={list} key={list.id} />)}
      </div>
      <Footer />
    </Container>
  )
}

export default TimeTracking