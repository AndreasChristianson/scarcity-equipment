import { MassProducedOneHandedPoleArm } from "./abstract-mass-produced-pole-arm";

export class Ji extends MassProducedOneHandedPoleArm {
  name = "ji";
  damagePerSwing = this.damagePerSwing * 0.9;
  description =
    "a standard dagger-axe with an additional spearhead mounted on top";
  flavor = `In July or August 196, Lü Bu's subordinate Hao Meng rebelled against him and attacked his office in Xiapi. Lü Bu's general Gao Shun suppressed the rebellion with help from Cao Xing – Hao Meng's subordinate, who refused to betray Lü Bu – and killed Hao Meng. Later that year, Lü Bu used his archery skill to prevent a battle between Liu Bei and Yuan Shu's general Ji Ling from taking place. He had a ji erected at the gate of the camp, and proposed, "Gentlemen, watch me fire an arrow at the lower part of the curved blade on the ji. If I hit it in one shot, all of you must withdraw your forces and leave. If I don't, you can remain here and prepare for battle." He then raised his bow and fired an arrow at the ji, hitting exactly the lower part of the curved blade. Everyone present at the scene was shocked. They said, "General, you possess Heaven's might!" The following day, they threw another party and then withdrew their forces.`;
}
