const Stone = Base =>
  class extends Base {
    weight = this.weight * 1.3;
    material = "stone";
  };

export default Stone;
