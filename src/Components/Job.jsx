import React, { useEffect } from 'react'
// import { getAllJobs } from '../api-call/api-client';

export const Job = ({currentJob}) => {
   
  return (
    <div>
      <p> {currentJob.title} </p> 
      <p>Job Position : {currentJob.position}</p>&nbsp;
      <p>Job Perks :{currentJob.perks}</p>
      <p>Job Description : {currentJob.description}</p>
      <p> Salary : {currentJob.salaryRange.from}-{currentJob.salaryRange.to}
      </p>
      <hr />
    </div>
  )
}
