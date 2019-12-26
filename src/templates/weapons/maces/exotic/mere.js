import PatuTawaka from "../artisan/patu-tawaka";
import Stone from "../../stone-mixin";

class Mere extends Stone(PatuTawaka) {
  name = "mere";
  description =
    "a type of short, broad-bladed weapon in the shape of an enlarged tear drop";
  damagePerSwing = this.damagePerSwing * 1.3;
  rarity = "scarce";
  flavor =
    "A mere pounamu was much harder than a patu of wood or bone, and much tougher - less likely to fracture - than a patu onawe of any other type of stone.";
}

export default Mere;
