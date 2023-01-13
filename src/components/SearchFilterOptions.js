import React from 'react'
import { Row, Button, Col, Select } from 'antd'
const { Option } = Select

const SearchFilterOptions = () => {
  return (
    <Row className='filter-options'>
      <Col>
        <Button><img src="./img/tabler-icon.png" alt="backBtn" /></Button>
      </Col>

      <Col>
        <Select
          defaultValue="Remote"
          className='active'
        >
          <Option value="Remote">Remote</Option>

          <Option value="on-site">On-Site</Option>

        </Select>
      </Col>
      <Col>
        <Select
          defaultValue="Date posted"
        >
          <Option value="1">11-11-11</Option>

          <Option value="2">12-12-12</Option>

        </Select>
      </Col>
      <Col>
        <Select
          defaultValue="Experience Label"
        >
          <Option value="im">Intermediate</Option>

          <Option value="ex">Expert</Option>

        </Select>
      </Col>
    </Row>
  )
}

export default SearchFilterOptions