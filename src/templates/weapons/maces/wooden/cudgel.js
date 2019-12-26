import MassProducedWoodenClub from "./abstract-mass-produced-wooden-club";

class Cudgel extends MassProducedWoodenClub {
  name = "cudgel";
  damagePerSwing = this.damagePerSwing * 0.4;
  description =
    "A stout stick carried by peasants during the Middle Ages. It functioned as a walking staff and a weapon for both self-defence and wartime.";
  flavor =
    "Regiments of clubmen were raised as late as the English Civil War (1642–1651)";
}

export default Cudgel;
