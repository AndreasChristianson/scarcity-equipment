const Metal = Base =>
  class extends Base {
    weight = this.weight * 1.5;
    material = "metal";
  };

export default Metal;
