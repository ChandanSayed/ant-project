import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons'
import { Row, Card } from "antd"
import HomeProjectHeadings from './HomeProjectHeadings'
import { recommendedList } from './RecommendedList'

const RecommendedProjects = () => {
  return (
    <div className="projects-recommend">
      <HomeProjectHeadings title="Recommended for you" link="#" />
      <Row>
        {recommendedList.map(list => (
          <Card
            key={list.id}
            title={<img src={list.src} alt="icon" />}
            extra={<h6>{list.rate}</h6>}
            style={{
              width: "48%",
            }}
          >
            <h6>{list.position}</h6>
            <p>{list.companyName}</p>
            <p><EnvironmentOutlined /> {list.companyName}</p>
          </Card>
        ))}
      </Row>
    </div>
  )
}

export default RecommendedProjects