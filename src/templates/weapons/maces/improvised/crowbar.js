import ImprovisedMetalClub from "./abstract-improvised-metal-club";

class Crowbar extends ImprovisedMetalClub {
  name = "crowbar";
  flavor = "also called a wrecking bar";
  damagePerSwing = this.damagePerSwing * 2.2;
  delay = this.delay * 1.5;
  description =
    "a tool consisting of a metal bar with a single curved end and flattened points.";
}

export default Crowbar;
