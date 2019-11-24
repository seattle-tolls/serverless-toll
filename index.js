require('dotenv').config()
const express = require('express')
const app = express()

const getData = require('./src/lib/getData')

const tollURI = process.env.TOLL_URI
const tunnel = process.env.TOLL_520
const bridge = process.env.TOLL_99

app.get('/api/get/tolls', async (req, res) => {
  try {
    const tunnelData = await getData(`${tollURI}/${tunnel}`)
    const bridgeData = await getData(`${tollURI}/${bridge}`)
    return res.json({
      statusCode: 200,
      message: 'Success',
      payload: {
        toll520: {
          name: '99 Tunnel',
          data: tunnelData,
        },
        toll99: {
          name: '520 Bridge',
          data: bridgeData,
        },
      },
    })

  }
  catch (err) {
    console.log('ERROR:', err)
    return res.json({
      statusCode: 400,
      message: `ERROR: ${err}`,
    })
  }
})

app.listen(1337, () => console.log('Server Up at 1337'))