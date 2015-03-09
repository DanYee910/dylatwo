$(document).ready(function() {

// JS load game assets from database
  eventslist = gon.events
  locationslist = gon.locations
  itemslist = gon.items
  recipeslist = gon.recipes

  // separate locations by district
  for(var idx = 0; idx < locationslist.length; idx++){
    var templocation = locationslist[idx].district;
    if(templocation === "Suburbs"){
      allsuburbs.push(locationslist[idx]);
    }
    else if(templocation === "Downtown"){
      alldowntown.push(locationslist[idx]);
    }
    else {
      allwharf.push(locationslist[idx]);
    }
  }
  //separate items by location
  for(var idx = 0; idx < itemslist.length; idx++){
    var tempspawn = itemslist[idx].spawnarea;
    if(tempspawn === "Suburbs"){
      suburbItems.push(itemslist[idx])
    }
    else if(tempspawn === "Downtown"){
      downtownItems.push(itemslist[idx])
    }
    else if(tempspawn === "Wharf"){
      wharfItems.push(itemslist[idx])
    }
    else{
      universalItems.push(itemslist[idx])
    }
  }
  //add starting recipes to players available recipes, others to game
  for(var idx = 0; idx < recipeslist.length; idx++){
    var startType = recipeslist[idx].starting;
    if(startType === "true"){
        recipes.push(recipeslist[idx]);
    } else {
      gameRecipes.push(recipeslist[idx]);
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
