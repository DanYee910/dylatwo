var maxMessages = 50;
var winCons = {
  maxturns: 10,
  foodwin1: 25,
  foodwin2: 15,
  moralewin1: 10,
  moralewin2: 7,
  shelterwin1: 10,
  shelterwin2: 7
}

//locations decks
var allSuburbs = [];
var allDowntown = [];
var allWharf = [];

//item decks
var suburbItems = [];
var downtownItems = [];
var wharfItems = [];
var universalItems = [];
var gameRecipes = [];

var gameVars = {
  maxQuickLoot: 2,
  maxCautiousLoot: 4,
  maxFullLoot: 6,
  downtown: '',
  suburbs: '',
  wharf: '',
  exploreDiff: '',
  district: '',
  location: '',
  evnt: ''
}

//permanent away party stats
var permStats = {
  itemsbackpack: [],
  recipesbackpack: [],
  attack: 0,
  actions: 0,
  reckless: 0,
  thorough: 0
}
//modifications that last this turn only
var untilEndofTurn = {
  actionsLeft: 0,
  modAttack: 0,
  modActions: 0,
  modReckless: 0,
  modThorough: 0,
  modZombieStrength: 0
}

var moddedStats = {
  attack: 0,
  actions: 0,
  reckless: 0,
  thorough: 0
}

var gameState = {
  turns: 1,
  food: 4,
  morale: 4,
  shelter: 4,
  tools: 1,
  mat: {
    common: 2,
    uncommon: 1,
    rare: 1
  },
  recipes: [],
  created: [],
  allEvents: [],
  allLocations: [],
  allItems: [],
  allRecipes: []
}

var bonusesAtEoT = {
      food: 0,
      shelter: 0,
      morale: 0,
      tools: 0,
      attack: 0,
      actions: 0,
      reckless: 0,
      thorough: 0,
      common: 0,
      uncommon: 0,
      rare: 0
}
