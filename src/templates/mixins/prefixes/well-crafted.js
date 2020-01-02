const WellCrafted = Base =>
  class extends Base {
    prefixes = [...this.prefixes, "well-crafted"];
    fabrication = "artisan";
    critChance = this.critChance * 1.2;
    rarityDelta = this.rarityDelta - 1.4;
  };

export default WellCrafted;
