const updateDb = async event => {
  // console.log(event.body)
  console.log(event)

  console.log(`---> I'm a cron job mufuka`)

  // TODO: Write the update feature based on the name

  // TODO: Make sure update feature works with cron job

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `I'm a cron job :)`,
    }),
  }
}

module.exports = updateDb