import React from 'react'

import Container from '../Container/Container'

import SignupWelcome from '../components/SignupWelcome'
import SignUpForm from '../components/SignUpForm'
import Step from '../components/Step'


const SignUp = () => {

  return (
    <Container title="Sign-Up" className="Sign-Up">
      <SignupWelcome />
      <Step percent={33.33} step={1} />
      <SignUpForm />
    </Container>
  )
}

export default SignUp