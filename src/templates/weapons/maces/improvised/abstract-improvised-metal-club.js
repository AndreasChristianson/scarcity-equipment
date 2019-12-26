import OneHander from "../../one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Metal from "../../metal-mixin";

class ImprovisedMetalClub extends Metal(OneHander(AbstractMace)) {
  fabrication = "improvised";
}

export default ImprovisedMetalClub;
