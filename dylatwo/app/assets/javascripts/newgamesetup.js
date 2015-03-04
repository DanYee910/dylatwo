$(document).ready(function() {
  initGameState();

// JS load game assets from database
  var eventslist = $.parseJSON($('#eventinfo').attr('dataevents'))
  var locationslist = $.parseJSON($('#locationinfo').attr('datalocations'))
  var itemslist = $.parseJSON($('#itemsinfo').attr('dataitems'))
  var recipeslist = $.parseJSON($('#recipesinfo').attr('datarecipes'))

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
      suburbs.push(locationslist[idx]);
    }
    else if(templocation === "Downtown"){
      downtown.push(locationslist[idx]);
    }
    else {
      wharf.push(locationslist[idx]);
    }
  }

  //find and add starting recipes to players available recipes
  for(var idx = 0; idx < recipeslist.length; idx++){
    var startType = recipeslist[idx].starting;
    if(startType === "true"){
        player["recipes"].push(recipeslist[idx]);
    }
  }
});
