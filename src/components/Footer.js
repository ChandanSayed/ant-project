import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Row } from "antd"
import "./Footer.scss"
import StateContext from '../StateContext'

const Footer = () => {
  const appState = useContext(StateContext)
  return (
    <div className="footer-nav">
      <Row>
        <div style={{ width: "20%" }}>
          <Link to="/home"><img src="/img/home.png" alt="home" />
            <p>Home</p></Link>
        </div>
        <div style={{ width: "20%" }}>
          <Link to="/pending-attendance"> <img src="/img/job.png" alt="jobs" />
            <p>Jobs</p></Link>
        </div>
        <div className='round' style={{ width: "20%" }}>
          <p>
            <Link to={appState.postJob ? "/post-job" : "/schedule"}>
              <img src="/img/plus.png" alt="plus" />
            </Link>
          </p>
        </div>
        <div style={{ width: "20%" }}>
          <Link to="/payslip"><img src="/img/slip.png" alt="slip" />
            <p>Payslip</p></Link>
        </div>
        <div style={{ width: "20%" }}>
          <Link to="/profile">
            <img src="/img/user.png" alt="user" />
            <p>Profile</p>
          </Link>
        </div>
      </Row>
    </div>
  )
}

export default Footer