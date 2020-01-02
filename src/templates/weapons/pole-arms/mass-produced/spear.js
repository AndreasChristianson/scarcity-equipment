import { MassProducedOneHandedPoleArm } from "./abstract-mass-produced-pole-arm";

class Spear extends MassProducedOneHandedPoleArm {
  name = "spear";
  description = "a pole weapon consisting of a shaft, with a pointed head.";
  flavor = "a sharp spear needs no polish.";
  flavorSource = "H. Rider Haggard";
}

export default Spear;
