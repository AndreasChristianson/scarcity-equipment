import ImprovisedWoodenClub from "./abstract-improvised-wooden-club";

class TrenchRaidingClub extends ImprovisedWoodenClub {
  name = "trench raiding club";
  description =
    "a homemade melee weapons used by both the Allies and the Central Powers during World War I";
  flavor =
    "Clubs were used during nighttime trench raiding expeditions as a quiet and effective way of killing or wounding enemy soldiers.";
  rarity = "uncommon";
  delay = this.delay * 0.9;
}

export default TrenchRaidingClub;
