import ImprovisedWoodenClub from "./abstract-improvised-wooden-club";

class Stick extends ImprovisedWoodenClub {
  name = "stick";
  description = "a short, thick stick";
  damagePerSwing = this.damagePerSwing * 0.7;
  flavor = "Speak softly and carry a big stick; you will go far.";
  flavorSource = "Theodore Roosevelt";
}

export default Stick;
