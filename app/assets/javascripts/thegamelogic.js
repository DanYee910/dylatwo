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
    var numRewards;//up to 2 for quick, 4 for cautious, 6 full
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
    //add player attack and temp mods
    var finalAtk = player.attack + untilEndofTurn.modAttack;
    //add random zombie roll plus mods
    z = getRandomInt(min, max);
    var finalZ = z + untilEndofTurn.modZombieStrength;
    //combat
    if(finalAtk >= finalZ){
      //success, add items to backpack
      console.log('you win!');
      console.log('found '+num+' items');
      findItems(currentDistrict, num);
    }
    else{
      //fail, get nothing
      console.log('FAIL! You get JACK SHIT.');
    }
  }

  function findItems(district, num){
    //set up district decks
    var here;
    var there1;
    var there2;
    if(district === "suburbs"){
      here = suburbItems;
      there1 = downtownItems;
      there2 = wharfItems;
    }
    else if(district === "downtown"){
      here = downtownItems;
      there1 = suburbItems;
      there2 = wharfItems;
    } else {
      here = wharfItems;
      there1 = suburbItems;
      there2 = downtownItems;
    }
    //chances = 2 for own district, 2 for universal, 1 each for other district or recipe
    for(var items = 0; items < num; items++){
      //get random item category
      var cat = getRandomInt(0,6);
      //get recipes
      if(cat === 0){
        var r = gameRecipes[getRandomInt(0,gameRecipes.length - 1)];
        console.log('you found '+r.name);
        player['backpack'].push(r);
      }
      //get universal items
      else if(cat === 1 || cat === 2){
        var i = universalItems[getRandomInt(0,universalItems.length - 1)];
        console.log('you found '+i.name);
        player['backpack'].push(i);
      }
      //get district items
      else if(cat === 3 || cat === 4){
        var i = here[getRandomInt(0,here.length - 1)];
        console.log('you found '+i.name);
        player['backpack'].push(i);
      }
      //get other 2 district items
      else if(cat === 5) {
        var i = there1[getRandomInt(0,there1.length - 1)];
        console.log('you found '+i.name);
        player['backpack'].push(i);
      }
      else if(cat === 6){
        var i = there2[getRandomInt(0,there2.length - 1)];
        console.log('you found '+i.name);
        player['backpack'].push(i);
      }
    }
    console.log(player['backpack']);
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
