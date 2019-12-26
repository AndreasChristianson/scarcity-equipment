import ImprovisedWoodenClub from "./abstract-improvised-wooden-club";

class Handle extends ImprovisedWoodenClub {
  name = "handle";
  description = "the wooden handle to some ax";
  damagePerSwing = this.damagePerSwing * 1.9;
}

export default Handle;
