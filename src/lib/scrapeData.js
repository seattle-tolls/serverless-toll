const cheerio = require('cheerio')
const parseData = require('./parseData')

const scrapeData = (html) => {
  const $ = cheerio.load(html)
  const tableArray = $('table').find('tbody')

  return {
    weekdays: parseData(tableArray[0]),
    weekend: parseData(tableArray[1]),
  }
}

module.exports = scrapeData