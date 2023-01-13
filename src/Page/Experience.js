import React, { useState } from 'react'

import Container from '../Container/Container'
import ExperienceItem from '../components/ExperienceItem'
import Step from '../components/Step'
import QualificationFormBottom from '../components/QualificationFormBottom'
import QualificationWelcome from '../components/QualificationWelcome'

const Experience = () => {
  const [count, setCount] = useState(1)
  const qualificationCount = new Array(count).fill(null)
  function handleCount() {
    setCount((prev) => prev <= 2 ? prev + 1 : prev)
  }
  return (
    <Container title="Experience" className="Experience">

      <QualificationWelcome link="/qualifications" title="Add your past work experience" />

      <Step percent={100} step={3} />
      <form>
        {qualificationCount.map((_, i) => <ExperienceItem key={i} />)}


        <QualificationFormBottom handleCount={handleCount} title="Add another experience" link="/home" />
      </form>
    </Container>
  )
}

export default Experience