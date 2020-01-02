import { MassProducedOneHandedPoleArm } from "./abstract-mass-produced-pole-arm";

class Rhomphaia extends MassProducedOneHandedPoleArm {
  name = "rhomphaia";
  description =
    "a polearm with a slightly curved single-edged blade attached to a pole";
  damagePerSwing = this.damagePerSwing * 1.1;
  rarity = "uncommon";
  flavor =
    "The word 'rhomphaia' is preserved in modern Greek, with the meaning of \"big broad sword\".";
}

export default Rhomphaia;
