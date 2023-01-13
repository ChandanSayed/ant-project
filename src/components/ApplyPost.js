import React, { useState } from 'react'
import { Row, Col, Button } from 'antd'
import { HeartFilled, HeartOutlined } from "@ant-design/icons"

const ApplyPost = ({ title }) => {
  const [heart, setHeart] = useState(0)
  return (
    <Row className='apply-post'>
      <Col span={20}>
        <Button block>{title}</Button>
      </Col>
      <Col span={4}>
        <Button>
          {/* <img src="/img/love.png" alt="love" /> */}


          {!heart ? <HeartOutlined onClick={() => setHeart(prev => prev + 1)} style={{ fontSize: '20px', color: '#2B3F50' }} /> : <HeartFilled style={{ fontSize: '20px', color: '#ef4626' }} />}
        </Button>
      </Col>
    </Row>
  )
}

export default ApplyPost