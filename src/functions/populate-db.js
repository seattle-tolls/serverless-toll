'use strict'

const writeData = require('../lib/write-data')

const tollURI = process.env.TOLL_URI
const tunnel = process.env.TOLL_99
const bridge = process.env.TOLL_520

const populateDb = async event => {
  let toll99 = {
    name: 'toll99',
    url: `${tollURI}/${tunnel}`,
  }

  let toll520 = {
    name: 'toll520',
    url: `${tollURI}/${bridge}`,
  }

  try{
    const tunnelData = await writeData(toll99)
    const bridgeData = await writeData(toll520)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'All worked out great',
        data: {
          tunnelData,
          bridgeData,
        },
      }),
    }
  }

  catch(err){
    console.log('ERROR: trying to populate the db', err)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Could not populate the db',
      }),
    }
  }

}

module.exports = populateDb

