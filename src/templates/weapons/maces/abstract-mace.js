import Weapon from "../abstract-weapon";

class AbstractMace extends Weapon {
  weight = this.weight * 1.8;
  damageType = "bludgeoning";
  delay = this.delay * 1.2;
  critDamage = this.critDamage * 0.8;
  critChance = this.critChance * 1.2;
  class = "mace";
}

export default AbstractMace;
