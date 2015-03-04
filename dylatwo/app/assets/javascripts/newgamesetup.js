$(document).ready(function() {
  zeroGameState();

// JS load game assets from database
  var eventslist = $.parseJSON($('#eventinfo').attr('dataevents'))
  var locationslist = $.parseJSON($('#locationinfo').attr('datalocations'))
  var itemslist = $.parseJSON($('#itemsinfo').attr('dataitems'))

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

});
