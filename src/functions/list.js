'use strict'

const list = async event => {
  // const toll = JSON.parse(event.body)  

  // console.log('EVENT', event.body)

  return{
    statusCode: 200,
    body: JSON.stringify(
      { hello: 'world' }
    ),
  }
}

module.exports = list