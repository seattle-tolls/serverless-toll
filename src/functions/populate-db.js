'use strict'

const writeData = require('../lib/write-data')
const { toll520, toll99 } = require('../lib/constants')

const tollURI = process.env.TOLL_URI
const tunnel = process.env.TOLL_99
const bridge = process.env.TOLL_520

const populateDb = async event => {
  let tunnelToll = {
    name: '99 Tunnel',
    toll: toll99,
    url: `${tollURI}/${tunnel}`,
  }

  let bridgeToll = {
    name: '520 Bridge',
    toll: toll520,
    url: `${tollURI}/${bridge}`,
  }

  try{
    await writeData(tunnelToll)
    await writeData(bridgeToll)

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Success',
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

