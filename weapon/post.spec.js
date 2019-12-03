const { post } = require('./post')

describe('post', () => {
  it('should return 200', async () => {
    const response = await post()
    expect(response.statusCode).toBe(200)
  })
})
