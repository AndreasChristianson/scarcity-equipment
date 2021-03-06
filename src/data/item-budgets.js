export const fabricationLookup = {
  improvised: {
    // anything can be a mace, if you're strong enough
    itemLevelPerDps: 1.2
  },
  "mass produced": {
    // a standard issue gladius
    itemLevelPerDps: 1.0
  },
  artisan: {
    // Glorious Nippon Steel, folded over 1000 times
    itemLevelPerDps: 0.9
  },
  mastercraft: {
    // a stradivarius
    itemLevelPerDps: 0.8
  },
  unique: {
    // Harpe
    itemLevelPerDps: 0.7
  }
};

export const handednessLookup = {
  "one hand": {
    itemLevelPerDps: 1.6
  },
  "two hand": {
    itemLevelPerDps: 1.0
  }
};

export const rarityLookup = {
  abundant: {
    power: 3.5
  },
  common: {
    power: 3.0
  },
  uncommon: {
    power: 2.0
  },
  few: {
    power: 1.5
  },
  scarce: {
    power: 1.0
  },
  rare: {
    power: 0.0
  },
  singular: {
    power: -1.0
  }
};
