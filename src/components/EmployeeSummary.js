import React from 'react'
import { Button } from 'antd'

const EmployeeSummary = () => {
  return (
    <div className="employee-summary">
      <h5>Summary By Employee</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates numquam quos incidunt labore porro odio ab veniam accusamus dicta quaerat? Soluta officia nostrum hic voluptates.</p>
      <a href="/" download>
        <Button><img src="../img/download.png" alt="download" />Download Attached File (<span>23 MB</span>)</Button>
      </a>
    </div>
  )
}

export default EmployeeSummary