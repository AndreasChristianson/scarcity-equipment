const { maces } = require('./maces')
const { calculateTemplateItemLevel, calculateTemplateDps } = require('../statistics/item-calculations')
const templates = [
  ...maces
]

exports.handler = async () => {
  const distribution =
    templates.map(({ relativeWeight, name, ...otherFields }) => ({
      name,
      templateItemLevel: calculateTemplateItemLevel(otherFields),
      templateDps: calculateTemplateDps(otherFields),
      relativeWeight
    }))

  return {
    statusCode: 200,
    headers: {
      version: process.env.GIT_COMMIT_LONG
    },
    body: JSON.stringify(distribution)
  }
}
