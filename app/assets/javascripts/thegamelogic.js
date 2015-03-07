$(document).ready(function() {
  //add explore handlers
  addExploreHandler('subq');
  addExploreHandler('subc');
  addExploreHandler('subf');
  addExploreHandler('dowq');
  addExploreHandler('dowc');
  addExploreHandler('dowf');
  addExploreHandler('whaq');
  addExploreHandler('whac');
  addExploreHandler('whaf');

  //modifications that last this turn only
  var untilEndofTurn = {
    modAttack: 0,
    modActions: 0,
    modReckless: 0,
    modThorough: 0,
    modZombieStrength: 0
  }

  //remove EoT effects
  function clearEndofTurn(){
    untilEndofTurn.modAttack = 0;
    untilEndofTurn.modActions = 0;
    untilEndofTurn.modReckless = 0;
    untilEndofTurn.modThorough = 0;
    untilEndofTurn.modZombieStrength = 0;
  }

  //function to add explore handlers
  function addExploreHandler(id){
    $('#'+id+'').on('click', exploreHere);
  }

  //random int function
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
  function showNewLocation(district, alldistrict){
    //get a random location
    var min = 0
    var max = alldistrict.length - 1
    var idx = getRandomInt(min, max)
    var locObj = alldistrict[idx]

    //store as current loc variable
    if(district === "suburbs"){
      currentSuburbs = locObj;
    }
    else if(district === "downtown"){
      currentDowntown = locObj;
    }
    else{
      currentWharf = locObj;
    }

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

  //show a new Event
  function newEvent(){
    //get random event
    var min = 0
    var max = eventslist.length - 1
    var idx = getRandomInt(min, max)
    var event = eventslist[idx]

    $('#currentevent .eventname').html('Event: ' + event.name);
    $('#currentevent .eventtxt').html(event.flavortext);
    $('#currentevent .eventeffect').html('End of Turn => '+event.effect);
  }

  //explore
  function exploreHere(){
    //find current explore diff, quick, cautious, or full
    currentExploreDiff = $(this).parent().parent().attr('class');

    //find location
    var firstThreeId = $(this).attr('id').substr(0,3);
    if(firstThreeId === "sub"){
      currentDistrict = "suburbs";
      currentLocation = currentSuburbs;
    }
    else if(firstThreeId === "dow"){
      currentDistrict = "downtown";
      currentLocation = currentDowntown;
    }
    else {
      currentDistrict = "wharf";
      currentLocation = currentWharf;
    }

    //find fight values here
    var zmin;
    var zmax;
    var numRewards;
    if(currentExploreDiff === 'quick'){
      zmin = currentLocation.fastmin;
      zmax = currentLocation.fastmax;
      numRewards = getRandomInt(0,2);
    }
    else if(currentExploreDiff === 'cautious'){
      zmin = currentLocation.medmin;
      zmax = currentLocation.medmax;
      numRewards = getRandomInt(0,4);
    } else {
      zmin = currentLocation.slowmin;
      zmax = currentLocation.slowmax;
      numRewards = getRandomInt(0,6);
    }

    fightZombies(zmin, zmax, numRewards);
  }

  //combat
  function fightZombies(min, max, num){
    //player attack and temp mods
    var finalAtk = player.attack + untilEndofTurn.modAttack;
    //zombie roll plus mods
    z = getRandomInt(min, max);
    var finalZ = z + untilEndofTurn.modZombieStrength;
    //combat
    if(finalAtk >= finalZ){
      //success, add items to backpack
      console.log('you win!');
      findItems(currentDistrict, num);
    }
    else{
      //fail, get nothing
      console.log('FAIL!');
    }
  }

  function findItems(district, num){
    //for either of 3 district
    //for each difficulty, quick, cautious, full
    //0-2, 0-4,0-6
    for(var items = 0, items < num, items++){

    }
  }

  //******* BEGIN GAME *********
  //initialize game stats and stat views
  initGameState();
  updatePlayerStatsView();
  updatePartyStatsView();
  //deal starting 3 locations
  showNewLocation("suburbs", allsuburbs);
  showNewLocation("downtown", alldowntown);
  showNewLocation("wharf", allwharf);
  //get an event
  newEvent();
})
