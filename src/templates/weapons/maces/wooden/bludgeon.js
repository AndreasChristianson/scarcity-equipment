import MassProducedWoodenClub from "./abstract-mass-produced-wooden-club";

class Bludgeon extends MassProducedWoodenClub {
  name = "bludgeon";
  damagePerSwing = this.damagePerSwing * 2.0;
  description = "A short, heavy club, which is thicker at one end.";
  flavor =
    "Etymology: First attested in 1730. Origin uncertain, perhaps of Cornish origin (recorded as blogon c. 1450) or from Middle French bougeon, a diminutive of bouge (“club, stick”).";
}

export default Bludgeon;
