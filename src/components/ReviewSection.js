import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewForm from './ReviewForm'

const colors = {
  normal: "#f4f5f6",
  yellow: "#FDCF2D"
}

const ReviewSection = ({ openPop, setOpenPop }) => {
  const stars = Array(5).fill(0)
  const [currentValue, setCurrentValue] = useState(4)
  const [colorRating, setColorRating] = useState()

  function handleRating(value) {
    setCurrentValue(value)
  }
  function handleMouseHover(value) {
    setColorRating(value)
  }
  return (
    <div className={(openPop) ? "feedback open" : "feedback"}>
      <div onClick={() => setOpenPop(false)} className="back-shadow"></div>
      <div className="feedback-box">
        <div className='line text-center'>
          <img src="../img/small-line.png" alt="line" />
        </div>
        <h4>Rate Experience</h4>
        {stars.map((_, index) => {
          return (
            <FaStar key={index} style={{ width: "24px", height: "21px", marginRight: "4px" }}
              color={(colorRating || currentValue) > index ? colors.yellow : colors.normal}
              onClick={() => handleRating(index + 1)}
              onMouseOver={() => handleMouseHover(index + 1)}
              onMouseLeave={() => setColorRating(undefined)}
            />
          )
        }
        )}
        <span style={{ fontSize: "25px", marginLeft: "8px" }}>{currentValue}</span>
        <ReviewForm />
      </div>
    </div>
  )
}

export default ReviewSection