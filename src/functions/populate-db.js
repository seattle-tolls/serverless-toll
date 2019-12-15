'use strict'

const getData = require('../lib/getData')


const tollURI = process.env.TOLL_URI
const tunnel = process.env.TOLL_99
const bridge = process.env.TOLL_520


const writeData = async (dataObj) => {

    const { name, url } = dataObj


  // // TODO: Get the toll data
  // try {
  //   const tunnelData = await getData(`${tollURI}/${tunnel}`)
  //     console.log('TUNNEL DATA', tunnelData)
  // } catch (error) {
  //   console.error('ERROR: something went very wrong', error)
  // }

  console.log(name, url)


  return 'happines'

}

const populateDb = async event => {

  let toll99 = {
    name: 'toll99',
    url: `${tollURI}/${tunnel}`
  }

  let toll520 = {
    name: 'toll520',
    url: `${tollURI}/${bridge}`
  }

const tunnelData = writeData(toll99)
const bridgeData = writeData(toll520)

  // TODO: Come up with the structure

  // TODO: Write to Dynamo Table
  // TODO: Do the operation twice


  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'all worked out great',
      data: {
        tunnelData,
        bridgeData,
      }
    })
  }
}

module.exports = populateDb

