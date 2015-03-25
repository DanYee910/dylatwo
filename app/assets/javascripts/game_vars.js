var maxMessages = 50;
var winCons = {
  maxturns: 10,
  foodwin1: 20,
  foodwin2: 10,
  moralewin1: 20,
  moralewin2: 10,
  shelterwin1: 20,
  shelterwin2: 10
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

//game variables
var gameVars = {
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
  reckless: 0, //+max range zombies encountered
  thorough: 0 //more items found
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
