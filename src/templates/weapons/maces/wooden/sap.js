import Cosh from "./cosh";

class Sap extends Cosh {
  name = "sap";
  damagePerSwing = this.damagePerSwing * 0.8;
}

export default Sap;
