const frisby = require('frisby');
 
it('should have the right version', async () => {
  const res = await frisby.post(`${process.env.host}/equipment/weapon`)
  expect(res.headers.get('version')).toBe(process.env.TRAVIS_COMMIT)
});