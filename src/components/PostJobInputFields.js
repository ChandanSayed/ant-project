import React, { useState } from 'react'
import { Select, Input } from 'antd'
import { SearchOutlined } from "@ant-design/icons"

const { Option } = Select
const { TextArea } = Input

const PostJobInputFields = () => {
  const [inputValue, setInputValue] = useState({
    jobTitle: "",
    company: "",
    location: "",
    description: "",
    workplace: "",
    jobTime: "",
    category: "",
  })
  const handleChange1 = (value) => {
    // console.log(`selected ${value}`)
    setInputValue(prev => ({ ...prev, workplace: value }))
  }
  const handleChange2 = (value) => {
    // console.log(`selected ${value}`)
    setInputValue(prev => ({ ...prev, jobTime: value }))
  }
  const handleChange3 = (value) => {
    // console.log(`selected ${value}`)
    setInputValue(prev => ({ ...prev, category: value }))
  }
  function handleInput(e) {
    setInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  console.log(inputValue)
  return (
    <>
      <div className="input-block">
        <Input onChange={handleInput} name="jobTitle" className='form-control border-bottom' placeholder='Job title' />
      </div>
      <div className="input-block">
        <label htmlFor="company">Company name</label>
        <Input onChange={handleInput} name='company' size="large" prefix={<SearchOutlined />} className='form-control' placeholder='Company Name' id='company' />
      </div>
      <div className="input-block">
        <label htmlFor="workplace">Workplace Type</label>
        <Select
          name="workplace"
          id='workplace'
          defaultValue="Select Type"
          onChange={handleChange1}
        >
          <Option value="onsite">On-Site</Option>
          <Option value="remote">Remote</Option>
        </Select>
      </div>
      <div className="input-block">
        <label htmlFor="location">Job location</label>
        <Input onChange={handleInput} name="location" className='form-control' placeholder='Type here' id='location' />
      </div>
      <div className="input-block">
        <label htmlFor="jobTime">Job time</label>
        <Select
          name='jobTime'
          id='jobTime'
          defaultValue="Select Time"
          onChange={handleChange2}
        >
          <Option value="Part-time">Part-time</Option>
          <Option value="Full time">Full time</Option>
        </Select>
      </div>
      <div className="input-block">
        <label htmlFor="category">Category</label>
        <Select
          name='category'
          id='category'
          defaultValue="Select Category"
          onChange={handleChange3}
        >
          <Option value="Design">Design</Option>
          <Option value="Develop">Develop</Option>
        </Select>
      </div>
      <div className="input-block">
        <label htmlFor="jobDescription">Job Description</label>
        <TextArea
          onChange={handleInput}
          name='description'
          className='form-control'
          id="jobDescription"
          value={inputValue.description}
          placeholder="Type here"
          autoSize={{
            minRows: 5,
            maxRows: 5,
          }}
        />
      </div>
    </>
  )
}

export default PostJobInputFields