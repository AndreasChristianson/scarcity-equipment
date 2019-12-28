import Item from "../abstract-item-template";
import { handednessLookup, fabricationLookup } from "../../data/item-budgets";

class Weapon extends Item {
  get dps() {
    const { averageDamagePerSwing, delay } = this;
    return averageDamagePerSwing / delay;
  }

  get averageDamagePerSwing() {
    const { damagePerSwing, critChance, critDamage } = this;
    const critDamagePerSwing = damagePerSwing * critChance * critDamage;
    const nonCritDamagePerSwing = damagePerSwing * (1 - critChance);
    return critDamagePerSwing + nonCritDamagePerSwing;
  }

  get itemLevel() {
    const dps = this.dps;
    const { fabrication, handedness } = this;
    const fab = fabricationLookup[fabrication];
    const hand = handednessLookup[handedness];
    return dps * fab.itemLevelPerDps * hand.itemLevelPerDps;
  }

  damagePerSwing = 10.0;
  type = "weapon";
  delay = 2.0;
  critDamage = 2.0;
  critChance = 0.05;
  weight = 1100.0;
}

export default Weapon;
