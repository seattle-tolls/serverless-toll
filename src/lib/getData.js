const cheerio = require('cheerio')
const fetch = require('node-fetch')

const getData = async (url) => {

  const link = await fetch(url)
  const buff = await link.buffer()
  const html = await buff.toString()

  console.log('HTML -->', html)

  const data = {
    weekdays: html,
    weekend: html,
  }

  return (
    data
  )
}

module.exports = getData