const WellCrafted = Base =>
  class extends Base {
    prefixes = [...this.prefixes, "well-crafted"];
    fabrication = "artisan";
    critChance = this.critChance * 1.2;
    rarityDelta = this.rarityDelta - 1.5;
  };

export default WellCrafted;
