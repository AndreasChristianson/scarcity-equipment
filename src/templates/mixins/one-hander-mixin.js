import Melee from "./melee-mixin";

const OneHander = Base =>
  class extends Melee(Base) {
    handedness = "one hand";
  };

export default OneHander;
