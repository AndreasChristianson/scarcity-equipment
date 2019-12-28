import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Stone from "../../../mixins/stone-mixin";

class Clava extends Stone(OneHander(AbstractMace)) {
  name = "clava mere okewa";
  damagePerSwing = this.damagePerSwing * 2.5;
  rarity = "scarce";
  description =
    "a traditional stone hand-club used by Mapuche Indians in Chile, featuring a long flat body.";
}

export default Clava;
