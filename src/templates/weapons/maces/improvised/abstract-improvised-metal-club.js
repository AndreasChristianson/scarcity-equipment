import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Metal from "../../../mixins/metal-mixin";

class ImprovisedMetalClub extends Metal(OneHander(AbstractMace)) {
  fabrication = "improvised";
}

export default ImprovisedMetalClub;
