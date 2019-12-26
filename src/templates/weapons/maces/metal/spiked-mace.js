import MassProducedMetalClub from "./abstract-metal-mace";

class SpikedMace extends MassProducedMetalClub {
  name = "spiked mace";
  description = "a metal club with a spiked head.";
  damagePerSwing = this.damagePerSwing * 1.2;
}

export default SpikedMace;
