const Wooden = Base =>
  class extends Base {
    weight = this.weight * 0.8;
    material = "wooden";
  };

export default Wooden;
