import React from 'react'

const UserInfo = ({ image, name, position }) => {
  return (
    <>
      <div className="profile-img text-center">
        <img src={image} alt="profile" />
      </div>
      <div className="profile-description text-center">
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </>
  )
}

export default UserInfo