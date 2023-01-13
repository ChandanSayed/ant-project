import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Input } from 'antd'

const { TextArea } = Input

const ReviewForm = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')

  return (
    <form action="#">
      <div className="input-block">
        <label htmlFor="comment">Leave a comment</label>
        <TextArea
          className='form-control'
          id="comment"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="For e.g. Responsibilties"
          autoSize={{
            minRows: 5,
            maxRows: 5,
          }}
        />
      </div>
      <Button block onClick={() => navigate("/profile")}>Confirm</Button>
    </form>
  )
}

export default ReviewForm