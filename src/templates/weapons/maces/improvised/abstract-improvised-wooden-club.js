import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Wooden from "../../../mixins/wooden-mixin";

class ImprovisedWoodenClub extends Wooden(OneHander(AbstractMace)) {
  fabrication = "improvised";
}

export default ImprovisedWoodenClub;
