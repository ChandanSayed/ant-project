import React from 'react'
import { Row, Col } from 'antd'

const TimeSheet = ({ list }) => {
  return (
    <div className="time-sheet-list">
      <div className="attendance-time-table">
        <Row>
          <Col span={1}>
            <img src="/img/calender.png" alt="calendar" />
          </Col>
          <Col span={21} style={{ paddingLeft: "6px" }}>
            <h6>{list.date}</h6>
          </Col>
          <Col span={2}>
            <img src="./img/three-dots.png" alt="dots" />
          </Col>
        </Row>
        <Row>
          <Col span={7}>
            <h6>{list.checkIn}</h6>
            <small>Checked in</small>
          </Col>
          <Col span={7}>
            <h6>{list.checkOut}</h6>
            <small>Checked out</small>
          </Col>
          <Col span={4}>
            <h6>{list.break}</h6>
            <small>break</small>
          </Col>
          <Col span={6}>
            <h6>{list.total}</h6>
            <small>total</small>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default TimeSheet