$(document).ready(function() {

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

  //initialize game stats and stat views
  initGameState();
  updatePlayerStatsView();
  updatePartyStatsView();

})
