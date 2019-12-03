exports.handler = async (event, context) => ({
  statusCode: 200,
  headers: {
    version: process.env.GIT_COMMIT_SHORT
  },
  body: JSON.stringify({
    message: 'hello',
    event,
    context,
    env: process.env
  })
})
