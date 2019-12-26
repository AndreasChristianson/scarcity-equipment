import MassProducedWoodenClub from "./abstract-mass-produced-wooden-club";

class Kubotan extends MassProducedWoodenClub {
  name = "kubotan";
  damagePerSwing = this.damagePerSwing * 0.9;
  rarity = "rare";
  description =
    "a short, thin, lightweight club often used by law enforcement officers";
  flavor = "to encourage compliance";
}

export default Kubotan;
