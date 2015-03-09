$(document).ready(function() {

// JS load game assets from database
  gameState.all_events = gon.events
  gameState.all_locations = gon.locations
  gameState.all_items = gon.items
  gameState.all_recipes = gon.recipes

  var i;
  // separate locations by district
  for(i = 0; i < gameState.all_locations.length; i++){
    var templocation = gameState.all_locations[i].district;
    if(templocation === "Suburbs"){
      allsuburbs.push(gameState.all_locations[i]);
    }
    else if(templocation === "Downtown"){
      alldowntown.push(gameState.all_locations[i]);
    }
    else {
      allwharf.push(gameState.all_locations[i]);
    }
  }
  //separate items by location
  for(i = 0; i < gameState.all_items.length; i++){
    var tempspawn = gameState.all_items[i].spawnarea;
    if(tempspawn === "Suburbs"){
      suburbItems.push(gameState.all_items[i])
    }
    else if(tempspawn === "Downtown"){
      downtownItems.push(gameState.all_items[i])
    }
    else if(tempspawn === "Wharf"){
      wharfItems.push(gameState.all_items[i])
    }
    else{
      universalItems.push(gameState.all_items[i])
    }
  }
  //add starting recipes to players available recipes, others to game
  for(i = 0; i < gameState.all_recipes.length; i++){
    var startType = gameState.all_recipes[i].starting;
    if(startType === "true"){
        recipes.push(gameState.all_recipes[i]);
    } else {
      gameRecipes.push(gameState.all_recipes[i]);
    }
  }
});

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
