$(document).ready(function() {

  //random function
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //update the stats sidebar view with current player values
  function updatePlayerStatsView(){
    $('#sidebarturns').html(turns);
    $('#sidebarfood').html(player.food);
    $('#sidebarmorale').html(player.morale);
    $('#sidebarshelter').html(player.shelter);
    $('#sidebartools').html(player.tools);
    $('#sidebarcommon').html(player.common_mats);
    $('#sidebaruncommon').html(player.uncommon_mats);
    $('#sidebarrare').html(player.rare_mats);
  }
  //update away party stats
  function updatePartyStatsView(){
    $('#partyattack').html(player.attack);
    $('#partyactions').html(player.actions);
    $('#partyreckless').html(player.reckless);
    $('#partythorough').html(player.thorough);
  }

  //show a new location
  // for a district, pick a random obj from the array of the same name as district, set values
  function showNewLocation(district, alldistrict){
    //get a random location
    var min = 0
    var max = alldistrict.length - 1
    var idx = getRandomInt(min, max)
    var locObj = alldistrict[idx]

    //update correct view with this location
    // $('#'+district+' .locationimg').attr('src', locObj.imgtag);
    $('#'+district+' .locname').html(locObj.name);
    $('#'+district+' .qmin').html(locObj.fastmin);
    $('#'+district+' .qmax').html(locObj.fastmax);
    $('#'+district+' .cmin').html(locObj.medmin);
    $('#'+district+' .cmax').html(locObj.medmax);
    $('#'+district+' .fmin').html(locObj.slowmin);
    $('#'+district+' .fmax').html(locObj.slowmax);
    $('#'+district+' .flavtxt').html(locObj.flavortext);
  }

  //initialize game stats and stat views
  initGameState();
  updatePlayerStatsView();
  updatePartyStatsView();
  //deal starting 3 locations
  showNewLocation("suburbs", allsuburbs);
  showNewLocation("downtown", alldowntown);
  showNewLocation("wharf", allwharf);
})
