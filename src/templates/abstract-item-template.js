import { templateSelectionPower } from "../statistics/constants";
import { rarityLookup } from "../data/item-budgets";

class Item {
  alterations = [];
  weight = 0.0;
  rarity = "common";
  fabrication = "mass produced";

  comparativeWeight(requestedItemLevel) {
    const itemLevelDelta = Math.abs(this.itemLevel - requestedItemLevel);
    const denominator = Math.pow(1 + itemLevelDelta, templateSelectionPower);
    return this.relativeWeight / denominator;
  }

  get relativeWeight() {
    return rarityLookup[this.rarity].relativeWeight;
  }
}

export default Item;
