import MassProducedWoodenClub from "./abstract-mass-produced-wooden-club";

class WarHammer extends MassProducedWoodenClub {
  name = "war hammer";
  damagePerSwing = this.damagePerSwing * 4;
  delay = this.delay * 1.9;
  description =
    "a late medieval weapon of war primarily used for close combat action, whose design resembles the hammer.";
  flavor = "Into the fires of battle, and unto the anvil of war!";
  flavorSource = "salamanders war cry";
}

export default WarHammer;
