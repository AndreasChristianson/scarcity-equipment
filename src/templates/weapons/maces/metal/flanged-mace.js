import SpikedMace from "./spiked-mace";

class FlangedMace extends SpikedMace {
  name = "flanged mace";
  description = "a metal club with a heavy flanges on the head.";
  damagePerSwing = this.damagePerSwing * 0.9;
}

export default FlangedMace;
