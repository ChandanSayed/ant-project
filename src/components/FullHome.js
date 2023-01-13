import React from 'react'
import { Row } from "antd"

import Container from "../Container/Container"
import Footer from '../components/Footer';
import Search from '../components/Search';

import HomeContent from '../components/HomeContent'

const FullHome = () => {
  return (
    <Container title="Welcome" className="Home">
      <div className="welcome">
        <Row>
          <div className="brand">
            <img src="./img/logo-hr.png" alt="logo" />
            <span>Freeboh</span>
          </div>
          <div className="avatar">
            <img src="./img/avatar.png" alt="avatar" />
          </div>
        </Row>
        <p><span>Welcome Back, </span>Jacob</p>
        <h1>Let's Find a job for you.</h1>
      </div>
      <Search />

      <HomeContent />

      <Footer />
    </Container>
  )
}

export default FullHome