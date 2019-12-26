import Chance from "chance";

export default class Roller {
  constructor(seed) {
    this.seed = seed;
    this.chance = new Chance(seed);
  }

  roll({ mean, min = 0, max = Number.MAX_VALUE, dev = mean * 0.05 }) {
    let result;
    let count = 0;
    do {
      result = this.chance.normal({
        mean,
        dev
      });
      if (count++ > 100) {
        console.error("unable to calculate gaussian", {
          min,
          max,
          mean,
          dev,
          count
        });
        throw new Error("unable to calculate gaussian");
      }
    } while (result > max || result < min);
    return result;
  }

  weighted(collection) {
    return this.chance.weighted(
      collection.map(({ value }) => value),
      collection.map(({ relativeWeight }) => relativeWeight)
    );
  }
}

// exports.rollerFactory = seed => {
//   const weighted = collection =>
//     chance.weighted(
//       collection.map(({ value }) => value),
//       collection.map(({ relativeWeight }) => relativeWeight)
//     );
//   const isPrimitive = object =>
//     typeof object === "string" ||
//     typeof object === "boolean" ||
//     object === undefined ||
//     object === null ||
//     typeof object === "number";
//   const collapse = object => {
//     if (isPrimitive(object)) {
//       return object;
//     }
//     if (typeof object.mean === "number") {
//       return roll(object);
//     }
//     if (Array.isArray(object) && object[0] && object[0].relativeWeight) {
//       return collapse(weighted(object));
//     }
//     if (Array.isArray(object)) {
//       return object.reduce((ret, current) => [...ret, collapse(current)], []);
//     }
//     return Object.entries(object).reduce(
//       (ret, [key, value]) => ({
//         ...ret,
//         [key]: collapse(value)
//       }),
//       {}
//     );
//   };

//   return {
//     roll,
//     weighted,
//     collapse
//   };
// };
