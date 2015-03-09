//game stats
var turns;
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

//modifications that last this turn only
var untilEndofTurn = {
  modAttack: 0,
  modActions: 0,
  modReckless: 0,
  modThorough: 0,
  modZombieStrength: 0
}

var gameState = {
  all_events: [],
  all_locations: [],
  all_items: [],
  all_recipes: []
}
