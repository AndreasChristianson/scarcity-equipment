import { getAllItemTemplates } from "../../templates";

exports.handler = async () => {
  const distribution = getAllItemTemplates()
    .filter(({ type }) => type === "weapon")
    .sort((left, right) => left.itemLevel - right.itemLevel);
  console.debug(
    distribution.map(({ title, itemLevel, dps }) => ({
      iLevel: itemLevel.toFixed(2),
      dps: dps.toFixed(2),
      title
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
