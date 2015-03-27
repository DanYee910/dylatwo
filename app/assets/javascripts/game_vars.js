var maxMessages = 50;
var winCons = {
  maxturns: 10,
  foodWin: 25,
  foodMeh: 15,
  moraleWin: 10,
  moraleMeh: 7,
  shelterWin: 10,
  shelterMeh: 7
}
var endGameMsgs = {
  foodWin: 'WIN! You have stockpiled plenty of food to last you through the winter.',
  foodMeh: 'BARELY SURVIVING.  You might have enough food to survive, a little emaciation never hurt anyone right?',
  foodLose: 'LOSE! Food? What food? Looks like everyone will starve to death...',
  moraleWin: 'WIN! Spirits are high, you will make it through the cold months ahead.',
  moraleMeh: 'BARELY SURVIVING.  Everyone is on edge, things will work out if no one snaps.',
  moraleLose: 'LOSE! Your party goes crazy and everyone turns on each other.',
  shelterWin: 'WIN! You have a nice warm shelter to wait out the cold.',
  shelterMeh: 'BARELY SURVIVING.  The cold air seeps in, not the most comfortable place to be but everyone will live.',
  shelterLose: 'LOSE! If the zombies don\'t get everyone the elements will.'
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
  district: '',
  here: '',
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
