'use strict'
const getData = require('../lib/get-data')
const { toll520, toll99, date } = require('../lib/constants')

const tollURI = process.env.TOLL_URI
const tunnel = process.env.TOLL_99
const bridge = process.env.TOLL_520

const getTolls = async event => {

  try {
    const tunnelData = await getData(`${tollURI}/${tunnel}`)
    const bridgeData = await getData(`${tollURI}/${bridge}`)
    return {
      statusCode: 200,
      body: JSON.stringify([
        {
          name: toll99,
          date,
          data: tunnelData,
        },
        {
          name: toll520,
          date,
          data: bridgeData,
        },
      ]),
    }
  }
  catch (err) {
    console.log('ERROR:', err)
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `ERROR: ${err}`,
      }),
    }
  }

}

module.exports = getTolls