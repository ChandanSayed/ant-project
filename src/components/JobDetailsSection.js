import React from 'react'
import { Button, Row, Col, Tabs } from "antd"
const { TabPane } = Tabs

const JobDetailsSection = ({ list }) => {
  return (
    <>
      <div className="job-icon text-center">
        <img src={list.src} alt="" />
      </div>
      <Row className='job-list'>
        <Col span={20}>
          <div className="location">
            <h4>{list.position}</h4>
            <p><img src="/img/pin.png" alt="Icon" /> {list.location}</p>
          </div>
          <Button><img src="/img/calender-colored.png" alt="Icon" /> Design</Button><Button><img src="/img/pin.png" alt="Icon" /> Part-time</Button><Button><img src="/img/design.png" alt="Icon" /> Remote</Button>
        </Col>
        <Col span={4} style={{ textAlign: "right" }}><h6>{list.rate}</h6></Col>
      </Row>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Job Description" key="1">
          {list.jobDes}
        </TabPane>
        <TabPane tab="Company Info" key="2">
          {list.comInfo}
        </TabPane>
      </Tabs>
    </>
  )
}

export default JobDetailsSection