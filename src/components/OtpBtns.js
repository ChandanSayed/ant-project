import React from 'react'
import { Input, Row, Button } from 'antd'

const OtpBtns = (props) => {
  return (
    <Row className="otp-btn-section">
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="1" /></div>
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="2" /></div>
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="3" /></div>
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="4" /></div>
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="5" /></div>
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="6" /></div>
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="7" /></div>
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="8" /></div>
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="9" /></div>
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="99" style={{ visibility: "hidden" }} /></div>
      <div className="otp-button-container">
        <Input type="button" onClick={e => props.handleButton(e.target)} value="0" /></div>
      <div className="otp-button-container">
        <Button onClick={props.deleteOne}><img src="./img/delete.png" alt="deleteBtn" /></Button></div>
    </Row>
  )
}

export default OtpBtns