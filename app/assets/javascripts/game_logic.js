$(document).ready(function() {
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
  //all buttons show hovering
  $('button').hover(function(){
    $(this).toggleClass('buttonhovering')
  })
  //handler to highlight selected recipe
  $('#my-camp').on('click', '.recipe-row', function(){
    $('.recipe-row').removeClass('selected');
    $(this).toggleClass('selected');
    var idx = $('.recipe-table tr td').index($('.selected'));
    showSelectedRecipe(idx);
  })
  //handler to craft
  $('.craft-button').on('click', function(){
    var idx = $('.recipe-table tr td').index($('.selected'));
    craftSelected(idx);
  })
  //end of turn button handler
  $('#end-turn').on('click',function(){
    getItemsandRecipes();
    clearEndofTurn();
    getEffects();
    showAvailRecipes();
  })

  //remove EoT effects
  function clearEndofTurn(){
    untilEndofTurn.modAttack = 0;
    untilEndofTurn.modActions = 0;
    untilEndofTurn.modReckless = 0;
    untilEndofTurn.modThorough = 0;
    untilEndofTurn.modZombieStrength = 0;
    untilEndofTurn.actionsLeft = moddedStats.actions;
  }

  //functions to add handlers
  function addExploreHandler(id, diff, district){
    $('#'+id+'').on('click', function(){
      if(untilEndofTurn.actionsLeft > 0){
        exploreHere(diff, district);
      } else{
        printLog('Not enough actions!');
      }
    });
  }

  function addFindLocHandler(id, district){
    $('#'+id+'').on('click', function(){
      if(untilEndofTurn.actionsLeft > 0){
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
    $('#party-attack').html(moddedStats.attack);
    $('#party-actions').html(untilEndofTurn.actionsLeft);
    $('#party-reckless').html(moddedStats.reckless);
    $('#party-thorough').html(moddedStats.thorough);
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
      gameVars.suburbs = locObj;
    }
    else if(district === "downtown"){
      gameVars.downtown = locObj;
    }
    else{
      gameVars.wharf = locObj;
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
    printLog(locObj.name+' discovered!');
  }

  //show a new Event
  function newEvent(){
    //get random event
    var min = 0
    var max = gameState.allEvents.length - 1
    var idx = getRandomInt(min, max)
    gameVars.evnt = gameState.allEvents[idx]

    $('#current-event .event-name').html('Event: ' + gameVars.evnt.name);
    $('#current-event .event-txt').html(gameVars.evnt.flavortext);
    $('#current-event .event-effect').html('End of Turn => '+gameVars.evnt.effect);
  }

  function useAction(num){
    untilEndofTurn.actionsLeft -= num;
    updatePartyStatsView();
  }

  //explore
  function exploreHere(diff, district){
    useAction(1);
    gameVars.exploreDiff = diff;
    gameVars.district = district;
    var tempDistrictDeck = "";

    //disable buttons
    $('.explore-button').prop('disabled', true);

    //find location
    if(gameVars.district === "suburbs"){
      gameVars.location = gameVars.suburbs;
      tempDistrictDeck = allSuburbs;
    }
    else if(gameVars.district === "downtown"){
      gameVars.location = gameVars.downtown;
      tempDistrictDeck = allDowntown;
    }
    else {
      gameVars.location = gameVars.wharf;
      tempDistrictDeck = allWharf;
    }
    printLog('Searching '+gameVars.location.name+'...');

    //find fight values here
    var zmin;
    var zmax;
    var numRewards;//up to 2 for quick, 4 for cautious, 6 full
    if(gameVars.exploreDiff === 'quick'){
      zmin = gameVars.location.fastmin;
      zmax = gameVars.location.fastmax;
      numRewards = getRandomInt(0,2);
    }
    else if(gameVars.exploreDiff === 'cautious'){
      zmin = gameVars.location.medmin;
      zmax = gameVars.location.medmax;
      numRewards = getRandomInt(0,4);
    } else {
      zmin = gameVars.location.slowmin;
      zmax = gameVars.location.slowmax;
      numRewards = getRandomInt(0,6);
    }

    zmax += moddedStats.reckless
    numRewards += moddedStats.thorough
    // fight with final values
    setTimeout(function(){
      fightZombies(zmin, zmax, numRewards)
    }, 1000);
    setTimeout(function(){
      showNewLocation(district, tempDistrictDeck);
      $('.explore-button').prop('disabled', false);
    }, 2100);
  }

  //combat
  function fightZombies(min, max, num){
    //add random zombie roll plus mods
    var z = getRandomInt(min, max);
    z += untilEndofTurn.modZombieStrength;
    //combat
    printLog('You fight '+z+' zombies with your attack of '+moddedStats.attack);
    if(moddedStats.attack >= z){
      //success, add items to backpack
      printLog('Zombies defeated, found '+num+' items!');
      setTimeout(function(){findItems(gameVars.district, num)}, 1000);
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
        permStats.recipesbackpack.push(r);
      }
      //get universal items
      else if(cat === 1 || cat === 2){
        var i = universalItems[getRandomInt(0,universalItems.length - 1)];
        printLog('you found: '+i.name);
        permStats.itemsbackpack.push(i);
      }
      //get district items
      else if(cat === 3 || cat === 4){
        var i = here[getRandomInt(0,here.length - 1)];
        printLog('you found: '+i.name);
        permStats.itemsbackpack.push(i);
      }
      //get other 2 district items
      else if(cat === 5) {
        var i = there1[getRandomInt(0,there1.length - 1)];
        printLog('you found: '+i.name);
        permStats.itemsbackpack.push(i);
      }
      else if(cat === 6){
        var i = there2[getRandomInt(0,there2.length - 1)];
        printLog('you found: '+i.name);
        permStats.itemsbackpack.push(i);
      }
    }
  }

  function getItemsandRecipes(){
    //move recipes to camp list
    for (var i = 0; i < permStats.recipesbackpack.length; i++) {
      printLog('New recipe available: '+permStats.recipesbackpack[i].name);
      gameState.recipes.push(permStats.recipesbackpack[i])
    }
    permStats.recipesbackpack = [];
    //stack item bonuses
    for (var i = 0; i < permStats.itemsbackpack.length; i++) {
      printLog('Obtained '+permStats.itemsbackpack[i].name+', gained '+permStats.itemsbackpack[i].effect+'!');
      parseEffects(permStats.itemsbackpack[i].effect);
    }
    permStats.itemsbackpack = [];
    // console.log(permStats.recipesbackpack);
    // console.log(gameState.recipes);
    // console.log(permStats.itemsbackpack);
    // console.log(bonusesAtEoT);
  }

  function findNewLoc(district){
    useAction(1);
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

  //func to sort recipes by name alpabetically
  function sortName(a,b) {
    if (a.name < b.name)
       return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  //add available recipes to view
  function showAvailRecipes(){
    $('.recipe-row').parent().remove();
    gameState.recipes.sort(sortName);
    for (var i = 0; i < gameState.recipes.length; i++) {
      $('.recipe-table').append('<tr><td class="recipe-row">'+gameState.recipes[i].name+'</td></tr>')
    }
    //adding handlers for hover selection
    $('.recipe-row').hover(function(){$(this).toggleClass('hovering')})
  }

  function showSelectedRecipe(idx){
    var rec = gameState.recipes[idx];
    $('.rec-name').html(rec.name);
    $('.rec-flav').html(rec.flavortext);
    $('.rec-tools').html(rec.tools);
    $('.rec-mats').html(rec.materials);
    $('.rec-effect').html(rec.effect);
    if($('.craft-button').css('display') === 'none'){
      $('.craft-button').toggle();
    }
  }

  function zeroSelectedRecipe(){
    $('.rec-name').html('Nothing');
    $('.rec-flav').html('Nothing');
    $('.rec-tools').html(0);
    $('.rec-mats').html('None');
    $('.rec-effect').html('None');
    if($('.craft-button').css('display') === 'inline-block'){
      $('.craft-button').toggle();
    }
  }

  function craftSelected(idx){
    var rec = gameState.recipes[idx];
    var allreqs = parseMats(rec.materials);
    spendMats(allreqs);
    parseEffects(rec.effect);
    $('.selected').remove();
    zeroSelectedRecipe();
    printLog('Successfully crafted: '+rec.name);
  }

  function parseMats(string){
    var cmatch = string.match(/Common Material: (\-|\+)\d/);
    var umatch = string.match(/Uncommon Material: (\-|\+)\d/);
    var rmatch = string.match(/Rare Material: (\-|\+)\d/);
    var reqs = {
      c: 0,
      u: 0,
      r: 0
    }

    function findAnyMatch(strmatch, mat){
      if(strmatch){
        reqs[mat] = parseInt(strmatch[0].slice(-2));
      }
    }

    findAnyMatch(cmatch, 'c');
    findAnyMatch(umatch, 'u');
    findAnyMatch(rmatch, 'r');
    return reqs;
  }

  function spendMats(matreqs){
    gameState.mat.common += matreqs.c;
    gameState.mat.uncommon += matreqs.u;
    gameState.mat.rare += matreqs.r;
    updatePlayerStatsView();
  }

  function parseEffects(string){
    var foodmatch = string.match(/Food: (\-|\+)\d/);
    var shltrmatch = string.match(/Shelter: (\-|\+)\d/);
    var mrlmatch = string.match(/Morale: (\-|\+)\d/);
    var toolsmatch = string.match(/Tools: (\-|\+)\d/);
    var atkmatch = string.match(/Attack: (\-|\+)\d/);
    var actionsmatch = string.match(/Actions: (\-|\+)\d/);
    var rcklssmatch = string.match(/Reckless: (\-|\+)\d/);
    var thrmatch = string.match(/Thorough: (\-|\+)\d/);
    var cmatch = string.match(/Common Material: (\-|\+)\d/);
    var umatch = string.match(/Uncommon Material: (\-|\+)\d/);
    var rmatch = string.match(/Rare Material: (\-|\+)\d/);

    function findAnyMatch(stringmatch, attr){
      if(stringmatch){
        bonusesAtEoT[attr] += parseInt(stringmatch[0].slice(-2));
      }
    }

    findAnyMatch(foodmatch, 'food');
    findAnyMatch(shltrmatch, 'shelter');
    findAnyMatch(mrlmatch, 'morale');
    findAnyMatch(toolsmatch, 'tools');
    findAnyMatch(atkmatch, 'attack');
    findAnyMatch(actionsmatch, 'actions');
    findAnyMatch(rcklssmatch, 'reckless');
    findAnyMatch(thrmatch, 'thorough');
    findAnyMatch(cmatch, 'common');
    findAnyMatch(umatch, 'uncommon');
    findAnyMatch(rmatch, 'rare');
  }

  function getEffects(){
    var inGS = ['food', 'shelter', 'morale', 'tools'];
    var inPS = ['attack', 'actions', 'reckless', 'thorough'];
    var inMats = ['common', 'uncommon', 'rare'];
    for(var key in inGS){
      gameState[inGS[key]] += bonusesAtEoT[inGS[key]]
    }
    for(var key in inPS){
      permStats[inPS[key]] += bonusesAtEoT[inPS[key]]
    }
    for(var key in inMats){
      gameState.mat[inMats[key]] += bonusesAtEoT[inMats[key]]
    }
    refreshPartyStats();
    updatePlayerStatsView();
    updatePartyStatsView();
    for(var key in bonusesAtEoT){
      bonusesAtEoT[key] = 0;
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
  refreshPartyStats();
  updatePlayerStatsView();
  updatePartyStatsView();
  //deal starting 3 locations
  showNewLocation("suburbs", allSuburbs);
  showNewLocation("downtown", allDowntown);
  showNewLocation("wharf", allWharf);
  //get an event
  newEvent();
  //show recipes
  showAvailRecipes();
})
