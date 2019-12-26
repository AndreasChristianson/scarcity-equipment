import ArtisanWoodenClub from "./abstract-artisan-wooded-club";

class PatuTawaka extends ArtisanWoodenClub {
  name = "patu tawaka";
  description = "a type of short-handled club used as a striking weapon";
  damagePerSwing = this.damagePerSwing * 1.5;
  delay = this.delay * 0.6;
  rarity = "uncommon";
  flavor =
    "The word patu in the Māori language means to strike, hit, beat, or subdue.";
}

export default PatuTawaka;
