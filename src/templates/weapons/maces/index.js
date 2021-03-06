import exotic, { expandable as expandableExotic } from "./exotic";
import improvised, { expandable as expandableImprovised } from "./improvised";
import wooden, { expandable as expandableWooden } from "./wooden";
import metal, { expandable as expandableMetal } from "./metal";
import unique, { expandable as expandableUnique } from "./unique";
import artisan, { expandable as expandableArtisan } from "./artisan";

export default [
  ...exotic,
  ...improvised,
  ...wooden,
  ...metal,
  ...unique,
  ...artisan
];

export const expandable = [
  ...expandableExotic,
  ...expandableImprovised,
  ...expandableWooden,
  ...expandableMetal,
  ...expandableUnique,
  ...expandableArtisan
];
