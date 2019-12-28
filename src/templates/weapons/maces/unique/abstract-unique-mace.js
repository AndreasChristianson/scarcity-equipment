import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";

class UniqueMace extends OneHander(AbstractMace) {
  damagePerSwing = this.damagePerSwing * 1.5;
  rarity = "singular";
  fabrication = "unique";
}

export default UniqueMace;
