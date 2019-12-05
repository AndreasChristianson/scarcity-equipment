const { rollerFactory } = require('../statistics/roller')
const { maces } = require('./maces')
const { calculateTemplateItemLevel, calculateItemLevel } = require('../statistics/item-calculations')

const { templateSelectionPower } = require('../statistics/constants')
// const { alter } = require('../alterations/alter')

// const maxItemLevelSkew = 5

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

  const template = roller.weighted(validTemplates.map(({ relativeWeight, ...template }) => ({
    value: template,
    relativeWeight: relativeWeight / Math.pow(1 + Math.abs(actualItemLevel - calculateTemplateItemLevel(template)), templateSelectionPower)
  })))
  console.debug(`template selected: ${template.name}`)

  let weapon = roller.collapse(template)

  // while (Math.abs(actualItemLevel - calculateItemLevel(weapon)) > maxItemLevelSkew) {
  //   const currentItemLevelDifference = actualItemLevel - calculateItemLevel(weapon)
  //   weapon = alter(weapon, currentItemLevelDifference, roller)
  // }

  weapon = {
    ...weapon,
    itemLevel: calculateItemLevel(weapon),
    templateItemLevel: calculateTemplateItemLevel(template),
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
