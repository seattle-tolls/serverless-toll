'use strict'
const AWS = require('aws-sdk')

let options = {}
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  }
}

const dynamodb = new AWS.DynamoDB.DocumentClient(options)

module.exports = dynamodb