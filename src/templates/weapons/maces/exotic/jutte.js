import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Metal from "../../../mixins/metal-mixin";

class Jutte extends Metal(OneHander(AbstractMace)) {
  name = "jutte";
  damagePerSwing = this.damagePerSwing * 1.2;
  delay = this.delay * 0.9;
  rarity = "rare";
  fabrication = "artisan";
  flavor =
    "In feudal Japan, it was a crime punishable by death to bring a sword into the shōgun's palace. This law applied to almost everyone, including the palace guards. Due to this prohibition, several kinds of non-bladed weapons were carried by palace guards. The jitte proved particularly effective and evolved to become the symbol of a palace guard's exalted position.";
  description =
    "Basically an iron rod with a single hook on the side near the handle.";
}

export default Jutte;
