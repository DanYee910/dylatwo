//game stats
var turns;

//locations decks
var suburbs = [];
var downtown = [];
var wharf = [];

//player stats
var player = {
  food: 0,
  morale: 0,
  shelter: 0,
  tools: 0,
  common_mats: 0,
  uncommon_mats: 0,
  rare_mats: 0,
  recipes: [],
  attack: 0,
  actions: 0,
  reckless: 0,//more zombies encountered
  thorough: 0//more items found
}

function initGameState(){
  turns = 0;
  player["food"] = 4;
  player["morale"] = 4;
  player["shelter"] = 4;
  player["tools"] = 1;
  player["common_mats"] = 2;
  player["uncommon_mats"] = 0;
  player["rare_mats"] = 0;
  player["attack"] = 1;
  player["actions"] = 3;
  player["reckless"] = 0;
  player["thorough"] = 0;
}
