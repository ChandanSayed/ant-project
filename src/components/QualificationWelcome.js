import React from 'react'
import { Link } from "react-router-dom"
import { Row, Button } from 'antd';

const QualificationWelcome = ({ link, title }) => {
  return (
    <div className="welcome">
      <Row>
        <Link to={link}>
          <Button className='neutral-btn-5'><img src="/img/arrow-back.png" alt="backBtn" /></Button>
        </Link>
      </Row>
      <h1>{title}</h1>
    </div>
  )
}

export default QualificationWelcome