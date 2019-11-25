'use strict'

const getChildrenArray = () => {
  return child => child.children
    .filter((child) => child.type === 'tag')
    .map(child => child.children[1].children[0].data)
}

const removeFunnyChars = (str) => {
  str = str.trim()
  const arr = [...str].map((s, i) => {
    if(/[\w\d:. $]/.test(s))
      return s

    if(s.charCodeAt(0) === 160) // remove weird &nbsp coming from the api
      return ' '
  })

  const result = arr.join('')
  return result
}

const getReducedArray = () => {
  return (curr, next) => {
    let [schedule, goodToGo, payByMail] = next
    let hour
    let startTime = schedule.split('to')[0].trim().split(' ')
    if(schedule.includes('Midnight') || schedule.includes('All day')){
      hour = 0
    }
    else if(startTime[1].includes('p')){
      hour = parseInt(startTime[0]) + 12
    }
    else hour = parseInt(startTime[0])
    return curr = {
      ...curr,
      [hour]:{
        schedule: removeFunnyChars(schedule),
        goodToGo: removeFunnyChars(goodToGo),
        payByMail: removeFunnyChars(payByMail),
      },
    }
  }
}

const parsedData = (data) => {
  return data.children
    .map(getChildrenArray()
    )
    .filter((child, i) => i !== 0)
    .reduce(getReducedArray(), {})
}

module.exports = (table) => {
  return parsedData(table)
}