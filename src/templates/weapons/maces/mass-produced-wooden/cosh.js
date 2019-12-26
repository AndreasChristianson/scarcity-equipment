import MassProducedWoodenClub from "./abstract-mass-produced-wooden-club";

class Cosh extends MassProducedWoodenClub {
  name = "cosh";
  damagePerSwing = this.damagePerSwing * 1.8;
  rarity = "uncommon";
  description =
    "A short, easily concealed club weapon consisting of a dense weight attached to the end of a short shaft, used as a bludgeon.";
}

export default Cosh;
