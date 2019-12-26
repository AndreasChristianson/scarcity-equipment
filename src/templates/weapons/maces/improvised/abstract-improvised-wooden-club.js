import OneHander from "../../one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Wooden from "../../wooden-mixin";

class ImprovisedWoodenClub extends Wooden(OneHander(AbstractMace)) {
  fabrication = "improvised";
}

export default ImprovisedWoodenClub;
