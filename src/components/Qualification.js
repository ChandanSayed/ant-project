import React, { useState } from 'react'
import { Input, Row, Select, Col, Radio } from 'antd'
const { Option } = Select

const Qualification = () => {
  const [degree, setDegree] = useState("")
  const [program, setProgram] = useState("Bachelor")
  const [school, setSchool] = useState("")
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  return (
    <>
      <div className="input-block">
        <label htmlFor="degree">Degree</label>
        <Input onChange={(e) => setDegree(e.target.value)} value={degree} id="degree" className="form-control" placeholder="For e.g. UX/UI Designer" autoComplete='off' />
      </div>
      <div className="input-block">
        <label htmlFor="program">Program Type</label>
        <Select
          id='program'
          defaultValue={program}
          onChange={(value) => setProgram(value)}
        >
          <Option value="Bachelor">Bachelor</Option>
          <Option value="msc">MSc</Option>
        </Select>
      </div>
      <div className="input-block">
        <label htmlFor="school">School Name</label>
        <Input onChange={value => setSchool(value)} value={school} id="school" className="form-control" placeholder="For e.g. Yale University" autoComplete='off' />
      </div>
      <div className="input-block">
        <Row>
          <Col span={11}>
            <label htmlFor="start">Start date</label>
            <Input onChange={(e) => setStartDate(e.target.value)} value={startDate} className="form-control" id='start' type="date" />

          </Col>
          <Col offset={2} span={11}>
            <label htmlFor="end">End date</label>
            <Input onChange={(e) => setEndDate(e.target.value)} value={endDate} className="form-control" type="date" id='end' />
          </Col>
        </Row>
      </div>
      <div className="input-block">
        <Radio>Ongoing</Radio>
      </div>
      <hr style={{ margin: "8px -15px" }} />
    </>
  )
}

export default Qualification