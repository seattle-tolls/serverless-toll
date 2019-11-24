'use strict'

const getData = require('../lib/getData')

const tollURI = process.env.TOLL_URI
const tunnel = process.env.TOLL_99
const bridge = process.env.TOLL_520

module.exports = {
  getTolls: async event => {
    try {
      const tunnelData = await getData(`${tollURI}/${tunnel}`)
      const bridgeData = await getData(`${tollURI}/${bridge}`)
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Success',
          toll99: {
            name: '99 Tunnel',
            data: tunnelData,
          },
          toll520: {
            name: '520 Bridge',
            data: bridgeData,
          },
        }),
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
  },
}