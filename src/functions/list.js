'use strict'
const dynamodb = require('../lib/dynamo-db')

const list = async event => {
  const scanParams = {
    TableName: process.env.DYNAMODB_TABLE,
  }

  let scanResults = {}

  try {
    scanResults = await dynamodb.scan(scanParams).promise()
  }
  catch (scanError) {
    console.log('ERROR: There was a problem scanning')
  }

  if(!scanResults.Items ||
    !Array.isArray(scanResults.Items) ||
    scanResults.Items.length === 0) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: 'No tolls found',
      }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(scanResults.Items.map(tollData => ({
      name: tollData.name,
      date: tollData.date,
      data: tollData.data,
      toll: tollData.toll
    }))),
  }
}

module.exports = list
