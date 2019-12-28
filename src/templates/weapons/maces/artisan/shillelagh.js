import ArtisanWoodenClub from "./abstract-artisan-wooded-club";

class Shillelagh extends ArtisanWoodenClub {
  name = "shillelagh";
  flavor =
    "The shillelagh was originally used for settling disputes in a gentlemanly manner — like a duel with pistols or swords. Modern practitioners of bataireacht study the use of the shillelagh for self-defense and as a martial art.";
  description = "a stout knotty blackthorn stick with a large knob at the top";
  damagePerSwing = this.damagePerSwing * 0.9;
  delay = this.delay * 0.9;
}

export default Shillelagh;
