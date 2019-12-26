import ImprovisedWoodenClub from "./abstract-improvised-wooden-club";

class DriftwoodClub extends ImprovisedWoodenClub {
  name = "driftwood club";
  description = "light, weathered, wood that has been washed onto a shore";
  damagePerSwing = this.damagePerSwing * 0.6;
  weight = this.weight * 0.6;
  rarity = "uncommon";
  flavor =
    "According to Norse mythology, the first humans, Ask and Embla, were formed out of two pieces of driftwood, an ash and an elm, by the god Odin and his brothers, Vili and Vé.";
}

export default DriftwoodClub;
