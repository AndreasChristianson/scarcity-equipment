import ImprovisedWoodenClub from "./abstract-improvised-wooded-club";

class Twig extends ImprovisedWoodenClub {
  name = "twig";
  description = "a twisted, wicked, piece of a tree";
  damagePerSwing = this.damagePerSwing * 2.0;
  rarity = "scarce";
  weight = this.weight * 0.8;
}

export default Twig;
