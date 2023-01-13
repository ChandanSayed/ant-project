import React from 'react'
import { useNavigate } from "react-router-dom"
import Container from '../Container/Container'
import { Row, Col } from 'antd'
import WelcomeLoggedIn from '../components/WelcomeLoggedIn'

const Settings = () => {
  const navigate = useNavigate()
  return (
    <Container title="Settings" className="Settings">
      <WelcomeLoggedIn leftBtnIcon="/img/arrow-back.png" title="Settings" leftBtnLink="/profile" rightBtn={false} />

      <div className="list">
        <Row className='align-items-center' onClick={() => navigate("/payslip")}>
          <Col span={3}>
            <img src="/img/pay.png" alt="Pay" />
          </Col>
          <Col>
            <p className='title'>Billing & payment</p>
            <p>Select people you want to match with</p>
          </Col>
        </Row>
        <hr />
        <Row className='align-items-center' onClick={() => navigate("/profile")}>
          <Col span={3}>
            <img src="/img/profile-icon.png" alt="Pay" />
          </Col>
          <Col>
            <p className='title'>Profile settings</p>
            <p>Manage blocked Jem users</p>
          </Col>
        </Row>
        <hr />
        <Row className='align-items-center'>
          <Col span={3}>
            <img src="/img/notification.png" alt="Pay" />
          </Col>
          <Col>
            <p className='title'>Notification settings</p>
            <p>Manage notifications preference</p>
          </Col>
        </Row>
        <hr />
        <Row className='align-items-center'>
          <Col span={3}>
            <img src="/img/password.png" alt="Pay" />
          </Col>
          <Col>
            <p className='title'>Password and Security</p>
            <p>Read our privacy policy</p>
          </Col>
        </Row>
        <hr />
        <Row className='align-items-center'>
          <Col span={3}>
            <img src="/img/terms.png" alt="Pay" />
          </Col>
          <Col>
            <p className='title'>Terms of Service</p>
            <p>Read our terms and conditions</p>
          </Col>
        </Row>
        <hr />
        <Row className='align-items-center'>
          <Col span={3}>
            <img src="/img/terms.png" alt="Pay" />
          </Col>
          <Col>
            <p className='title'>Privacy Policy</p>
            <p>Reach out to us anytime you like</p>
          </Col>
        </Row>
        <hr />
        <Row className='align-items-center'>
          <Col span={3}>
            <img src="/img/invite.png" alt="Pay" />
          </Col>
          <Col>
            <p className='title'>Invite</p>
            <p>invite others and receive 3 free coffee cups</p>
          </Col>
        </Row>
        <hr />
        <Row className='align-items-center' onClick={() => navigate("/")}>
          <Col span={3}>
            <img src="/img/logout.png" alt="Pay" />
          </Col>
          <Col>
            <p className='title'>Logout</p>
            <p>Manage apps you have connected</p>
          </Col>
        </Row>
        <hr />
      </div>
    </Container>
  )
}

export default Settings