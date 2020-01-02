const Journeyman = Base =>
  class extends Base {
    prefixes = [...this.prefixes, "journeyman's"];
    damagePerSwing = this.damagePerSwing * 0.7;
    rarityDelta = this.rarityDelta - 1.5;
  };

export default Journeyman;
