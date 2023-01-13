import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons'
import { Button, Row, Col, Card } from "antd"

const HomeContent = () => {
  return (
    <>
      <div className="browse-jobs">
        <Row>
          <Col span={14}><h5>Browse By Industry</h5></Col>
          <Col offset={4} span={6} style={{ textAlign: "right" }}><a href="#">View All</a></Col>
        </Row>
        <Button>Banking</Button>
        <Button>Accounting</Button>
        <Button>Advertising</Button>
        <Button>Design</Button>
        <Button>Digital Media</Button>
        <Button>Health Care</Button>
        <Button>Hospitality & Tourism</Button>
      </div>
      <div className="projects-recommend">
        <Row>
          <Col span={14}><h5>Recommended for you</h5></Col>
          <Col offset={4} span={6} style={{ textAlign: "right" }}><a href="#">View All</a></Col>
        </Row>
        <Row>
          <Card
            title={<img src='./img/chrome.png' atr="icon" />}
            extra={<h6>$20/hr</h6>}
            style={{
              width: "48%",
            }}
          >
            <h6>UI/UX Designer</h6>
            <p>Ovatic Solution</p>
            <p><EnvironmentOutlined /> Florida, MI</p>
          </Card>
          <Card
            title={<img src='./img/layer.png' atr="icon" />}
            extra={<h6>$20/hr</h6>}
            style={{
              width: "48%",
            }}
          >
            <h6>UI/UX Designer</h6>
            <p>Ovatic Solution</p>
            <p><EnvironmentOutlined /> Florida, MI</p>
          </Card>
        </Row>
      </div>
      <div className="jobs-nearby">
        <Row>
          <Col span={10}><h5>Jobs Nearby</h5></Col>
          <Col offset={8} span={6} style={{ textAlign: "right" }}><a href="#">View All</a></Col>
        </Row>
        <div className="job-lists">
          <Row className='job-list'>
            <Col span={4}>
              <img src="./img/dibble.png" alt="dibble" />
            </Col>
            <Col span={16}>
              <div className="location">
                <h6>UI/UX Designer</h6>
                <p><EnvironmentOutlined /> Company name in Miami, Florida</p>
              </div>
              <Button>Design</Button><Button>Part-time</Button><Button>Remote</Button>
            </Col>
            <Col span={4} style={{ textAlign: "right" }}><h6>$15/hr</h6></Col>
          </Row>
          <hr />
          <Row className='job-list'>
            <Col span={4}>
              <img src="./img/dibble.png" alt="dibble" />
            </Col>
            <Col span={16}>
              <div className="location">
                <h6>UI/UX Designer</h6>
                <p><EnvironmentOutlined /> Company name in Miami, Florida</p>
              </div>
              <Button>Design</Button><Button>Part-time</Button><Button>Remote</Button>
            </Col>
            <Col span={4} style={{ textAlign: "right" }}><h6>$15/hr</h6></Col>
          </Row>
          <hr />
        </div>
      </div>
    </>
  )
}

export default HomeContent