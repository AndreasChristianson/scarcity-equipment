import OneHander from "../../../mixins/one-hander-mixin";
import AbstractMace from "../abstract-mace";
import Wooden from "../../../mixins/wooden-mixin";
import Artisan from "../../../mixins/artisan-mixin";

class ArtisanWoodenClub extends Wooden(OneHander(Artisan(AbstractMace))) {}

export default ArtisanWoodenClub;
