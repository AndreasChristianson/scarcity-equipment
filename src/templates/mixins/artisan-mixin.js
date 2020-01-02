const Artisan = Base =>
  class extends Base {
    damagePerSwing = this.damagePerSwing * 1.1;
    fabrication = "artisan";
    rarity = "few";
  };

export default Artisan;
