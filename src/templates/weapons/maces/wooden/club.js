import MassProducedWoodenClub from "./abstract-mass-produced-wooden-club";

class Club extends MassProducedWoodenClub {
  name = "club";
  description = "a short staff, made of wood, wielded as a weapon";
  flavor = "Don't loaf and invite inspiration; light out after it with a club.";
  flavorSource = "Jack London";
  rarity = "abundant";
  damagePerSwing = this.damagePerSwing * 0.9;
}

export default Club;
