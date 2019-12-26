import OneHander from "../../one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Metal from "../../metal-mixin";

class Gada extends Metal(OneHander(AbstractMace)) {
  name = "gada";
  damagePerSwing = this.damagePerSwing * 1.5;
  delay = this.delay * 0.9;
  rarity = "scarce";
  flavor = "The gada is the main weapon of the Hindu God Hanuman.";
  description = "a spherical head mounted on a shaft, with a spike on the top.";
}

export default Gada;
