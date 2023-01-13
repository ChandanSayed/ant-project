import React from 'react'
import { Input, Row } from 'antd'

const OtpInput = (props) => {
  return (
    <Row className="otp-input-section justify-content-between">
      <Input value={props.otp[0]} className="otp-input" type="number" />
      <Input value={props.otp[1]} className="otp-input" type="number" />
      <Input value={props.otp[2]} className="otp-input" type="number" />
      <Input value={props.otp[3]} className="otp-input" type="number" />
      <Input value={props.otp[4]} className="otp-input" type="number" />
    </Row>
  )
}

export default OtpInput