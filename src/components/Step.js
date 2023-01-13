import React from 'react'
import { Progress } from 'antd'

const Step = ({ percent, step }) => {
  return (
    <>
      <Progress percent={percent} />
      <span>Step {step} of 3</span>
    </>
  )
}

export default Step