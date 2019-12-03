const { handler } = require('./post')
const { Chance } = require('chance')

describe('post', () => {
  const chance = new Chance()

  beforeEach(() => {
    process.env.GIT_COMMIT_LONG = chance.hash()
  })

  it('should return 200', async () => {
    const response = await handler()
    expect(response.statusCode).toBe(200)
  })

  it('should set the version header', async () => {
    const response = await handler()
    expect(response.headers.version).toBe(process.env.GIT_COMMIT_LONG)
  })
})
