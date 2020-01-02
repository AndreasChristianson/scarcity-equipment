const Exceptional = Base =>
  class extends Base {
    prefixes = [...this.prefixes, "exceptional"];
    fabrication = "mastercraft";
    delay = this.delay * 0.85;
    damagePerSwing = this.damagePerSwing * 1.2;
    critChance = this.critChance * 1.1;
    rarityDelta = this.rarityDelta - 2.0;
  };

export default Exceptional;
