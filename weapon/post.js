const { rollerFactory } = require('../statistics/roller')
const { maces } = require('./maces')
const { calculateItemLevel } = require('../statistics/item-calculations')
// const { alter } = require('../alterations/alter')

// const maxItemLevelSkew = 5
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
    itemLevel: requestedItemLevel
  } = JSON.parse(event.body)

  const roller = rollerFactory(id)

  const actualItemLevel = roller.roll({
    mean: requestedItemLevel,
    dev: requestedItemLevel * 0.2,
    min: 0
  })
  console.debug('generating at itemLevel', { requestedItemLevel, actualItemLevel })

  const validTemplates = templates
    .filter(({ category: templateCategory }) => !category || templateCategory === category)
    .filter(({ origin: templateOrigin }) => !origin || templateOrigin === origin)
    .filter(({ handedness: templateHandedness }) => !handedness || handedness === templateHandedness)

  const template = roller.weighted(validTemplates.map((template) => ({
    value: template,
    relativeWeight: template.relativeWeight / Math.pow(1 + Math.abs(actualItemLevel - template.baseItemLevel), 1)
  })))
  console.debug(`template selected: ${template.name}`)

  let weapon = roller.collapse(template)

  if (!weapon.baseDamage) {
    weapon = {
      ...weapon,
      baseDamage: roller.roll({
        mean: weapon.baseItemLevel,
        dev: weapon.baseItemLevel * 0.2,
        min: 0
      }) * weapon.delay
    }
  }

  // while (Math.abs(actualItemLevel - calculateItemLevel(weapon)) > maxItemLevelSkew) {
  //   const currentItemLevelDifference = actualItemLevel - calculateItemLevel(weapon)
  //   weapon = alter(weapon, currentItemLevelDifference, roller)
  // }

  weapon = {
    ...weapon,
    itemLevel: calculateItemLevel(weapon),
    id
  }

  // todo: save weapon

  console.debug('generated weapon', { weapon })

  return {
    statusCode: 200,
    headers: {
      version: process.env.GIT_COMMIT_LONG
    },
    body: JSON.stringify(weapon)
  }
}
