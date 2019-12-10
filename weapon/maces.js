const { woodTypes, metalTypes } = require('../data/materials')
const { weapon } = require('../item-base')

const maceBase = {
  ...weapon,
  category: 'mace',
  critMultiplier: {
    mean: 1.8
  },
  critChance: {
    min: 0,
    mean: 0.04
  }
}
const oneHandMaceBase = {
  ...maceBase,
  handedness: 'one hand',
  range: {
    min: 0.5,
    mean: 0.75
  },
  delay: {
    mean: 1.8,
    dev: 0.05
  },
  weight: {
    min: 0,
    mean: 0.8
  }
}
const improvisedWoodenClub = {
  ...oneHandMaceBase,
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
  }]
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
        mean: 2
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

const massProducedClub = {
  ...oneHandMaceBase,
  material: [
    {
      value: 'wood',
      relativeWeight: 1000
    },
    ...woodTypes
  ],
  origin: 'standardized',
  damageTypes: [{
    type: 'bludgeoning',
    amount: {
      min: 0,
      mean: 15
    }
  }],
  critChance: {
    min: 0,
    mean: 0.04
  }
}

const club = {
  ...massProducedClub,
  name: 'club',
  origin: 'crude',
  description: 'a short staff, made of wood, wielded as a weapon',
  flavor: {
    text: 'Don\'t loaf and invite inspiration; light out after it with a club.',
    source: 'Jack London'
  }
}
const bat = {
  ...massProducedClub,
  name: 'bat',
  description: 'a weighted wooden club with stop by the grip',
  flavor: {
    text: 'By regulation, it may be no more than 7.0cm in diameter at the thickest part and no more than 1.067m in length.'
  }
}

const baton = {
  ...massProducedClub,
  name: 'baton',
  material: 'wood',
  description: 'a roughly cylindrical club made of wood',
  flavor: {
    text: 'not for twirling'
  }
}

const bludgeon = {
  ...baton,
  name: 'bludgeon',
  flavor: {
    text: 'Etymology: First attested in 1730. Origin uncertain, perhaps of Cornish origin (recorded as blogon c. 1450) or from Middle French bougeon, a diminutive of bouge (“club, stick”).'
  },
  description: 'A short, heavy club, often of wood, which is thicker or loaded at one end.',
  delay: {
    mean: 1.5,
    dev: 0.05
  },
  relativeWeight: 20
}

const billyClub = {
  ...baton,
  name: 'billy club',
  flavor: {
    text: 'In the Victorian era, police in London carried truncheons about one foot long called billy clubs. According to the Online Etymology Dictionary, this name is first recorded in 1848 as slang for a burglars\' crowbar.'
  },
  range: {
    min: 0.8,
    mean: 1
  },
  relativeWeight: 15
}

const truncheon = {
  ...baton,
  name: 'police truncheon',
  flavor: {
    text: 'The truncheon acted as the policeman\'s "Warrant Card" as the Royal Crest attached to it indicated the policeman\'s authority.'
  },
  relativeWeight: 50
}

const kubotan = {
  ...truncheon,
  name: 'kubotan',
  description: 'a short, thin, lightweight club often used by law enforcement officers',
  flavor: {
    text: 'to encourage compliance'
  },
  relativeWeight: 10,
  damageTypes: truncheon.damageTypes.map((damageType) => ({
    ...damageType,
    amount: {
      ...damageType.amount,
      mean: damageType.amount.mean * 0.8
    }
  }))
}

const cosh = {
  ...massProducedClub,
  name: 'cosh',
  material: [
    metalTypes,
    {
      value: 'lead',
      relativeWeight: 200
    }],
  description: 'A short, easily concealed club weapon consisting of a dense weight attached to the end of a short shaft, used as a bludgeon.',
  relativeWeight: 30,
  range: {
    min: 0.2,
    mean: 0.5
  },
  damageTypes: [{
    type: 'bludgeoning',
    amount: {
      min: 0,
      mean: 20
    }
  }]
}

const blackjack = {
  ...cosh,
  name: 'blackjack'
}

const sap = {
  ...cosh,
  name: 'sap',
  material: 'wood',
  relativeWeight: 10
}

const leangle = {
  ...sap,
  name: 'leangle',
  relativeWeight: 3,
  description: 'An Aboriginal fighting club with a hooked striking head.',

  damageTypes: sap.damageTypes.map((damageType) => ({
    ...damageType,
    amount: {
      ...damageType.amount,
      mean: damageType.amount.mean * 1.8
    }
  })),
  flavor: {
    text: 'The name comes from Kulin languages such as Wemba-Wemba and Woiwurrung, based on the word lia (tooth).'
  }
}

const clava = {
  ...cosh,
  name: 'clava mere okewa',
  description: 'a traditional stone hand-club used by Mapuche Indians in Chile, featuring a long flat body.',
  material: 'stone',
  relativeWeight: 10,
  origin: 'exotic'
}

const aklys = {
  ...massProducedClub,
  origin: 'exotic',
  name: 'aklys',
  description: 'a small mace or club equipped with spikes, attached to one arm of the wielder by a strap of adjustable length to enable the weapon to be retrieved after it had been hurled at an enemy.',
  flavor: {
    text: 'Aklys\' use probably goes back to the Osci tribe of southern Italy.'
  },
  damageTypes: [
    ...massProducedClub.damageTypes,
    {
      type: 'piercing',
      amount: {
        min: 0,
        mean: 5
      }
    }],
  range: {
    min: 1.5,
    mean: 2
  },
  delay: {
    mean: 2.2,
    dev: 0.1
  },
  relativeWeight: 3
}

const cudgel = {
  ...massProducedClub,
  origin: 'crude',
  name: 'cudgel',
  description: 'A stout stick carried by peasants during the Middle Ages. It functioned as a walking staff and a weapon for both self-defence and wartime.',
  flavor: {
    text: 'Regiments of clubmen were raised as late as the English Civil War (1642–1651)'
  }
}

const singleStick = {
  ...cudgel,
  relativeWeight: 30,
  name: 'singleStick',
  flavor: {
    text: 'Also known as a "cudgel"'
  }
}

const jutte = {
  ...massProducedClub,
  alterations: [
    ...massProducedClub.alterations
    // todo parry logic?
  ],
  material: metalTypes,
  name: 'jutte',
  origin: 'exotic',
  description: 'Basically an iron rod with a single hook on the side near the handle.',
  flavor: {
    text: 'In feudal Japan, it was a crime punishable by death to bring a sword into the shōgun\'s palace. This law applied to almost everyone, including the palace guards. Due to this prohibition, several kinds of non-bladed weapons were carried by palace guards. The jitte proved particularly effective and evolved to become the symbol of a palace guard\'s exalted position.'
  },
  relativeWeight: 5

}

const knobkierrie = {
  ...sap,
  origin: 'exotic',
  name: 'knobkierrie',
  damageTypes: sap.damageTypes.map((damageType) => ({
    ...damageType,
    amount: {
      ...damageType.amount,
      mean: damageType.amount.mean * 1.2
    }
  }))
}

const kiyoga = {
  ...baton,
  name: 'kiyoga',
  description: 'The tip and first section slide into the spring, and the whole nests into a seven-inch handle. To deploy the kiyoga, all that is necessary is to grasp the handle and swing.',
  flavor: {
    text: 'The kiyoga has one advantage over a conventional collapsible baton: it can reach around a raised arm trying to block it to strike the head.'
  },
  range: {
    ...baton.range,
    mean: baton.range.mean * 2
  },
  relativeWeight: 15
}

const mace = {
  ...massProducedClub,
  name: 'mace',
  material: metalTypes,
  description: 'a metal club with a heavy head on the end, designed to deliver very powerful blows.',
  delay: {
    ...massProducedClub.delay,
    mean: massProducedClub.delay.mean * 1.2
  },
  weight: {
    ...massProducedClub.weight,
    mean: massProducedClub.weight.mean * 3
  },
  damageTypes: massProducedClub.damageTypes.map((damageType) => ({
    ...damageType,
    amount: {
      ...damageType.amount,
      mean: damageType.amount.mean * 2.7
    }
  }))
}

const spikedMace = {
  ...mace,
  name: 'spiked mace',
  material: metalTypes,
  description: 'a metal club with a heavy head on the end, designed to deliver very powerful blows.',
  delay: {
    ...massProducedClub.delay,
    mean: massProducedClub.delay.mean * 1.2
  },
  weight: {
    ...massProducedClub.weight,
    mean: massProducedClub.weight.mean * 3
  },
  damageTypes: massProducedClub.damageTypes.map((damageType) => ({
    ...damageType,
    amount: {
      ...damageType.amount,
      mean: damageType.amount.mean * 2.7
    }
  }))
}

const twoHandMace = {
  ...mace,
  handedness: 'two hand',
  range: {
    min: 0.9,
    mean: 1.25
  },
  delay: {
    mean: 3,
    dev: 0.1
  },
  weight: {
    min: 2,
    mean: 5
  }
}

const massProducedTwoHandClub = {
  ...twoHandMace,
  name: 'club',
  material: [
    {
      value: 'wood',
      relativeWeight: 1000
    },
    ...woodTypes
  ],
  origin: 'standardized',
  damageTypes: [{
    type: 'bludgeoning',
    amount: {
      min: 0,
      mean: 35
    }
  }]
}

const kanabo = {
  ...massProducedTwoHandClub,
  origin: 'exotic',
  name: 'kanabō',
  flavor: {
    text: 'Like giving a kanabō to an oni'
  },
  description: 'a spiked or studded two-handed war club',
  critChance: {
    ...massProducedTwoHandClub.critChance,
    mean: massProducedTwoHandClub.critChance.mean * 1.8
  },
  relativeWeight: 20
}

const metalKanabo = {
  ...kanabo,
  name: 'metal kanabō',
  material: metalTypes,
  damageTypes: kanabo.damageTypes.map((damageType) => ({
    ...damageType,
    amount: {
      ...damageType.amount,
      mean: damageType.amount.mean * 1.9
    }
  })),
  relativeWeight: 15
}

const oniKanabo = {
  ...metalKanabo,
  origin: 'magical',
  name: 'oni\'s kanabō',
  flavor: {
    text: 'Like pouring gas on a fire'
  },
  damageTypes: [
    ...metalKanabo.damageTypes,
    {
      type: 'fire',
      amount: {
        min: 0,
        mean: 7
      }
    }],
  relativeWeight: 2
}

exports.maces = [
  // one hand
  // stick-like
  stick,
  branch,
  _switch,
  stalk,
  twig,
  timber,
  // club-like
  bat,
  club,
  baton,
  truncheon,
  kubotan,
  blackjack,
  sap,
  cosh,
  billyClub,
  bludgeon,
  singleStick,
  cudgel,
  kiyoga,
  // metal
  mace,
  spikedMace,
  // traditional/exotic
  aklys,
  clava,
  jutte,
  knobkierrie,
  leangle,
  // two hand
  // exotic
  kanabo,
  metalKanabo,
  // magical
  oniKanabo
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

]
