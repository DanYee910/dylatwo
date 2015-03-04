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
});
