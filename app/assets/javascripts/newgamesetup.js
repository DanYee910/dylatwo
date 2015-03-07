$(document).ready(function() {

// JS load game assets from database
  eventslist = $.parseJSON($('#eventinfo').attr('dataevents'))
  locationslist = $.parseJSON($('#locationinfo').attr('datalocations'))
  itemslist = $.parseJSON($('#itemsinfo').attr('dataitems'))
  recipeslist = $.parseJSON($('#recipesinfo').attr('datarecipes'))

//testing
  $('#test').on('click', function(){
    console.log(food);
  });

// for(key in eventslist) {
//     console.log(key, eventslist[key]);
// }

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
        player["recipes"].push(recipeslist[idx]);
    } else {
      gameRecipes.push(recipeslist[idx]);
    }
  }
});
