import Metal from "../../../mixins/metal-mixin";
import UniqueMace from "./abstract-unique-mace";

class MarshalsMace extends Metal(UniqueMace) {
  name = "marshal's bulawa";
  damagePerSwing = this.damagePerSwing * 1.2;
  flavor =
    "Historically the bulawa was an attribute of a hetman, an officer of the highest military rank (after the monarch) in the 15th- to 18th-century Kingdom of Poland and the Polish-Lithuanian Commonwealth";
  description =
    "a short silver ceremonial mace. Denotes the highest military rank.";
}

export default MarshalsMace;
