const fetch = require('node-fetch')

const scrapeData = require('./scrapeData')

const getData = async (url) => {

  const link = await fetch(url)
  const buff = await link.buffer()
  const html = await buff.toString()

  const { weekdays, weekend} = scrapeData(html)

  const data = {
    weekdays,
    weekend,
  }

  return data
}
module.exports = getData