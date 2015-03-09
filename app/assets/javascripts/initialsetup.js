//game stats
var turns;
var maxMessages = 50;

//declare data variables
var eventslist;
var locationslist;
var itemslist;
var recipeslist;

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
var food = 0;
var morale = 0;
var shelter = 0;
var tools = 0;
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

function initGameState(){
  turns = 0;
  food = 4;
  morale = 4;
  shelter = 4;
  tools = 1;
  common_mats = 2;
  uncommon_mats = 0;
  rare_mats = 0;
  attack = 1;
  actions = 3;
  actionsLeft = actions;
  reckless = 0;
  thorough = 0;
}

//modifications that last this turn only
var untilEndofTurn = {
  modAttack: 0,
  modActions: 0,
  modReckless: 0,
  modThorough: 0,
  modZombieStrength: 0
}
