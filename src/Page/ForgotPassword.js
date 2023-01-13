import React, { useState } from 'react'
import { Link } from "react-router-dom"

import Container from '../Container/Container'
import { Row, Button, Statistic } from 'antd'
import OtpInput from '../components/OtpInput'
import OtpBtns from '../components/OtpBtns'
const { Countdown } = Statistic

const ForgotPassword = () => {
  const [otp, setOtp] = useState([])
  const [disableOtpSend, setDisableOtpSend] = useState(true)
  function handleButton(element) {
    setOtp(prev => prev.length > 4 ? prev : prev.concat(element.value))
  }

  function deleteOne() {
    setOtp(prev => prev.splice(0, (prev.length - 1)))
  }
  const [deadline, setDeadline] = useState(Date.now() + 1000 * 210)

  function handleDeadline() {
    setDeadline(Date.now() + 1000 * 210)
    setDisableOtpSend(true)
  }
  const onFinish = () => {
    setDisableOtpSend(false)
  }

  return (
    <Container title="Forget-Password" className="Forget-Password">
      <div className="welcome">
        <Row>
          <Link to="/">
            <Button className='neutral-btn-5'><img src="./img/arrow-back.png" alt="backBtn" /></Button>
          </Link>
        </Row>
        <h1>Submit the OTP</h1>
        <p>We have just sent a OPT to <b>333598465654</b> <br />if you haven't received.
          {" "}<Button className='resend-otp' onClick={handleDeadline} disabled={disableOtpSend}><b>Click here</b></Button></p>
      </div>
      <OtpInput otp={otp} />
      <div className="remaining-time">
        <Countdown title="Resend in: " value={deadline} onFinish={onFinish} format="mm:ss" />
      </div>
      <OtpBtns handleButton={handleButton} deleteOne={deleteOne} />
    </Container>
  )
}

export default ForgotPassword