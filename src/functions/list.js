'use strict'
const dynamodb = require('../lib/dynamo-db')


const list = async event => {
  // const toll = JSON.parse(event.body)
  // console.log('EVENT', event.body)

  const scanParams = {
    TableName: process.env.DYNAMODB_TABLE,
  }

  let scanResults = {}

  try {
    scanResults = await dynamodb.scan(scanParams).promise()
  } catch (scanError) {
    console.log('ERROR: There was a problem scanning')
  }

  if(!scanResults.Items || 
    !Array.isArray(scanResults.Items) ||
    scanResults.Items.length === 0) {
      return { statusCode: 404 }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(scanResults.Items.map(toll => ({
        name: toll.name,
        date: toll.date,
        data: toll.data,
      }))),
    }
}

module.exports = list