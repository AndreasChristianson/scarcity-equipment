import { getAllItemTemplates } from "../../templates";

exports.handler = async () => {
  const distribution = getAllItemTemplates()
    .filter(({ type }) => type === "weapon")
    .sort((left, right) => left.itemLevel - right.itemLevel);
  return {
    statusCode: 200,
    headers: {
      version: process.env.GIT_COMMIT_LONG
    },
    body: JSON.stringify(distribution)
  };
};
