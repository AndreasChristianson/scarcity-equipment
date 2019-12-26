import MassProducedWoodenClub from "./abstract-mass-produced-wooden-club";

class Baton extends MassProducedWoodenClub {
  name = "baton";
  description = "a roughly cylindrical club made of wood.";
  damagePerSwing = this.damagePerSwing * 1.5;
  rarity = "uncommon";
}

export default Baton;
