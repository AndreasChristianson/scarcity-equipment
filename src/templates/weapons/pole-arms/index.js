import exotic, { expandable as expandableExotic } from "./exotic";
import improvised, { expandable as expandableImprovised } from "./improvised";
import massProduced, {
  expandable as expandableMassProduced
} from "./mass-produced";
import unique, { expandable as expandableUnique } from "./unique";
import artisan, { expandable as expandableArtisan } from "./artisan";

export default [
  ...exotic,
  ...improvised,
  ...massProduced,
  ...unique,
  ...artisan
];

export const expandable = [
  ...expandableExotic,
  ...expandableImprovised,
  ...expandableMassProduced,
  ...expandableUnique,
  ...expandableArtisan
];
