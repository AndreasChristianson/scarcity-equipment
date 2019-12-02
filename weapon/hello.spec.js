const { hello } = require('./hello')

describe('hello world', () => {
  it('should return 200', async () => {
    const response = await hello()
    expect(response.statusCode).toBe(200)
  })
})
