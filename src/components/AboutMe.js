import React from 'react'
import { Row, Col } from 'antd'

const AboutMe = () => {
  return (
    <>
      <Row className='stats justify-content-between'>
        <Col>
          <p>2.7k</p>
          <span>Jobs Completed</span>
        </Col>
        <Col>
          <p> <img src="/img/star-small.png" alt="star" /> 4.7</p>
          <span>Overall Rating</span>
        </Col>
      </Row>
      <Row className='stats justify-content-between'>
        <Col>
          <p>$10K+</p>
          <span>Total Earnings</span>
        </Col>
        <Col>
          <p>178</p>
          <span>Total Hours</span>
        </Col>
      </Row>
      <div className="location">
        <h5>Location</h5>
        <p><img src="/img/pin.png" alt="pin" />Company name in Miami, Florida</p>
      </div>
      <div className="about-me">
        <h5>About me</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at aspernatur aliquid error eum veniam placeat ratione provident voluptate cum?</p>
        <a href="/">Read more</a>
      </div>
      <hr style={{ color: "#f4f5f6", margin: "16px -15px" }} />
      <div className="work-experience">
        <h5>Work Experience</h5>
        <h4>Senior UI/UX Designer</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fuga, quas optio cupiditate odio ad dolores nulla? Iste vero voluptatum ipsam aliquam provident placeat, tempora delectus vitae perferendis quas in.</p>
        <a href="/">Visit Website <img src="/img/external-link.png" alt="External Link" /></a>
      </div>
      <hr style={{ color: "#f4f5f6", margin: "16px -15px" }} />
      <div className="education">
        <h5>Education</h5>
        <h4>Graphic Designing</h4>
        <p>University name | 2019 - 2020</p>
        <p>Bachelor Degree</p>
      </div>
    </>
  )
}

export default AboutMe