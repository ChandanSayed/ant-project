import React from 'react'
import { Row, Col } from 'antd'
import PayrollBottom from './PayrollBottom'

const PayrollContainer = ({ list, bottom }) => {
  return (
    <div className="payroll-list">
      <Row>
        <Col span={14}>
          <h4>{list.duration}</h4>
        </Col>
        <Col span={10} className="text-right">
          <h4>#{list.memoNumber}</h4>
        </Col>
      </Row>
      <Row>
        <Col span={5}>
          <img src={list.src} alt="Icon" />
        </Col>
        <Col span={19}>
          <div className="location">
            <h6>{list.position}</h6>
            <p><img src="/img/pin.png" alt="pin" />{list.location}</p>
          </div>
        </Col>
      </Row>
      <div className="charge-details">
        <Row>
          <Col span={9}>
            <p>Per hour</p>
          </Col>
          <Col span={9} offset={6} className="text-right">
            <h6>{list.perHour}</h6>
          </Col>
        </Row>
        <Row>
          <Col span={9}>
            <p>Total hour</p>
          </Col>
          <Col span={9} offset={6} className="text-right">
            <h6>{list.workingHours}</h6>
          </Col>
        </Row>
        <Row>
          <Col span={9}>
            <h6>Total amount</h6>
          </Col>
          <Col span={9} offset={6} className="text-right">
            <h6>${list.totalAmount}</h6>
          </Col>
        </Row>
      </div>
      {bottom && <PayrollBottom />}
    </div>
  )
}

export default PayrollContainer