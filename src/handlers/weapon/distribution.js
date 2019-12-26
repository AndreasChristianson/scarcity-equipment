import items from "../../templates";

exports.handler = async () => {
  const distribution = items
    .filter(({ type }) => type === "weapon")
    .sort((left, right) => left.itemLevel - right.itemLevel)
    .sort((left, right) => left.relativeWeight - right.relativeWeight);
  console.debug(
    distribution.map(({ name, itemLevel, rarity }) => ({
      name,
      iLevel: itemLevel.toFixed(2),
      rarity
    }))
  );
  return {
    statusCode: 200,
    headers: {
      version: process.env.GIT_COMMIT_LONG
    },
    body: JSON.stringify(distribution)
  };
};
