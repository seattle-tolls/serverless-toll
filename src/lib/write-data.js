


const writeData = async (dataObj) => {

  const { name, url } = dataObj
  const date = Date.now()
  let data = {}

  // try {
  //   const tunnelData = await getData(`${tollURI}/${tunnel}`)
  //     console.log('TUNNEL DATA', tunnelData)
  // } catch (error) {
  //   console.error('ERROR: something went very wrong', error)
  // }

  // console.log('WRITE DATA-->', name,'|', url)

  if (!name || !url){
    throw new Error('Missing name or url')
  }

  return { name, url, date, data }
}


module.exports = writeData