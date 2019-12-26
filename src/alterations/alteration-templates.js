const alterationBase = {
  priority: 10,
  relativeWeight: 100,
  checkViability: () => true
};

const fiery = {
  ...alterationBase,
  checkViability: ({ baseDamage, damageTypes }) =>
    baseDamage && !damageTypes.some(({ type }) => type === "fire"),
  modifications: [],
  description: "This weapon burns those struck by it.",
  name: "fiery",
  itemLevelModifier: 5
};

const corroded = {
  ...alterationBase,
  checkViability: () => true,
  modifications: [],
  description: "This item is weathered and corroded.",
  name: "corroded",
  itemLevelModifier: -10
};

exports.alterationTemplates = [fiery, corroded];
