const Unique = Base =>
  class extends Base {
    damagePerSwing = this.damagePerSwing * 1.5;
    rarity = "singular";
    fabrication = "unique";
  };

export default Unique;
