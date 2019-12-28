import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Wooden from "../../../mixins/wooden-mixin";

class ArtisanWoodenClub extends Wooden(OneHander(AbstractMace)) {
  fabrication = "artisan";
  rarity = "uncommon";
}

export default ArtisanWoodenClub;
