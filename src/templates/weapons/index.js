import maces, { expandable as expandableMaces } from "./maces";
import WellCrafted from "../mixins/prefixes/well-crafted-mixin";
import Exceptional from "../mixins/prefixes/exceptional-mixin";
import Practice from "../mixins/prefixes/practice-mixin";
import Wicked from "../mixins/prefixes/wicked-mixin";

const weapons = [...maces];
const expandableWeapons = [...expandableMaces];
const weaponExpansions = [WellCrafted, Exceptional, Practice, Wicked, Flaming];

const expandedWeapons = expandableWeapons.reduce(
  (list, weapon) => [...list, ...weaponExpansions.map(mixin => mixin(weapon))],
  []
);

export default [...weapons, ...expandedWeapons];
