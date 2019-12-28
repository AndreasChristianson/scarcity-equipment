import Roller from "../../statistics/roller";
import { getAllItemTemplates } from "../../templates";
import uuid from "uuid/v4";

const getValidItems = attributes =>
  Object.entries(attributes).reduce(
    (itemList, [attributeName, attributeValue]) =>
      itemList.filter(item => item[attributeName] === attributeValue),
    getAllItemTemplates()
  );

export const handler = async (event, context) => {
  const {
    id = uuid(),
    itemLevel: requestedItemLevel,
    ...requestedAttributes
  } = JSON.parse(event.body);

  const roller = new Roller(id);

  const validItems = getValidItems(requestedAttributes);

  console.debug(
    `possible templates: ${validItems.length}`,
    validItems
      .sort((left, right) => left.itemLevel - right.itemLevel)
      .map(item => ({
        l: item.itemLevel.toFixed(2),
        c: item.comparativeWeight(requestedItemLevel).toFixed(3),
        r: item.relativeWeight.toFixed(1),
        n: item.title
      }))
  );

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

  const selectedItem = roller.weighted(
    validItems.map(item => ({
      value: item,
      relativeWeight: item.comparativeWeight(requestedItemLevel)
    }))
  );
  console.debug(`template selected: ${selectedItem.title}`);

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
