const { rollerFactory } = require('../statistics/roller')
const { maces } = require('./maces')
// const origins = [
//   'improvised',
//   'standardized',
//   'crude',
//   'artisan',
//   'exotic',
//   'unique'
// ]

// const category = [
//   'short blade',
//   'long blade',
//   'bow',
//   'crossbow',
//   'mace',
//   'pole arm',
//   'fist'
// ]

// const damageTypes = [
//   'bludgeoning',
//   'slashing',
//   'piercing'
// ]

// const handednesses = [
//   'one hand',
//   'hand and a half',
//   'two hand'
// ]
const templates = [
  ...maces
]

exports.handler = async (event, context) => {
  const {
    id,
    category,
    origin,
    handedness,
    itemPoints = 0
  } = JSON.parse(event.body)

  const roller = rollerFactory(id)

  const actualItemPoints = roller.roll({
    mean: itemPoints,
    dev: itemPoints * 0.2,
    min: 0
  })

  const validTemplates = templates
    .filter(({ category: templateCategory }) => !category || templateCategory === category)
    .filter(({ origin: templateOrigin }) => !origin || templateOrigin === origin)
    .filter(({ handedness: templateHandedness }) => !handedness || handedness === templateHandedness)

  const template = roller.weighted(validTemplates.map((template) => ({
    value: template,
    relativeWeight: 1 / Math.pow(1 + Math.abs(actualItemPoints - template.itemPoints), 2)
  })))

  const weapon = roller.collapse(template)

  console.debug('generated weapon', weapon)

  return {
    statusCode: 200,
    headers: {
      version: process.env.GIT_COMMIT_LONG
    },
    body: JSON.stringify({
      id,
      ...weapon,
      itemPoints: actualItemPoints
    })
  }
}
