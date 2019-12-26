import ImprovisedWoodenClub from "./abstract-improvised-wooded-club";

class Trunk extends ImprovisedWoodenClub {
  name = "trunk";
  description = "a heavy tree trunk";
  damagePerSwing = this.damagePerSwing * 2.5;
  rarity = "rare";
  weight = this.weight * 2.0;
  flavor =
    "Out of the crooked timber of humanity, no straight thing was ever made.";
  flavorSource = "Immanuel Kant";
}

export default Trunk;
