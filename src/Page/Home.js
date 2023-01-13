import React, { useState } from 'react'
import "./Home.scss"
import Container from "../Container/Container"
import Footer from '../components/Footer'
import Search from '../components/Search'
import JobList from '../components/JobList'
import { searchJobs } from '../components/SearchJobsList'
import RecommendedProjects from '../components/RecommendedProjects'
import BrowseJobsButtons from '../components/BrowseJobsButtons'
import HomeProjectHeadings from '../components/HomeProjectHeadings'
import WelcomeLoggedInHome from '../components/WelcomeLoggedInHome'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [totalJobs, setTotalJobs] = useState(searchJobs)
  const navigate = useNavigate()
  return (
    <Container title="Welcome" className="Home">
      <WelcomeLoggedInHome />
      <Search />
      <div className="browse-jobs">
        <HomeProjectHeadings title="Browse by industry" link="#" />
        <BrowseJobsButtons />
      </div>
      <RecommendedProjects />
      <div className="jobs-nearby">
        <HomeProjectHeadings title="Jobs Nearby" link="#" />
        <div className="job-lists">
          {totalJobs.map((list, i) => (
            <JobList onClick={() => navigate(`./job-details/${list.id}`)} imgSrc={list.src} title={list.position} location={list.location} rate={list.rate} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default Home