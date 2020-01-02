import maces, { expandable as expandableMaces } from "./maces";
import WellCrafted from "../mixins/prefixes/well-crafted";
import Exceptional from "../mixins/prefixes/exceptional";
import Practice from "../mixins/prefixes/practice";
import Wicked from "../mixins/prefixes/wicked";
import Journeyman from "../mixins/prefixes/journeymans";
import poleArms, { expandable as expandablePoleArms } from "./pole-arms";
import Fast from "../mixins/prefixes/fast";

const weapons = [...maces, ...poleArms];
const expandableWeapons = [...expandableMaces, ...expandablePoleArms];
const weaponExpansions = [
  WellCrafted,
  Exceptional,
  Practice,
  Wicked,
  Journeyman,
  Fast
];

const expandedWeapons = expandableWeapons.reduce(
  (list, weapon) => [...list, ...weaponExpansions.map(mixin => mixin(weapon))],
  []
);

export default [...weapons, ...expandedWeapons];
