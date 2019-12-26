import OneHander from "../../one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Metal from "../../metal-mixin";

class MassProducedMetalClub extends Metal(OneHander(AbstractMace)) {
  damagePerSwing = this.damagePerSwing * 2.3;
  critDamage = this.critDamage * 1.2;
}

export default MassProducedMetalClub;
