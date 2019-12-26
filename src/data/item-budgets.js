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
    itemLevelPerDps: 2.0
  },
  "two hand": {
    itemLevelPerDps: 1.0
  }
};

export const rarityLookup = {
  common: {
    relativeWeight: 125.0
  },
  uncommon: {
    relativeWeight: 25.0
  },
  scarce: {
    relativeWeight: 5.0
  },
  rare: {
    relativeWeight: 1.0
  }
};
