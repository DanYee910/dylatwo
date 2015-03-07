# event definitions
events = [
  {name: 'Food spoilage', effect: 'food: -2', flavortext: 'need more refrigerators', imgtag: 'none'},
  {name: 'Fix the barricades', effect: 'shelter: -1, common materials: -2, recipe: minor repairs', flavortext: "it's getting old and falling apart",imgtag: 'none'},
  {name: 'Clear and sunny skies', effect: 'morale: +1, food: -1', flavortext: 'a sign of good things to come?', imgtag: 'none'},
  {name: 'Roaches', effect: 'food: -2',flavortext: 'kill them with fire!',imgtag: 'none'}
]
# location definitions
locations = [
  {name: 'Gas Station', district:'Downtown',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:4, flavortext:'gas is long gone, might be a screwdriver somewhere',imgtag:'none'},
  {name: 'Candle Shop',district:'Suburbs',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:3, flavortext:'Quiet, but is there anything in here?',imgtag:'none'},
  {name:'Seafood Restaurant',district:'Wharf',fastmin:1, fastmax:2, medmin:2, medmax:4, slowmin:3, slowmax:6, flavortext:'big place, lots of zombies...',imgtag:'none'},
  {name:'Bakery',district:'Suburbs',fastmin:0, fastmax:1, medmin:1, medmax:3, slowmin:2, slowmax:4, flavortext:'the smell of baked bread used to linger here',imgtag:'none'}
]
# item definitions
items = [
  {name:'Hammer',spawnarea:'All',effect:'Tools: +1',flavortext:'About time one of these showed up',imgtag:'none'},
  {name:'Screwdriver Set',spawnarea:'All',effect:'Tools: +1',flavortext:'A well worn set of tools but perfectly functional',imgtag:'none'},
  {name:'Crowbar',spawnarea:'Suburbs',effect:'Attack: +1',flavortext:'Not as much reach as you would like.',imgtag:'none'},
  {name:'Board Games',spawnarea:'Downtown',effect:'Morale: +1',flavortext:"The toy store won't need it anymore",imgtag:'none'},
  {name:'Canned Food',spawnarea:'Wharf',effect:'Food: +1',flavortext:"Corn, beans, soup...",imgtag:'none'}
]

# recipes definitions
recipes = [
  {name:'Bicycle', starting:'false',tools:2, materials:'Common Material: -2, Uncommon Material: -1', effect: 'Actions: +1', flavortext:'Quiet and efficient transportation, no gas required.'},
  {name:'Electric Generator', starting:'false',tools:4, materials:'Uncommon Material: -3, Rare Material: -3', effect: 'Shelter: +2, Tools: +1', flavortext:'In good condition, can never get enough electricity.'},
  {name:'Bat with nails', starting:'true',tools:1, materials:'common material: -2', effect: 'Attack: +1', flavortext:'Crude weapon, but gets the job done.'},
  {name:'Walls', starting:'true',tools:2, materials:'common material: -4', effect: 'shelter: +1', flavortext:'Tents only last so long.'},
]
# get all-------------
events.each do |ev|
  Event.create(
    name: ev[:name],
    effect: ev[:effect],
    flavortext: ev[:flavortext],
    imgtag: ev[:imgtag])
end

locations.each do |loc|
  Location.create(
    name: loc[:name],
    district: loc[:district],
    fastmin: loc[:fastmin],
    fastmax: loc[:fastmax],
    medmin: loc[:medmin],
    medmax: loc[:medmax],
    slowmin: loc[:slowmin],
    slowmax: loc[:slowmax],
    flavortext: loc[:flavortext],
    imgtag: loc[:imgtag])
end

items.each do |item|
  Item.create(
    name: item[:name],
    spawnarea: item[:spawnarea],
    effect: item[:effect],
    flavortext: item[:flavortext],
    imgtag: item[:imgtag])
end

recipes.each do |recipe|
  Recipe.create(
    name: recipe[:name],
    starting: recipe[:starting],
    tools: recipe[:tools],
    materials: recipe[:materials],
    effect: recipe[:effect],
    flavortext: recipe[:flavortext])
end
