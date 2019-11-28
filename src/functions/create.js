'use strict'

const uuid = require('uuid')
const dynamodb = require('../lib/dynamodb')

const create = async event => {
  // verify info
  const data = JSON.parse(event.body)
  const {
    toll, tollName, hour, isWeekday,
    goodToGo, payByMail, schedule,
  } = data

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      toll, tollName, hour, isWeekday,
      goodToGo, payByMail, schedule,
    },
  }

  // add it to dynamo
  dynamodb.put(params, (error) => {
    if (error)
      console.log('ERROR:', error)
    return
  })

  // create response

  console.log('EVENT', data)

  return{
    statusCode: 200,
    body: JSON.stringify(params.Item),
  }
}

module.exports = create
