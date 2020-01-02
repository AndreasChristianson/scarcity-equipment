import Weapon from "../abstract-weapon";
import Wooden from "../../mixins/wooden-mixin";

class AbstractPoleArm extends Wooden(Weapon) {
  weight = this.weight * 1.1;
  damageType = "piercing";
  delay = this.delay * 1.1;
  critDamage = this.critDamage * 2.2;
  critChance = this.critChance * 0.3;
  class = "polearm";
  range = this.range * 1.5;
}

export default AbstractPoleArm;
