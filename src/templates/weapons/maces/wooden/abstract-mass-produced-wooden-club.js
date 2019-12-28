import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Wooden from "../../../mixins/wooden-mixin";

class MassProducedWoodenClub extends Wooden(OneHander(AbstractMace)) {
  damagePerSwing = this.damagePerSwing * 2.0;
  critChance = this.critChance * 1.2;
  delay = this.delay * 0.9;
}

export default MassProducedWoodenClub;
