//game stats
var turns;

//locations
var suburbs = [];
var downtown = [];
var wharf = [];

//player stats
var food;
var morale;
var shelter;
var tools;
var common_mats;
var uncommon_mats;
var rare_mats;
var recipes = [];
var attack;
var actions;
var reckless;//more zombies encountered
var thorough;//more items found

function zeroGameState(){
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
  reckless = 0;
  thorough = 0;
}
