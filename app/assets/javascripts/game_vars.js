var maxMessages = 50;

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
  backpack: [],//temp storage from exploring, empty end of turn
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
  turns: 0,
  food: 4,
  morale: 4,
  shelter: 4,
  tools: 1,
  mat: {
    common: 2,
    uncommon: 0,
    rare: 0
  },
  recipes: [],
  allEvents: [],
  allLocations: [],
  allItems: [],
  allRecipes: []
}
