import MassProducedWoodenClub from "./abstract-mass-produced-wooden-club";

class BillyClub extends MassProducedWoodenClub {
  name = "billy club";
  damagePerSwing = this.damagePerSwing * 1.2;
  description = "a roughly cylindrical club made of wood.";
  flavor =
    "In the Victorian era, police in London carried truncheons about one foot long called billy clubs. According to the Online Etymology Dictionary, this name is first recorded in 1848 as slang for a burglars' crowbar.";
}

export default BillyClub;
