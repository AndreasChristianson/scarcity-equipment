import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Wooden from "../../../mixins/wooden-mixin";

class Aklys extends Wooden(OneHander(AbstractMace)) {
  name = "aklys";
  damageType = "piercing";
  damagePerSwing = this.damagePerSwing * 2.7;
  delay = this.delay * 1.4;
  range = this.range * 4;
  rarity = "scarce";
  flavor = "Aklys' use probably goes back to the Osci tribe of southern Italy.";
  description =
    "a small mace or club equipped with spikes, attached to one arm of the wielder by a strap of adjustable length to enable the weapon to be retrieved after it had been hurled at an enemy.";
}

export default Aklys;
