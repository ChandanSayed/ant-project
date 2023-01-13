import React from 'react'
import Container from "../Container/Container"
import { Tabs } from 'antd'
import WelcomeLoggedIn from '../components/WelcomeLoggedIn'
import ProfileWorkList from '../components/ProfileWorkList'
import { completedWork } from '../components/CompletedWorkList'
import AboutMe from '../components/AboutMe'
import PayrollContainer from '../components/PayrollContainer'
import { payrollList } from '../components/PayrollList'
import UserInfo from '../components/UserInfo'
const { TabPane } = Tabs

const Profile = () => {
  return (
    <Container title="Profile" className="Profile">

      <WelcomeLoggedIn leftBtnLink="/home" leftBtnIcon="/img/arrow-back.png" title="Profile" rightBtn={true} rightBtnLink="/settings" rightBtnIcon="/img/settings.png" />

      <div className="profile-container">
        <UserInfo image="/img/profile.png" name="Asfandyar Butt" position="Project Manager" />

        <Tabs defaultActiveKey="1">
          <TabPane tab="About Me" key="1" className='profile-details'>
            <AboutMe />
          </TabPane>
          <TabPane tab="Work History" key="2">
            <div className="work-details">

              {completedWork.map(list => <ProfileWorkList list={list} key={list.id} />)}

            </div>
          </TabPane>
          <TabPane tab="Payroll History" key="3">
            <div className="payroll-details">

              {payrollList.map(list => <PayrollContainer list={list} key={list.id} />)}

            </div>
          </TabPane>
        </Tabs>
      </div>
    </Container>
  )
}

export default Profile