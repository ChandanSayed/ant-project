import React from 'react'
import { Row } from "antd"

const WelcomeLoggedInHome = () => {
  return (
    <div className="welcome">
      <Row className="justify-content-between">
        <div className="brand">
          <img src="./img/logo-hr.png" alt="logo" />
          <span>Freeboh</span>
        </div>
        <div className="avatar">
          <img src="./img/avatar.png" alt="avatar" />
        </div>
      </Row>
      <p><span>Welcome Back, </span>Jacob</p>
      <h1>Let's Find a job for you.</h1>
    </div>
  )
}

export default WelcomeLoggedInHome