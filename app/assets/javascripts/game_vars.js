var maxMessages = 50;

//locations decks
var allsuburbs = [];
var alldowntown = [];
var allwharf = [];

//item decks
var suburbItems = [];
var downtownItems = [];
var wharfItems = [];
var universalItems = [];
var gameRecipes = [];

//player stats
var backpack = [];//temp storage from exploring
var common_mats = 0;
var uncommon_mats = 0;
var rare_mats = 0;
var recipes = [];
var attack = 0;
var actions = 0;
var actionsLeft = 0;
var reckless = 0; //more zombies encountered
var thorough = 0; //more items found

//game variables
var currentDowntown;
var currentSuburbs;
var currentWharf;
var currentExploreDiff;
var currentDistrict;
var currentLocation;

//modifications that last this turn only
var untilEndofTurn = {
  modAttack: 0,
  modActions: 0,
  modReckless: 0,
  modThorough: 0,
  modZombieStrength: 0
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
  allEvents: [],
  allLocations: [],
  allItems: [],
  allRecipes: []
}
