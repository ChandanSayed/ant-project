import React from 'react'
import { Row, Button, Col } from 'antd'
const ConfirmRevision = ({ setOpenPop }) => {
  return (
    <div className="confirm-revision">
      <Row>
        <Col span={11}>
          <Button className='revision' block>Request Revision</Button>
        </Col>
        <Col span={11} offset={2}>
          <Button onClick={() => setOpenPop(true)} className='confirm' block>Confirm & Review</Button>
        </Col>
      </Row>
    </div>
  )
}

export default ConfirmRevision