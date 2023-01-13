import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Button } from 'antd'

const WelcomeLoggedIn = (props) => {
  const navigate = useNavigate()
  return (
    <div className="welcome">
      <Row className='justify-content-center align-items-center'>
        <Col span={3}>
          <Button className='neutral-btn-5' onClick={() => navigate(props.leftBtnLink)}>
            <img src={props.leftBtnIcon} alt="backBtn" />
          </Button>
        </Col>
        <Col span={18} className="text-center">
          <h5 className="title">{props.title}</h5>
        </Col>
        <Col span={3}>
          {props.rightBtn && <Button className='neutral-btn-5' onClick={() => navigate(props.rightBtnLink)}>
            <img src={props.rightBtnIcon} alt="forwardBtn" />
          </Button>}
        </Col>
      </Row>
    </div>
  )
}

export default WelcomeLoggedIn