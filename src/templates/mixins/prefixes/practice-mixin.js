const Practice = Base =>
  class extends Base {
    prefixes = [...this.prefixes, "practice"];
    damagePerSwing = this.damagePerSwing * 0.4;
    material = "wood";
    rarityDelta = this.rarityDelta - 1;
  };

export default Practice;
