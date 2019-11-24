'use strict'

module.exports.getTolls = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        toll520: { name: '99 Tunnel' },
        toll99: { name: '520 Bridge' },
      },
    ),
  }
}