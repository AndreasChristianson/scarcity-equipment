const frisby = require('frisby')

describe('weapon POST', () => {
  it('should have the right version', async () => {
    const res = await frisby.get(`${process.env.host}/equipment/weapon-distribution`)
    expect(res.status).toBe(200)
    expect(res.headers.get('version')).toBe(process.env.TRAVIS_COMMIT)
  })
})
