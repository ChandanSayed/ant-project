import React, { useState } from 'react'
import { Statistic, Progress } from 'antd'

const { Countdown } = Statistic

const CountDownSection = () => {
  const [show, setShow] = useState(false)

  const deadline = Date.now() + 80 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
  const onFinish = () => {
    console.log('finished!');
  }
  const [time, setTime] = useState(deadline)
  console.log(time)
  return (
    <>
      {show ? <Progress onClick={() => setShow(false)} className='live' type="circle" width={150} percent={90} format={() => <Countdown title="" value={deadline} onFinish={onFinish} format="HH:mm:ss" />} /> : <Progress onClick={() => setShow(true)} className='preview' type="circle" width={150} percent={100} format={() => 'Start Working'} />}
    </>

  )
}

export default CountDownSection