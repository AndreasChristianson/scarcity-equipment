import ImprovisedWoodenClub from "./abstract-improvised-wooded-club";

class Timber extends ImprovisedWoodenClub {
  name = "timber";
  description = "a rough length of lumber";
  damagePerSwing = this.damagePerSwing * 3.0;
  rarity = "scarce";
  flavor =
    "Good timber does not grow with ease; the stronger the wind, the stronger the trees";
  flavorSource = "J. Willard Marriott";
}

export default Timber;
