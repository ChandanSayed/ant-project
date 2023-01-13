import React from 'react'
import { Link } from "react-router-dom"
import { Row, Button } from 'antd'

const SignupWelcome = () => {
  return (
    <div className="welcome">
      <Row className='justify-content-between'>
        <div className="brand">
          <img src="/img/logo-hr.png" alt="logo" />
          <span>Freeboh</span>
        </div>
        <Link to="/">
          <Button>Login</Button>
        </Link>
      </Row>
      <h1>Sign in to Freeboh</h1>
      <p>Please fill all the fields below carefully to create  your account</p>
    </div>
  )
}

export default SignupWelcome