const Wicked = Base =>
  class extends Base {
    prefixes = [...this.prefixes, "wicked"];
    damagePerSwing = this.damagePerSwing * 1.2;
    rarityDelta = this.rarityDelta - 1.6;
  };

export default Wicked;
