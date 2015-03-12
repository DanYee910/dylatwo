$(document).ready(function() {

// JS load game assets from database
  gameState.allEvents = gon.events
  gameState.allLocations = gon.locations
  gameState.allItems = gon.items
  gameState.allRecipes = gon.recipes

  var i;
  // separate locations by district
  for (var i = 0; i < gameState.allLocations.length; i++) {
    var templocation = gameState.allLocations[i].district;
    if(templocation === "Suburbs") {
      allSuburbs.push(gameState.allLocations[i]);
    }
    else if (templocation === "Downtown") {
      allDowntown.push(gameState.allLocations[i]);
    }
    else {
      allWharf.push(gameState.allLocations[i]);
    }
  }
  //separate items by location
  for (var i = 0; i < gameState.allItems.length; i++) {
    var tempspawn = gameState.allItems[i].spawnarea;
    if (tempspawn === "Suburbs") {
      suburbItems.push(gameState.allItems[i])
    }
    else if (tempspawn === "Downtown") {
      downtownItems.push(gameState.allItems[i])
    }
    else if (tempspawn === "Wharf") {
      wharfItems.push(gameState.allItems[i])
    }
    else {
      universalItems.push(gameState.allItems[i])
    }
  }
  //add starting recipes to players available recipes, others to game
  for (var i = 0; i < gameState.allRecipes.length; i++) {
    var startType = gameState.allRecipes[i].starting;
    if (startType) {
        gameState.recipes.push(gameState.allRecipes[i]);
    } else {
      gameRecipes.push(gameState.allRecipes[i]);
    }
  }
});

function initGameState(){
  //set permanent
  permStats.attack = 1;
  permStats.actions = 3;
  permStats.reckless = 0;
  permStats.thorough = 0;
  refreshPartyStats();
  //hide button because no selected recipe
  $('.craft-button').toggle();
}

function refreshPartyStats(){
  //add temporary bonuses
  moddedStats.attack = permStats.attack + untilEndofTurn.modAttack;
  moddedStats.actions = permStats.actions + untilEndofTurn.modActions;
  moddedStats.reckless = permStats.reckless + untilEndofTurn.modReckless;
  moddedStats.thorough = permStats.thorough + untilEndofTurn.modThorough;
  //set actions for turn
  untilEndofTurn.actionsLeft = moddedStats.actions;
}
