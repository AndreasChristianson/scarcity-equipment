import Cudgel from "./cudgel";

class Singlestick extends Cudgel {
  name = "singlestick";
  rarity = "uncommon";
  damagePerSwing = this.damagePerSwing * 1.1;
  flavor = 'Also known as a "cudgel"';
}

export default Singlestick;
