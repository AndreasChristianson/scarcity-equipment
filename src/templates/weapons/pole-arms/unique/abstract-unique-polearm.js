import AbstractPoleArm from "../abstract-pole-arm";
import Unique from "../../../mixins/unique-mixin";
import OneHander from "../../../mixins/one-hander-mixin";

class UniquePoleArm extends Unique(AbstractPoleArm) {}

export class UniqueOneHandPoleArm extends OneHander(UniquePoleArm) {}
