import AbstractPoleArm from "../abstract-pole-arm";
import OneHander from "../../../mixins/one-hander-mixin";
import TwoHander from "../../../mixins/two-hander-mixin";

class MassProducedPoleArm extends AbstractPoleArm {}

export class MassProducedOneHandedPoleArm extends OneHander(
  MassProducedPoleArm
) {}
export class MassProducedTwoHandedPoleArm extends TwoHander(
  MassProducedPoleArm
) {}
