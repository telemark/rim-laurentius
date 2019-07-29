'use strict'

const getNextJobFromQueue = require('./lib/get-next-job-from-queue')
const getFileData = require('./lib/get-file-data')
const getContact = require('./lib/get-contact')
const syncContact = require('./lib/sync-contact')
const getCase = require('./lib/get-case')
const addCase = require('./lib/add-case')
const addDocument = require('./lib/add-document')
const signOffDocument = require('./lib/signoff-document')
const saveJobDone = require('./lib/save-job-done')
const saveJobStatus = require('./lib/save-job-status')
const deleteJobFromQueue = require('./lib/delete-job-from-queue')
const logger = require('./lib/logger')

getNextJobFromQueue()
  .then(getFileData)
  .then(getContact)
  .then(syncContact)
  .then(getCase)
  .then(addCase)
  .then(addDocument)
  .then(signOffDocument)
  .then(saveJobStatus)
  .then(saveJobDone)
  .then(deleteJobFromQueue)
  .then(data => {
    logger('finished', JSON.stringify(data))
    process.exit(0)
  }).catch(err => {
    logger(['error', JSON.stringify(err)])
    process.exit(1)
  })
