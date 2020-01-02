import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Wooden from "../../../mixins/wooden-mixin";
import AbstractPoleArm from "../abstract-pole-arm";

class ArtisanPoleArm extends Artisan(AbstractPoleArm) {
  fabrication = "artisan";
  rarity = "uncommon";
}

export default ArtisanWoodenClub;
