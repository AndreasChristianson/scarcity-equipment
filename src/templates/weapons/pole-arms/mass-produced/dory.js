import { MassProducedOneHandedPoleArm } from "./abstract-mass-produced-pole-arm";

export class Dory extends MassProducedOneHandedPoleArm {
  name = "dory";
  damagePerSwing = this.damagePerSwing * 1.8;
  description =
    "a long pole arm with flat leaf-shaped spearhead was composed of iron and its weight was counterbalanced by an iron butt-spike.";
  range = this.range * 1.1;
  // todo min-range?
  rarity = "few";
  flavor = "Troy conquered by dory.";
  flavorSource = "Homer";
}
