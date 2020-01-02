import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Unique from "../../../mixins/unique-mixin";

class UniqueMace extends Unique(OneHander(AbstractMace)) {}

export default UniqueMace;
