'use strict'

const p360 = require('p360')

const createJobs = job => {
  return new Promise((resolve, reject) => {
    p360(job, (err, data) => {
      if (err) {
        console.error(err)
        return reject(err.message || err)
      } else {
        data.request = job
        return resolve(data)
      }
    })
  })
}

module.exports = jobs => {
  const createdJobs = Array.isArray(jobs) ? jobs.map(createJobs) : [createJobs(jobs)]
  return createdJobs
}
