const Metal = Base =>
  class extends Base {
    weight = this.weight * 1.6;
    material = "metal";
    damagePerSwing = this.damagePerSwing * 1.8;
    critDamage = this.critDamage * 1.2;
  };

export default Metal;
