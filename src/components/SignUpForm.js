import React, { useState } from 'react'
import { Link } from "react-router-dom"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Input, Button } from 'antd'

const { TextArea } = Input

const SignUpForm = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    cPassword: "",
    pNumber: "",
    comment: ""
  })
  function handleInput(e) {
    setValue(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }
  console.log(value)
  return (
    <form>
      <div className="input-block">
        <label htmlFor="email">Email</label>
        <Input onChange={handleInput} id="email" className="form-control" placeholder='xyz@gmail.com' autoComplete='off' />
      </div>
      <div className="input-block">
        <label htmlFor="password">Password</label>
        <Input onChange={handleInput} id="password" type="password" className="form-control" placeholder="Type here" autoComplete='off' />
      </div>
      <div className="input-block">
        <label htmlFor="cPassword">Confirm Password</label>
        <Input onChange={handleInput} id="cPassword" type="password" className="form-control" placeholder="Type here" autoComplete='off' />
      </div>
      <div className="input-block">
        <label htmlFor="pNumber">Phone Number</label>
        <PhoneInput
          id="pNumber"
          country={'pk'}
          value={value.pNumber}
          onChange={e => setValue(prev => ({ ...prev, pNumber: e }))}
        />
      </div>
      <div className="input-block">
        <label htmlFor="comment">About Me</label>
        <TextArea
          className='form-control'
          id="comment"
          value={value.comment}
          onChange={handleInput}
          placeholder="For e.g. Work experience, Skills, Expertise"
          autoSize={{
            minRows: 5,
            maxRows: 5,
          }}
        />
      </div>
      <div className="login-buttons">
        <Link to="/qualifications">
          <Button htmlType='submit' type='primary' className='sign-up-btn' block>Sign up & Continue</Button>
        </Link>
      </div>
    </form>
  )
}

export default SignUpForm