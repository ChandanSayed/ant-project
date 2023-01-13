import React, { useState } from 'react'
import { Button, Input } from 'antd'
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons'
import Container from '../Container/Container'
import Footer from '../components/Footer'
import { searchJobs } from '../components/SearchJobsList'
import JobList from '../components/JobList'
import WelcomeLoggedIn from '../components/WelcomeLoggedIn'
import { useNavigate } from 'react-router-dom'
import SearchFilterOptions from '../components/SearchFilterOptions'


const Search = () => {
  const [totalJobs, setTotalJobs] = useState(searchJobs)
  const navigate = useNavigate()
  return (
    <Container title="Search Jobs" className="Search-Jobs">

      <WelcomeLoggedIn leftBtnIcon="/img/arrow-back.png" leftBtnLink="/home" title="Search Results" rightBtn={true} rightBtnIcon="/img/tabler-icon.png" />

      <div className='search-section'>
        <Input prefix={<SearchOutlined />} placeholder="UI Designer" size="medium" suffix={<Button><EnvironmentOutlined />Mainland, Mi</Button>} />
      </div>

      <div className="job-options">
        <SearchFilterOptions />
      </div>
      <div className="job-lists">
        {totalJobs.map((list) => (
          <JobList onClick={() => navigate(`./job-details/${list.id}`)} imgSrc={list.src} title={list.position} location={list.location} rate={list.rate} key={list.id} id={list.id} />
        ))}
      </div>
      <Footer />
    </Container>
  )
}

export default Search