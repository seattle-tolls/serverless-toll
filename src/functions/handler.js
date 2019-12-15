'use strict'

const listTolls = require('./list')
const populateDb = require('./populate-db')
const getTollNoDynamo = require('./get-toll-no-dynamo')

module.exports = {
  getTolls: getTollNoDynamo,
  list: listTolls,
  populate: populateDb,
}