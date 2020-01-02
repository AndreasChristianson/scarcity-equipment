const Fast = Base =>
  class extends Base {
    prefixes = [...this.prefixes, "fast"];
    delay = this.delay * 0.85;
    rarityDelta = this.rarityDelta - 1.4;
  };

export default Fast;
