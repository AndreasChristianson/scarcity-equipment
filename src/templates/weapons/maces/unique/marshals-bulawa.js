import OneHander from "../../one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Metal from "../../metal-mixin";

class MarshalsMace extends Metal(OneHander(AbstractMace)) {
  name = "marshal's bulawa";
  damagePerSwing = this.damagePerSwing * 2;
  rarity = "rare";
  fabrication = "unique";
  flavor =
    "Historically the buława was an attribute of a hetman, an officer of the highest military rank (after the monarch) in the 15th- to 18th-century Kingdom of Poland and the Polish-Lithuanian Commonwealth";
  description =
    "a short silver ceremonial mace. Denotes the highest military rank.";
}

export default MarshalsMace;
