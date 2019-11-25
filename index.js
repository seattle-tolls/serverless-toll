'use strict'

require('dotenv').config()
const express = require('express')
const app = express()

const getData = require('./src/lib/getData')

const tollURI = process.env.LOCAL_TOLL_URI
const tunnel = process.env.LOCAL_TOLL_99
const bridge = process.env.LOCAL_TOLL_520

app.get('/api/get/tolls', async (req, res) => {
  try {
    const tunnelData = await getData(`${tollURI}/${tunnel}`)
    const bridgeData = await getData(`${tollURI}/${bridge}`)

    return res.json({
      message: 'Success',
      toll99: {
        name: '99 Tunnel',
        data: tunnelData,
      },
      toll520: {
        name: '520 Bridge',
        data: bridgeData,
      },
    })
  }
  catch (err) {
    console.log('ERROR:', err)
    return res.json({
      message: `ERROR: ${err}`,
    })
  }
})

app.listen(1337, () => console.log('Server Up at 1337'))