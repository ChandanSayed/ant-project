import React, { useState } from 'react'
import { Input, Row, Col, Radio } from 'antd'
const { TextArea } = Input

const ExperienceItem = () => {
  const [company, setCompany] = useState()
  const [position, setPosition] = useState()
  const [website, setWebsite] = useState()
  const [comment, setComment] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  return (
    <>
      <div className="input-block">
        <label htmlFor="company">Company / Organization</label>
        <Input value={company} onChange={e => setCompany(e.target.value)} id="company" className="form-control" placeholder='Add company' autoComplete='off' />
      </div>
      <div className="input-block">
        <label htmlFor="position">Position</label>
        <Input value={position} onChange={e => setPosition(e.target.value)} id="position" className="form-control" placeholder="Add position" autoComplete='off' />
      </div>
      <div className="input-block">
        <label htmlFor="website">Website</label>
        <Input value={website} onChange={e => setWebsite(e.target.value)} id="website" className="form-control" placeholder="For e.g. UX/UI Designer" autoComplete='off' />
      </div>

      <div className="input-block">
        <label htmlFor="comment">Details</label>
        <TextArea
          className='form-control'
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="For e.g. Responsibilties"
          autoSize={{
            minRows: 5,
            maxRows: 5,
          }}
        />
      </div>
      <div className="input-block">
        <Row>
          <Col span={11}>
            <label htmlFor="start">Start date</label>
            <Input value={startDate} onChange={e => setStartDate(e.target.value)} className="form-control" type="date" id='start' />
          </Col>
          <Col offset={2} span={11}>
            <label htmlFor="end">End date</label>
            <Input value={endDate} onChange={e => setEndDate(e.target.value)} className="form-control" type="date" id='end' />
          </Col>
        </Row>
      </div>
      <div className="input-block">
        <Radio>Currently work here</Radio>
      </div>
      <hr style={{ margin: "8px -15px" }} />
    </>
  )
}

export default ExperienceItem