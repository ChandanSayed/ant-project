import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons'
import { Button, Row, Col } from "antd"

const JobList = (props) => {
  return (
    <>
      <Row className='job-list' onClick={props.onClick}>
        <Col span={4}>
          <img src={props.imgSrc} alt="dibble" />
        </Col>
        <Col span={16}>
          <div className="location">
            <h6>{props.title}</h6>
            <p><EnvironmentOutlined /> {props.location}</p>
          </div>
          <Button>Design</Button><Button>Part-time</Button><Button>Remote</Button>
        </Col>
        <Col span={4} style={{ textAlign: "right" }}><h6>{props.rate}</h6></Col>
      </Row>
      <hr />
    </>
  )
}

export default JobList