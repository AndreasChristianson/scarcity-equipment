import ImprovisedWoodenClub from "./abstract-improvised-wooden-club";

class BirchRod extends ImprovisedWoodenClub {
  name = "stalk";
  description = "a fibrous stalk from some small plant";
  damagePerSwing = this.damagePerSwing * 0.5;
}

export default BirchRod;
