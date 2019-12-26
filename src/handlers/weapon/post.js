import Roller from "../../statistics/roller";
import items from "../../templates";

const getValidItems = attributes =>
  Object.entries(attributes).reduce(
    (itemList, [attributeName, attributeValue]) =>
      itemList.filter(item => item[attributeName] === attributeValue),
    items
  );

export const handler = async (event, context) => {
  const {
    id,
    itemLevel: requestedItemLevel,
    ...requestedAttributes
  } = JSON.parse(event.body);

  const roller = new Roller(id);

  const validItems = getValidItems(requestedAttributes);

  validItems.forEach(item => {
    [
      "range",
      "damagePerSwing",
      "delay",
      "weight",
      "critChance",
      "critDamage"
    ].forEach(attribute => {
      item[attribute] = roller.roll({
        mean: item[attribute]
      });
    });
  });

  console.debug(
    `possible templates: ${validItems.length}`,
    validItems.map(({ name, itemLevel }) => ({
      name,
      itemLevel
    }))
  );

  const selectedItem = roller.weighted(
    validItems.map(item => ({
      value: item,
      relativeWeight: item.comparativeWeight(requestedItemLevel)
    }))
  );
  console.debug(`template selected: ${selectedItem.name}`);

  const weapon = {
    ...selectedItem,
    itemLevel: selectedItem.itemLevel,
    dps: selectedItem.dps,
    id
  };

  // todo: save weapon

  console.debug("generated weapon", { weapon });

  return {
    statusCode: 200,
    headers: {
      version: process.env.GIT_COMMIT_LONG
    },
    body: JSON.stringify(weapon)
  };
};
