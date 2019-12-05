const calculateWeaponItemLevel = (weapon) => {
  const dps = weapon.baseDamage / weapon.delay
  const modifier = weapon.alterations
    .reduce((sum, { itemLevelModifier }) => sum + (itemLevelModifier || 0), 0)
  return dps + modifier
}

exports.calculateItemLevel = (item) => {
  if (item.baseDamage) {
    return calculateWeaponItemLevel(item)
  }
}
