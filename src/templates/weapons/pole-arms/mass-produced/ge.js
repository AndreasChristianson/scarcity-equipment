import { MassProducedOneHandedPoleArm } from "./abstract-mass-produced-pole-arm";

export class Ge extends MassProducedOneHandedPoleArm {
  name = "ge";
  rarity = "uncommon";
  damagePerSwing = this.damagePerSwing * 0.8;
  description =
    "a dagger-shaped blade, mounted by its tang to a perpendicular wooden shaft";
  flavor =
    "The dagger-axe or ge is a type of pole weapon that was in use from the Shang dynasty until the Han dynasty in China.";
}
