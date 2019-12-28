import ImprovisedWoodenClub from "./abstract-improvised-wooden-club";

class BirchRod extends ImprovisedWoodenClub {
  name = "birch rod";
  damagePerSwing = this.damagePerSwing * 0.9;
  description = "a bundle of leafless twigs bound together";
  delay = this.delay * 0.85;
  damageType = "slashing";
  rarity = "uncommon";
}

export default BirchRod;
