import weapons from "./weapons";

export const getAllItemTemplates = () =>
  [...weapons].map(Template => new Template());
