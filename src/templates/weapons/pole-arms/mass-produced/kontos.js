import { MassProducedTwoHandedPoleArm } from "./abstract-mass-produced-pole-arm";

class Kontos extends MassProducedTwoHandedPoleArm {
  name = "kontos";
  description = "a type of long wooden cavalry lance used by Iranian cavalry";
  range = this.range * 1.5;
  delay = this.delay * 1.3;
  // todo min-range?
  rarity = "few";
}

export default Kontos;
