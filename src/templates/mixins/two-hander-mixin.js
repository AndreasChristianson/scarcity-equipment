import Melee from "./melee-mixin";

const TwoHander = Base =>
  class extends Melee(Base) {
    handedness = "two hand";
    damagePerSwing = this.damagePerSwing * 2;
    delay = this.delay * 1.5;
  };

export default TwoHander;
