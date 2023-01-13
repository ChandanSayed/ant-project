import React from 'react'
import { Link } from "react-router-dom"
import { Row, Button, Col } from 'antd'

const AttendanceList = ({ list }) => {
  return (
    <Link to={`/job-review/${list.id}`}><div className="attendance-list">
      <div className="attendance-user-details">
        <Row className='align-items-center portrait-container'>
          <Col span={5}>
            <img src={list.src} alt="portrait" />
          </Col>
          <Col span={19}>
            <h4>{list.name}</h4>
            <p>{list.role}</p>
          </Col>
        </Row>
        <span>Job Description</span>
        <Row>
          <Col span={18}>
            <div className="location">
              <h4>Location</h4>
              <p><img src="/img/pin.png" alt="pin" />{list.location}</p>
            </div>
          </Col>
          <Col span={6} className="text-right">
            <Button>{list.jobType}</Button>
          </Col>
        </Row>
      </div>
      <div className="attendance-time-table">
        <span>Attendance awaiting approval</span>
        <Row>
          <Col>
            <img src="/img/calender.png" alt="calendar" />
          </Col>
          <Col>
            <h6>{list.date}</h6>
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
    </Link>
  )
}

export default AttendanceList