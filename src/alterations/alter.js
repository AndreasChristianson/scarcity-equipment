const { alterationTemplates } = require("./alteration-templates");
const { templateSelectionPower } = require("../statistics/constants");

exports.alter = (item, targetItemLevelChange, roller) => {
  const viableAlterationTemplates = alterationTemplates.filter(
    ({ checkViability }) => checkViability(item)
  );
  const template = roller.weighted(
    viableAlterationTemplates.map(template => ({
      value: template,
      relativeWeight:
        template.relativeWeight /
        Math.pow(
          1 + Math.abs(targetItemLevelChange - template.itemLevelModifier),
          templateSelectionPower
        )
    }))
  );
  return {
    ...item,
    alterations: [...item.alterations, roller.collapse(template)]
  };
};
