const { origins, handednesses } = require('../data/item-budgets')

const calculateWeaponItemLevel = (weapon) => {
  const dps = calculateWeaponDps(weapon)
  const budget = calculateItemBudget(weapon)

  const modifier = weapon.alterations
    .reduce((sum, { itemLevelModifier }) => sum + (itemLevelModifier || 0), 0)
  return dps * budget + modifier
}

exports.calculateItemLevel = (item) => {
  if (item.damageTypes) {
    return calculateWeaponItemLevel(item)
  }
}

const calculateItemBudget = (item) => {
  const originBudget = origins[item.origin].itemLevelPerDps
  const handednessBudget = handednesses[item.handedness].itemLevelPerDps
  return handednessBudget * originBudget
}

exports.calculateTemplateItemLevel = (itemTemplate) => {
  const dps = exports.calculateTemplateDps(itemTemplate)
  const budget = calculateItemBudget(itemTemplate)
  return dps * budget
}

exports.calculateTemplateDps = (itemTemplate) => {
  const damagePerSwing = itemTemplate.damageTypes
    .reduce((sum, { amount: { mean } }) => sum + mean, 0)
  const critDamage = itemTemplate.critMultiplier.mean * damagePerSwing
  const dps = (damagePerSwing * (1 - itemTemplate.critChance.mean) + critDamage * itemTemplate.critChance.mean) / itemTemplate.delay.mean

  return dps
}

const calculateWeaponDps = (weapon) => {
  const damagePerSwing = weapon.damageTypes
    .reduce((sum, { amount }) => sum + amount, 0)
  const critDamage = weapon.critMultiplier * damagePerSwing
  const dps = (damagePerSwing * (1 - weapon.critChance) + critDamage * weapon.critChance) / weapon.delay

  return dps
}
