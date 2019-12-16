'use strict'

const cheerio = require('cheerio')
const parseData = require('./parse-data')

const scrapeData = (html) => {
  const $ = cheerio.load(html)
  const tableArray = $('table').find('tbody')

  return {
    weekdays: parseData(tableArray[0]),
    weekend: parseData(tableArray[1]),
  }
}

module.exports = scrapeData