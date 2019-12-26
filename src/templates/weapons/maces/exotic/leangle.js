import OneHander from "../../one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Metal from "../../metal-mixin";

class Leangle extends Metal(OneHander(AbstractMace)) {
  name = "leangle";
  damagePerSwing = this.damagePerSwing * 2.0;
  critChance = this.critChance * 1.4;
  delay = this.delay * 0.9;
  rarity = "scarce";
  flavor =
    "The name comes from Kulin languages such as Wemba-Wemba and Woiwurrung, based on the word lia (tooth).";
  description = "An Aboriginal fighting club with a hooked striking head.";
}

export default Leangle;
