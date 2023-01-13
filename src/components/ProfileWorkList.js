import React from 'react'
import { Row, Button, Col } from 'antd'


const ProfileWorkList = ({ list }) => {
  return (
    <>
      <div className="work-list">
        <Row>
          <Col span={4}>
            <img src={list.src} alt="Icon" />
          </Col>
          <Col span={15}>
            <div className="location">
              <h6>{list.position}</h6>
              <p><img src="/img/pin.png" alt="pin" />{list.location}</p>
            </div>
          </Col>
          <Col span={5}>
            <Button>{list.jobType}</Button>
          </Col>
        </Row>
        <p>{list.duration}</p>
        <Row className='earning-details'>
          <Col span={9}>
            <h4>{list.totalEarning}</h4>
            <span>Total Earning</span>
          </Col>
          <Col span={7}>
            <h4>{list.perHour}</h4>
            <span>Per hour</span>
          </Col>
          <Col span={8}>
            <h4>{list.workingHours}</h4>
            <span>Working hours</span>
          </Col>
        </Row>
        <div className="average-rating">
          <span>
            <img src="/img/star-mini.png" alt="mini star" />
            <img src="/img/star-mini.png" alt="mini star" />
            <img src="/img/star-mini.png" alt="mini star" />
            <img src="/img/star-mini.png" alt="mini star" />
            <img src="/img/star-mini.png" alt="mini star" /><small>4.5</small></span>
        </div>
        <p className='feedback'><i>"{list.feedback}"</i></p>
      </div>
      <hr />
    </>
  )
}

export default ProfileWorkList