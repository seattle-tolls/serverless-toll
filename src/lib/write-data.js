'use strict'

const dynamodb = require('./dynamo-db')
const getData = require('./get-data')
const { date } = require('./constants')

const writeData = async (dataObj) => {

  const { name, url, toll} = dataObj
  let data = {}

  if (!name || !url || !toll){
    console.log('ERROR: Missing toll, name or url |', toll, name, url)
    throw new Error('Missing name or url')
  }

  try {
    data = await getData(url)
  }
  catch (err) {
    console.log('ERROR: Problem getting the data from url |', err)
    throw new Error('ERROR: Problem getting the data from url')
  }

  const putParams = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: { name, date, data, toll },
  }

  let putResult = {}

  try {
    putResult = await dynamodb.put(putParams).promise()
    console.log(putResult)
  }
  catch (err) {
    console.log('ERROR: Problem writing to DynamoDB', err)
    throw new Error('ERROR: Problem writing to DynamoDB')
  }
  return putResult
}

module.exports = writeData
