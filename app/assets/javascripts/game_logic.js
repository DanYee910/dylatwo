$(document).ready(function() {
  //add explore handlers
  addExploreHandler('subq', 'quick', 'suburbs');
  addExploreHandler('subc', 'cautious', 'suburbs');
  addExploreHandler('subf', 'full',  'suburbs');
  addExploreHandler('dowq', 'quick', 'downtown');
  addExploreHandler('dowc', 'cautious', 'downtown');
  addExploreHandler('dowf', 'full',  'downtown');
  addExploreHandler('whaq', 'quick', 'wharf');
  addExploreHandler('whac', 'cautious', 'wharf');
  addExploreHandler('whaf', 'full',  'wharf');
  addFindLocHandler('sube', 'suburbs');
  addFindLocHandler('dowe', 'downtown');
  addFindLocHandler('whae', 'wharf');

  //remove EoT effects
  function clearEndofTurn(){
    untilEndofTurn.modAttack = 0;
    untilEndofTurn.modActions = 0;
    untilEndofTurn.modReckless = 0;
    untilEndofTurn.modThorough = 0;
    untilEndofTurn.modZombieStrength = 0;
    actionsLeft = actions;
  }

  //functions to add handlers
  function addExploreHandler(id, diff, district){
    $('#'+id+'').on('click', function(){
      if(actionsLeft > 0){
        exploreHere(diff, district);
      } else{
        printLog('Not enough actions!');
      }
    });
  }

  function addFindLocHandler(id, district){
    $('#'+id+'').on('click', function(){
      if(actionsLeft > 0){
        findNewLoc(district);
      } else{
        printLog('Not enough actions!');
      }
    });
  }


  //random int function
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //update the stats sidebar view with current player values
  function updatePlayerStatsView(){
    $('#sidebar-turns').html(gameState.turns);
    $('#sidebar-food').html(gameState.food);
    $('#sidebar-morale').html(gameState.morale);
    $('#sidebar-shelter').html(gameState.shelter);
    $('#sidebar-tools').html(gameState.tools);
    $('#sidebar-common').html(gameState.mat.common);
    $('#sidebar-uncommon').html(gameState.mat.uncommon);
    $('#sidebar-rare').html(gameState.mat.rare);
  }
  //update away party stats
  function updatePartyStatsView(){
    $('#party-attack').html(attack);
    $('#party-actions').html(actionsLeft);
    $('#party-reckless').html(reckless);
    $('#party-thorough').html(thorough);
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
    $('#'+district+' .loc-name').html(locObj.name);
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
    var max = gameState.allEvents.length - 1
    var idx = getRandomInt(min, max)
    currentEvent = gameState.allEvents[idx]

    $('#current-event .event-name').html('Event: ' + currentEvent.name);
    $('#current-event .event-txt').html(currentEvent.flavortext);
    $('#current-event .event-effect').html('End of Turn => '+currentEvent.effect);
  }

  //explore
  function exploreHere(diff, district){
    //consume 1 action
    actionsLeft -= 1
    updatePartyStatsView();
    currentExploreDiff = diff;
    currentDistrict = district;

    //find location
    if(currentDistrict === "suburbs"){
      currentLocation = currentSuburbs;
    }
    else if(currentDistrict === "downtown"){
      currentLocation = currentDowntown;
    }
    else {
      currentLocation = currentWharf;
    }
    printLog('Searching '+currentLocation.name+'...');

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
    //add thorough bonus
    // numRewards += untilEndofTurn.modThorough

    setTimeout(function(){fightZombies(zmin, zmax, numRewards)}, 1500);
  }

  //combat
  function fightZombies(min, max, num){
    //add player attack and temp mods
    var finalAtk = attack + untilEndofTurn.modAttack;
    //add random zombie roll plus mods
    z = getRandomInt(min, max);
    var finalZ = z + untilEndofTurn.modZombieStrength;
    //combat
    if(finalAtk >= finalZ){
      //success, add items to backpack
      printLog('Zombies defeated, found '+num+' items!');
      setTimeout(function(){findItems(currentDistrict, num)}, 1000);
    }
    else{
      //fail, get nothing
      printLog('Too many zombies, you run for your life emptyhanded.');
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
        printLog('you found recipe: '+r.name);
        backpack.push(r);
      }
      //get universal items
      else if(cat === 1 || cat === 2){
        var i = universalItems[getRandomInt(0,universalItems.length - 1)];
        printLog('you found: '+i.name);
        backpack.push(i);
      }
      //get district items
      else if(cat === 3 || cat === 4){
        var i = here[getRandomInt(0,here.length - 1)];
        printLog('you found: '+i.name);
        backpack.push(i);
      }
      //get other 2 district items
      else if(cat === 5) {
        var i = there1[getRandomInt(0,there1.length - 1)];
        printLog('you found: '+i.name);
        backpack.push(i);
      }
      else if(cat === 6){
        var i = there2[getRandomInt(0,there2.length - 1)];
        printLog('you found: '+i.name);
        backpack.push(i);
      }
    }
    console.log(backpack);
  }

  function findNewLoc(district){
    //consume 1 action
    actionsLeft -= 1
    updatePartyStatsView();
    //get new location
    if(district === "suburbs"){
      showNewLocation("suburbs", allSuburbs);
      printLog('Found a new place in the suburbs.');
    }
    else if(district === "downtown"){
      showNewLocation("downtown", allDowntown);
      printLog('Found a new place downtown');
    } else {
      showNewLocation("wharf", allWharf);
      printLog('Found a new place at the wharf');
    }
  }

  //print message to game log
  function printLog(string){
    if($('.game-log tr').length === maxMessages){
      $('.game-log tr:nth-child(1)').remove();
    }
    $('#game-msg').append('<tr><td>'+string+'</td></tr>');
    $('.game-log').scrollTop($('.game-log')[0].scrollHeight);
  }

  //******* BEGIN GAME *********
  //initialize game stats and stat views
  initGameState();
  updatePlayerStatsView();
  updatePartyStatsView();
  //deal starting 3 locations
  showNewLocation("suburbs", allSuburbs);
  showNewLocation("downtown", allDowntown);
  showNewLocation("wharf", allWharf);
  //get an event
  newEvent();
})
