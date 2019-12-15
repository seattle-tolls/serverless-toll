'use strict'

const dynamodb = require('./dynamo-db')
const getData = require('./get-data')

const writeData = async (dataObj) => {

  const { name, url } = dataObj
  const date = Date.now()
  let data = {}

  if (!name || !url){
    console.log('ERROR: Missing name or url |', name, url)
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
    Item: { name, date, data }
  }

  let putResult = {}

  try {
    putResult = await dynamodb.put(putParams).promise()
    console.log(putResult)
  } catch (err) {
    console.log('ERROR: Problem writing to DynamoDB', err)
    throw new Error('ERROR: Problem writing to DynamoDB')
  }
  return putResult
}

module.exports = writeData