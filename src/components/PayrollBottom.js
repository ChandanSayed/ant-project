import React from 'react'
import { Row, Col, Button } from 'antd'

const PayrollBottom = () => {
  return (
    <>
      <Row className='dotted-line' style={{ flexWrap: "nowrap" }}>
        <Col className='circle circle-left'></Col>
        <Col span={24}>
          <img src="./img/line.png" alt="line" />
        </Col>
        <Col className='circle circle-right'></Col>
      </Row>
      <Row className='view-download'>
        <Col span={4}>
          <Button className='download'>
            <img src="./img/circle-arrow-down.png" alt="down" />
          </Button>
        </Col>
        <Col span={9} offset={11}>
          <Button>View Payslip</Button>
        </Col>
      </Row>
    </>
  )
}

export default PayrollBottom