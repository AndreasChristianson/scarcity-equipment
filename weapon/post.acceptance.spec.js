const Chance = require('chance')
const frisby = require('frisby')

describe('weapon POST', () => {
  const chance = new Chance()
  let payload

  beforeEach(() => {
    payload = {
      id: chance.guid(),
      itemLevel: chance.d100()
    }
  })

  it('should have the right version', async () => {
    const res = await frisby.post(`${process.env.host}/equipment/weapon`, payload)
    expect(res.status).toBe(200)
    expect(res.headers.get('version')).toBe(process.env.TRAVIS_COMMIT)
  })
})
