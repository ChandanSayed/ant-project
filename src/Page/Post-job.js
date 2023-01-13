import React from 'react'


import Footer from '../components/Footer'
import Container from "../Container/Container"
import WelcomeLoggedIn from '../components/WelcomeLoggedIn'
import ApplyPost from '../components/ApplyPost'
import PostJobInputFields from '../components/PostJobInputFields'



const PostJob = () => {


  return (
    <Container title="Post Job" className="Post-Job">

      <WelcomeLoggedIn leftBtnLink="/profile" leftBtnIcon="/img/arrow-back.png" title="Post a job" rightBtn={false} rightBtnLink="/settings" rightBtnIcon="/img/three-dots.png" />
      <PostJobInputFields />
      <ApplyPost title="Post for free" />
      <Footer />
    </Container>
  )
}

export default PostJob