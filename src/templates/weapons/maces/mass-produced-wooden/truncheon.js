import MassProducedWoodenClub from "./abstract-mass-produced-wooden-club";

class Truncheon extends MassProducedWoodenClub {
  name = "truncheon";
  damagePerSwing = this.damagePerSwing * 1.5;
  rarity = "uncommon";
  description = "a straight, fixed-length baton.";
  flavor =
    "The truncheon acted as the policeman's \"Warrant Card\" as the Royal Crest attached to it indicated the policeman's authority.";
}

export default Truncheon;
