import OneHander from "../../one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Wooden from "../../wooden-mixin";

class ArtisanWoodenClub extends Wooden(OneHander(AbstractMace)) {
  fabrication = "artisan";
  rarity = "uncommon";
}

export default ArtisanWoodenClub;
