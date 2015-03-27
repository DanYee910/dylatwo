$(document).ready(function() {
  //rules
  $('.start-button').on('click', function(){
    $('#rules').toggle();
  });

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
  //handler to highlight and show selected recipe
  $('#my-camp').on('click', '.recipe-row', function(){
    $('.recipe-row').removeClass('selected');
    $(this).toggleClass('selected');
    var idx = $('.recipe-table tr td').index($('.selected'));
    showSelectedRecipe(idx);
  })
  //handler for tab switching
  $('.home-tab').on('click', function(){
    $('.home-tab').attr('class', 'home-tab tab-inactive');
    $(this).attr('class','home-tab tab-active');
    if($('#recipes-tab').attr('class') === 'home-tab tab-active'){
      $('#open-recipes').show();
      $('#all-items').hide();
    } else {
      $('#open-recipes').hide();
      $('#all-items').show();
    }
  })
  //handler to craft
  $('.craft-button').on('click', function(){
    var idx = $('.recipe-table tr td').index($('.selected'));
    craftSelected(idx);
  })
  //end of turn button handler
  $('#end-turn').on('click',function(){
    printLog('Day '+gameState.turns+' is over.');
    getItemsandRecipes();
    clearEndofTurn();
    getEffects();
    gameState.turns += 1;
    if(gameState.turns > winCons.maxturns){
      endGame(gameState);
    }
    newEvent();
    showReckless(moddedStats.reckless);
    updateSidebar();
    showAvailRecipes();
  })
  $('#replay-game').on('click', function(){
    window.location.reload();
  })

  //remove EoT effects
  function clearEndofTurn(){
    for(var key in untilEndofTurn){
      if(key != 'actionsLeft'){
        untilEndofTurn[key] = 0
      }
    }
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

  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function updateSidebar(){
    $('#sidebar-turns').html(gameState.turns);
    $('#sidebar-food').html(gameState.food+' / '+winCons.foodwin1);
    $('#sidebar-morale').html(gameState.morale+' / '+winCons.moralewin1);
    $('#sidebar-shelter').html(gameState.shelter+' / '+winCons.shelterwin1);
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
    $('#'+district+' .location-img').attr('src', '/assets/'+locObj.imgtag);
    $('#'+district+' .loc-name').html(locObj.name);
    $('#'+district+' .qmin').html(locObj.fastmin);
    $('#'+district+' .cmin').html(locObj.medmin);
    $('#'+district+' .fmin').html(locObj.slowmin);
    $('#'+district+' .qmax').html(locObj.fastmax);
    $('#'+district+' .cmax').html(locObj.medmax);
    $('#'+district+' .fmax').html(locObj.slowmax);
    $('#'+district+' .flavtxt').html(locObj.flavortext);
    printLog(locObj.name+' discovered!');
  }

  function showReckless(num){
    var districts = ['suburbs','downtown','wharf']
    for(var n = 0; n < districts.length; n++){
      var dist = districts[n]
      $('#'+dist+' .qmax').html((gameVars[dist].fastmax+num).toString());
      $('#'+dist+' .cmax').html((gameVars[dist].medmax+num).toString());
      $('#'+dist+' .fmax').html((gameVars[dist].slowmax+num).toString());
    }
  }

  //show a new Event
  function newEvent(){
    var min = 0
    var max = gameState.allEvents.length - 1
    var idx = getRandomInt(min, max)
    gameVars.evnt = gameState.allEvents[idx]

    $('#current-event .event-name').html('Event: ' + gameVars.evnt.name);
    $('#current-event .event-txt').html(gameVars.evnt.flavortext);
    $('#current-event .event-effect').html(gameVars.evnt.effecttext);

    parseEvent(gameVars.evnt.effect1,gameVars.evnt.val1);
    parseEvent(gameVars.evnt.effect2,gameVars.evnt.val2);
  }

  function parseEvent(str, val){
    if(str === 'eotfood'){
      bonusesAtEoT.food += val;
    }
    else if(str === 'eotshel'){
      bonusesAtEoT.shelter += val;
    }
    else if(str === 'eotmor'){
      bonusesAtEoT.morale += val;
    }
    else if(str === 'eotcmat'){
      bonusesAtEoT.common += val;
    }
    else if(str === 'eotumat'){
      bonusesAtEoT.uncommon += val;
    }
    else if(str === 'eotrmat'){
      bonusesAtEoT.rare += val;
    }
    else if(str === 'ueotreck'){
      untilEndofTurn.modReckless += val;
    }
    else if(str === 'ueottho'){
      untilEndofTurn.modThorough += val;
    }
    else if(str === 'ueotatk'){
      untilEndofTurn.modAttack += val;
    }
    refreshPartyStats();
    updatePartyStatsView();
  }

  function useAction(num){
    untilEndofTurn.actionsLeft -= num;
    updatePartyStatsView();
  }

  //explore
  function exploreHere(diff, district){
    useAction(1);
    gameVars.district = district;
    var nowDistrictDeck = "";
    //fight values here
    var zmin;
    var zmax;
    var numRewards;

    //disable buttons
    $('.explore-button').prop('disabled', true);

    //find location
    if(district === "suburbs"){
      gameVars.here = gameVars.suburbs;
      nowDistrictDeck = allSuburbs;
    }
    else if(district === "downtown"){
      gameVars.here = gameVars.downtown;
      nowDistrictDeck = allDowntown;
    }
    else {
      gameVars.here = gameVars.wharf;
      nowDistrictDeck = allWharf;
    }
    printLog('Searching '+gameVars.here.name+'...');

    if(diff === 'quick'){
      zmin = gameVars.here.fastmin;
      zmax = gameVars.here.fastmax;
      numRewards = getRandomInt(0,gameVars.maxQuickLoot);
    }
    else if(diff === 'cautious'){
      zmin = gameVars.here.medmin;
      zmax = gameVars.here.medmax;
      numRewards = getRandomInt(0,gameVars.maxCautiousLoot);
    } else {
      zmin = gameVars.here.slowmin;
      zmax = gameVars.here.slowmax;
      numRewards = getRandomInt(0,gameVars.maxFullLoot);
    }

    zmax += moddedStats.reckless
    numRewards += moddedStats.thorough
    // fight with final values
    setTimeout(function(){
      fightZombies(zmin, zmax, numRewards)
    }, 1000);
    setTimeout(function(){
      showNewLocation(district, nowDistrictDeck);
      $('.explore-button').prop('disabled', false);
    }, 2100);
  }

  //combat
  function fightZombies(min, max, num){
    //add random zombie roll plus mods
    var z = getRandomInt(min, max);
    z += untilEndofTurn.modZombieStrength;

    printLog('You fight '+z+' zombie(s) with your attack of '+moddedStats.attack);
    if(moddedStats.attack >= z){
      //success, add items to backpack
      printLog('Zombies defeated, found '+num+' items!');
      setTimeout(function(){findItems(gameVars.district, num)}, 1000);
    }else{
      var fate = getRandomInt(0,1);
      if(fate === 0){
        gameState.morale -= 1;
        updateSidebar();
        printLog('Too many zombies, lose 1 morale and flee for your life.');
      }else{
        printLog('Too many zombies, you flee emptyhanded.');
      }
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
    //get created recipes
    for (var i = 0; i < gameState.created.length; i++) {
      printLog('Created '+gameState.created[i].name+', gained '+gameState.created[i].effect+'!');
      $('#all-items').append('<div class="item-box">'+gameState.created[i].name+'</div>');
      parseEffects(gameState.created[i].effect);
    }
    gameState.created = [];
  }

  function findNewLoc(district){
    useAction(1);

    if(district === "suburbs"){
      showNewLocation("suburbs", allSuburbs);
    }
    else if(district === "downtown"){
      showNewLocation("downtown", allDowntown);
    } else {
      showNewLocation("wharf", allWharf);
    }
    printLog('Found a new '+district+' location.');
    showReckless(moddedStats.reckless);
  }

  //func to sort by name alpabetically
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
    if(rec.tools <= gameState.tools){
      if(spendMats(allreqs) === true){
        gameState.created.push(rec);
        $('.selected').parent().remove();
        gameState.recipes.splice(idx, 1);
        zeroSelectedRecipe();
        printLog('Successfully crafted: '+rec.name);
      }
    }else{
      printLog('You need better tools to craft this.');
    }
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
    var enoughMats = true;

    if(gameState.mat.common < Math.abs(matreqs.c)){
      printLog('Not enough Common Materials.');
      enoughMats = false;
    }
    if(gameState.mat.uncommon < Math.abs(matreqs.u)){
      printLog('Not enough Uncommon Materials.');
      enoughMats = false;
    }
    if(gameState.mat.rare < Math.abs(matreqs.r)){
      printLog('Not enough Rare Materials.');
      enoughMats = false;
    }

    if(enoughMats === true){
      gameState.mat.common += matreqs.c;
      gameState.mat.uncommon += matreqs.u;
      gameState.mat.rare += matreqs.r;
      updateSidebar();
    }
    return enoughMats;
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
    updateSidebar();
    updatePartyStatsView();
    for(var key in bonusesAtEoT){
      bonusesAtEoT[key] = 0;
    }
  }

  function endGame(obj){
    var food = obj.food
    var mor = obj.morale
    var shel = obj.shelter
    $('div#stats-bar').hide();
    $('div#explore-city').hide();
    $('div#my-camp').hide();
    $('div#end-screen').show();
    $('#final-food').html(food)
    $('#final-morale').html(mor)
    $('#final-shelter').html(shel)
    if(food >= winCons.foodwin1){
      $('#food-win-lose').html('WIN! You have stockpiled plenty of food to last you through the winter.');
    }
    else if(food >= winCons.foodwin2){
       $('#food-win-lose').html('BARELY SURVIVING.  You might have enough food to survive, a little emaciation never hurt anyone right?');
    }else{
       $('#food-win-lose').html('LOSE! Food? What food? Looks like everyone will starve to death...');
    }

    if(mor >= winCons.moralewin1){
      $('#morale-win-lose').html('WIN! Spirits are high, you will make it through the cold months ahead.');
    }
    else if(mor >= winCons.moralewin2){
      $('#morale-win-lose').html('BARELY SURVIVING.  Everyone is on edge, things will work out if no one snaps.');
    }else{
      $('#morale-win-lose').html('LOSE! Your party goes crazy and everyone turns on each other.');
    }

    if(shel >= winCons.shelterwin1){
      $('#shelter-win-lose').html('WIN! You have a nice warm shelter to wait out the cold.');
    }
    else if(shel >= winCons.shelterwin2){
      $('#shelter-win-lose').html('BARELY SURVIVING.  The cold air seeps in, not the most comfortable place to be but everyone will live.');
    }else{
      $('#shelter-win-lose').html('LOSE! If the zombies don\'t get everyone the elements will.');
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
  $('#all-items').hide();
  $('div#end-screen').hide();
  initGameState();
  refreshPartyStats();
  updateSidebar();
  updatePartyStatsView();

  showNewLocation("suburbs", allSuburbs);
  showNewLocation("downtown", allDowntown);
  showNewLocation("wharf", allWharf);
  newEvent();
  showReckless(moddedStats.reckless);
  showAvailRecipes();
})
