import React, { useState } from 'react'
import Container from '../Container/Container'
import Qualification from '../components/Qualification'
import Step from '../components/Step'
import QualificationWelcome from '../components/QualificationWelcome'
import QualificationFormBottom from '../components/QualificationFormBottom'

const Qualifications = () => {
  const [count, setCount] = useState(1)
  const qualificationCount = new Array(count).fill(null)
  function handleCount() {
    setCount((prev) => prev <= 2 ? prev + 1 : prev)
  }
  return (
    <Container title="Qualifications" className="Qualifications">

      <QualificationWelcome link="/sign-up" title="Add your Educational Qualifications" />

      <Step percent={66.67} step={2} />

      <form>
        {qualificationCount.map((_, i) => <Qualification key={i} />)}

        <QualificationFormBottom handleCount={handleCount} title="Add another experience" link="/experience" />
      </form>
    </Container>
  )
}

export default Qualifications