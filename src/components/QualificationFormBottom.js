import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'antd'

const QualificationFormBottom = ({ handleCount, link, title }) => {
  return (
    <div>
      <Button onClick={handleCount} type='primary' className='add-another-btn' block>{title}</Button>
      <Link to={link}>
        <Button type='primary' className='sign-up-btn' block>Save & Continue</Button>
      </Link>
    </div>
  )
}

export default QualificationFormBottom