const Chance = require('chance')
exports.rollerFactory = (seed) => {
  const chance = new Chance(seed)
  const roll = ({ min = Number.MIN_VALUE, max = Number.MAX_VALUE, mean, dev }) => {
    let result
    do {
      result = chance.normal({
        mean,
        dev
      })
    } while (result > max || result < min)
    return result
  }
  const weighted = (collection) => chance.weighted(
    collection.map(({ value }) => value),
    collection.map(({ relativeWeight }) => relativeWeight)
  )
  const isPrimitive = (object) =>
    typeof object === 'string' ||
  typeof object === 'boolean' ||
   object === undefined ||
   object === null ||
  typeof object === 'number'
  const collapse = (object) => {
    if (isPrimitive(object)) {
      return object
    }
    if (typeof object.mean === 'number') {
      return roll(object)
    }
    if (Array.isArray(object) && object[0] && object[0].relativeWeight) {
      return collapse(weighted(object))
    }
    if (Array.isArray(object)) {
      return object
        .reduce((ret, current) => ([
          ...ret,
          collapse(current)
        ]), [])
    }
    return Object.entries(object)
      .reduce((ret, [key, value]) => ({
        ...ret,
        [key]: collapse(value)
      }), {})
  }

  return {
    roll,
    weighted,
    collapse
  }
}
