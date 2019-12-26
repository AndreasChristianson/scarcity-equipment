import ImprovisedWoodenClub from "./abstract-improvised-wooded-club";

class BirchRod extends ImprovisedWoodenClub {
  name = "stalk";
  description = "a fibrous stalk from some small plant";
  damagePerSwing = this.damagePerSwing * 1.5;
}

export default BirchRod;
