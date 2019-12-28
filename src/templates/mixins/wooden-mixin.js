const Wooden = Base =>
  class extends Base {
    weight = this.weight * 0.7;
    material = "wood";
  };

export default Wooden;
