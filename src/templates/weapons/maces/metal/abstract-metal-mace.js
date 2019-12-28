import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Metal from "../../../mixins/metal-mixin";

class MassProducedMetalClub extends Metal(OneHander(AbstractMace)) {}

export default MassProducedMetalClub;
