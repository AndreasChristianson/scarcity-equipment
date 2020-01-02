import AbstractPoleArm from "../abstract-pole-arm";
import TwoHander from "../../../mixins/two-hander-mixin";

export class Sarissa extends TwoHander(AbstractPoleArm) {
  rarity = "scarce";
  fabrication = "artisan";
  range = this.range * 2;
  description = "a long spear or pike about 5 metres in length.";
  flavor = `The hammer and anvil.
    The “anvil” consisted of the Macedonian phalanx – the crucial defensive arm of Alexander’s army. The king would task his footmen with engaging the opposing infantry and then holding them in place with the numerous layers and sheer length of their sarissa.
    As the phalanx held its foe in position, Alexander would lead his powerful shock Macedonian cavalry, his hetairoi (companions), against a weak part of the enemy line.
    Having landed a critical blow against their opponents, Alexander and his hetairoi would then wheel round behind the enemy infantry, who were already engaged with the Macedonian phalanx, and deal a death blow from behind. They thus acted as the hammer delivering the fatal blow while the phalanx acted as the anvil, sandwiching the enemy infantry in a deadly trap between the two nuclei of Alexander’s force.`;
  //todo min-range
  delay = this.delay * 2;
}
