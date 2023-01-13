import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import WelcomeLoggedIn from '../components/WelcomeLoggedIn'
import Container from '../Container/Container'
import { searchJobs } from '../components/SearchJobsList'
import Footer from '../components/Footer'
import JobDetailsSection from '../components/JobDetailsSection'
import ApplyPost from '../components/ApplyPost'


const JobDetails = () => {
  const [jobDetails, setJobDetails] = useState(searchJobs)
  const { id } = useParams()
  const getId = id
  useEffect(() => {
    function fetchPost() {
      setJobDetails(prev => prev.filter(list => list.id == getId))
    }
    fetchPost()
  }, [id])


  return (
    <Container title="Job Details" className="Job-Details">
      <WelcomeLoggedIn leftBtnIcon="/img/arrow-back.png" title="Job Details" leftBtnLink={-1} rightBtn={false} />

      {jobDetails.map(list => <JobDetailsSection list={list} key={list.id} />)}
      <ApplyPost title="Apply now" />
      <Footer />
    </Container>
  )
}

export default JobDetails