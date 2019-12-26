import OneHander from "../../one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Metal from "../../metal-mixin";

class Kiyoga extends Metal(OneHander(AbstractMace)) {
  name = "kiyoga";
  range = this.range * 2;
  delay = this.delay * 1.2;
  damagePerSwing = this.damagePerSwing * 2.3;
  rarity = "rare";
  flavor =
    "The kiyoga has one advantage over a conventional collapsible baton: it can reach around a raised arm trying to block it to strike the head.";
  description =
    "The tip and first section slide into the spring, and the whole nests into a seven-inch handle. To deploy the kiyoga, all that is necessary is to grasp the handle and swing.";
}

export default Kiyoga;
