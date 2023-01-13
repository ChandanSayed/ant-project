import React from 'react'
import Footer from '../components/Footer'
import Container from "../Container/Container"
import WelcomeLoggedIn from '../components/WelcomeLoggedIn'
import { payrollList } from '../components/PayrollList'
import PayrollContainer from '../components/PayrollContainer'

const Payslip = () => {
  return (
    <Container title="Paysilp" className="Payslip">
      <WelcomeLoggedIn leftBtnLink="/home" leftBtnIcon="/img/arrow-back.png" title="My payroll" rightBtn={false} />
      <div className="payroll-details">
        {payrollList.map(list => <PayrollContainer list={list} key={list.id} bottom={true} />)}
      </div>
      <Footer />
    </Container>
  )
}

export default Payslip