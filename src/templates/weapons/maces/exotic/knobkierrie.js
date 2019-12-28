import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Wooden from "../../../mixins/wooden-mixin";

class Knobkierrie extends Wooden(OneHander(AbstractMace)) {
  name = "knobkierrie";
  damagePerSwing = this.damagePerSwing * 1.7;
  rarity = "scarce";
  flavor =
    "The name derives from the Afrikaans word knop, meaning knob or ball and the Khoekhoe or San word kirri, meaning walking stick.";
  description =
    "carved from a branch thick enough for the knob, with the rest being whittled down to create the shaft.";
}

export default Knobkierrie;
