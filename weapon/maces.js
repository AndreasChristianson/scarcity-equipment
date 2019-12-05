const { woodTypes } = require('../data/materials')
const { weapon } = require('../item-base')

const mace = {
  ...weapon,
  category: 'mace'
}
const oneHandMace = {
  ...mace,
  handedness: 'one hand',
  range: {
    min: 0.5,
    mean: 0.75
  },
  delay: {
    min: 1,
    mean: 1.8
  },
  weight: {
    min: 1,
    max: 5,
    mean: 2
  }
}
const improvisedWoodenClub = {
  ...oneHandMace,
  material: [
    {
      value: 'wood',
      relativeWeight: 300
    },
    ...woodTypes
  ],
  origin: 'improvised',
  damageTypes: [{
    type: 'bludgeoning',
    amount: {
      min: 0,
      mean: 10
    }
  }],
  critChance: {
    min: 0,
    mean: 0.02
  }
}
const stick = {
  ...improvisedWoodenClub,
  name: 'stick',
  description: 'a short, thick stick',
  flavor: {
    text: 'Speak softly and carry a big stick; you will go far.',
    source: 'Theodore Roosevelt'
  }
}
const branch = {
  ...stick,
  name: 'branch',
  description: 'a stout branch with a knot on one end',
  flavor: undefined
}

const _switch = { // switch is a reserved word
  ...branch,
  name: 'switch',
  relativeWeight: 20,
  description: 'a long thin branch that leaves welts and cuts',
  damageTypes: [
    ...branch.damageTypes,
    {
      type: 'slashing',
      amount: {
        min: 0,
        mean: 2,
        sdtDev: 0.1
      }
    }],
  flavor: {
    text: 'Twentieth-century legal scholar William L. Prosser wrote that here was "probably no truth to the legend" that a husband was allowed to beat his wife "with a stick no thicker than his thumb"'
  }
}
const stalk = {
  ...branch,
  name: 'stalk',
  description: 'a fibrous stalk from some small plant',
  relativeWeight: 15
}
const twig = {
  ...branch,
  name: 'twig',
  description: 'a twisted, wicked, piece of a tree',
  relativeWeight: 20
}
const timber = {
  ...branch,
  name: 'timber',
  description: 'a rough length of lumber',
  relativeWeight: 5,
  flavor: [{
    value: {
      source: 'J. Willard Marriott',
      text: 'Good timber does not grow with ease; the stronger the wind, the stronger the trees'
    },
    relativeWeight: 3
  }, {
    value: {
      source: 'Immanuel Kant',
      text: 'Out of the crooked timber of humanity, no straight thing was ever made.'
    },
    relativeWeight: 1
  }],
  damageTypes: [{
    type: 'bludgeoning',
    amount: {
      min: 0,
      mean: 50
    }
  }]
}

const bat = {
  ...oneHandMace,
  name: 'bat',
  material: 'wood',
  description: 'a weighted wooden club with stop by the grip',
  origin: 'standardized',
  flavor: {
    text: 'By regulation, it may be no more than 7.0cm in diameter at the thickest part and no more than 1.067m in length.'
  },
  damageTypes: [{
    type: 'bludgeoning',
    amount: {
      min: 0,
      mean: 25
    }
  }]
}

exports.maces = [
  stick,
  branch,
  _switch,
  stalk,
  twig,
  timber,
  bat
//   {
//     type: 'morningstar',
//     material: [
//       {
//         value: 'wood',
//         relativeWeight: 200
//       },
//       ...woodTypes,
//       {
//         value: 'metal',
//         relativeWeight: 200
//       },
//       ...metalTypes
//     ],
//     name: [
//       {
//         value: 'morningstar',
//         relativeWeight: 30
//       },
//       {
//         value: 'spiked club',
//         relativeWeight: 10
//       },
//       {
//         value: 'spiked mace',
//         relativeWeight: 10
//       },
//       {
//         value: 'gurz',
//         relativeWeight: 1
//       },
//       {
//         value: 'morgenstern',
//         relativeWeight: 5
//       },
//       {
//         value: 'holy water sprinkler',
//         relativeWeight: 2
//       },
//       {
//         value: 'kanabō',
//         relativeWeight: 5
//       }
//     ],
//     category: 'mace',
//     handedness: 'one hand',
//     origin: 'mass produced',
//     baseItemLevel: 30,
//     description: [{
//       value: '',
//       relativeWeight: 5
//     },
//     {
//       value: 'a sturdy club with many spikes',
//       relativeWeight: 5
//     },
//     {
//       value: 'a shaft with a weighted, spiked end',
//       relativeWeight: 5
//     }],
//     flavor: [{
//       value: undefined,
//       relativeWeight: 50
//     }, {
//       value: {
//         text: 'Like giving a kanabō to an oni'
//       },
//       relativeWeight: 2
//     }],
//     range: {
//       min: 0.7,
//       mean: 0.9,
//       dev: 0.2
//     },
//     weight: {
//       min: 3,
//       max: 10,
//       mean: 5,
//       sdtDev: 1
//     },
//     delay: {
//       min: 1,
//       mean: 2.3,
//       dev: 0.2
//     },
//     damageTypes: [{
//       type: 'bludgeoning',
//       multiplier: {
//         min: 0.9,
//         max: 3,
//         mean: 1.5,
//         dev: 0.3
//       }
//     }, {
//       type: 'piercing',
//       multiplier: {
//         min: 0.1,
//         max: 1,
//         mean: 0.3,
//         dev: 0.1
//       }
//     }]
//   }
]
