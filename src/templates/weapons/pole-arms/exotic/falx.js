import AbstractPoleArm from "../abstract-pole-arm";
import TwoHander from "../../../mixins/two-hander-mixin";

export class Falx extends TwoHander(AbstractPoleArm) {
  rarity = "scarce";
  name = "falx";
  fabrication = "mass produced";
  description =
    "a weapon with a curved blade that was sharp on the inside edge";
  flavor = `Marcus Cornelius Fronto described the large gaping wounds that a falx inflicted, and experiments have shown that a blow from a falx easily penetrated the Romans' lorica segmentata, incapacitating the majority of victims.`;
  delay = this.delay * 1.2;
  damagePerSwing = this.damagePerSwing * 2.3;
}
