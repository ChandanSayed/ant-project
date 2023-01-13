import React from 'react'
import { Row, Col } from "antd"

const HomeProjectHeadings = ({ title, link }) => {
  return (
    <Row>
      <Col span={14}><h5>{title}</h5></Col>
      <Col offset={4} span={6} style={{ textAlign: "right" }}><a href={link}>View All</a></Col>
    </Row>
  )
}

export default HomeProjectHeadings