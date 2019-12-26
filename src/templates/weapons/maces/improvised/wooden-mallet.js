import ImprovisedWoodenClub from "./abstract-improvised-wooden-club";

class WoodenMallet extends ImprovisedWoodenClub {
  name = "wooden mallet";
  description = "a short square mallet used in woodworking.";
  damagePerSwing = this.damagePerSwing * 0.8;
  rarity = "uncommon";
}

export default WoodenMallet;
