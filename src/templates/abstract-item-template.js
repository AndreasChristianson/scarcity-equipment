import {
  templateSelectionPower,
  relativeWeightBase
} from "../statistics/constants";
import { rarityLookup } from "../data/item-budgets";

class Item {
  alterations = [];
  prefixes = [];
  suffixes = [];
  weight = 0.0;
  rarity = "common";
  rarityDelta = 0;
  fabrication = "mass produced";

  comparativeWeight(requestedItemLevel) {
    const itemLevelDelta = Math.abs(this.itemLevel - requestedItemLevel);
    const denominator = Math.pow(1 + itemLevelDelta, templateSelectionPower);
    return this.relativeWeight / denominator;
  }

  get relativeWeight() {
    const rarityPower = rarityLookup[this.rarity].power;
    const power = rarityPower + this.rarityDelta;
    return Math.pow(relativeWeightBase, power);
  }

  get title() {
    const prefixString = this.prefixes.join(", ");
    const suffixString = this.suffixes.join(", ");
    return `${prefixString} ${this.name} ${suffixString}`.trim();
  }
}

export default Item;
