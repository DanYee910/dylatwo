# event definitions
events = [
  {name: 'Food spoilage', effect: 'Food: -2', flavortext: 'need more refrigerators', imgtag: 'none'},
  {name: 'Fix the barricades', effect: 'Shelter: -1, Common Materials: -2, Recipe: minor repairs', flavortext: "it's getting old and falling apart",imgtag: 'none'},
  {name: 'Clear and sunny skies', effect: 'Morale: +1, Food: -1', flavortext: 'a sign of good things to come?', imgtag: 'none'},
  {name: 'Roaches', effect: 'Food: -2',flavortext: 'kill them with fire!',imgtag: 'none'},
  {name: 'A Birthday!', effect: 'Food: -2, Morale: +1',flavortext: 'Celebrate life while you still have one.',imgtag: 'none'},
  {name: 'Bum batteries', effect: 'Shelter: -1, Food: -1',flavortext: 'No wonder this refrigerated food tastes so bad.',imgtag: 'none'},
  {name: 'A thief!', effect: 'Food: -2, Rare Material: -1',flavortext: 'Who did it?!.',imgtag: 'none'}
]
# location definitions
locations = [
  {name: 'Gas Station', district:'Downtown',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:4, flavortext:'gas is long gone, might be a screwdriver somewhere',imgtag:'none'},
  {name: 'Medical Office', district:'Suburbs',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:4, flavortext:'seems quiet, some bandages would be nice.',imgtag:'none'},
  {name: 'Candle Shop',district:'Suburbs',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:3, flavortext:'Quiet, but is there anything in here?',imgtag:'none'},
  {name:'Seafood Restaurant',district:'Wharf',fastmin:1, fastmax:2, medmin:2, medmax:4, slowmin:3, slowmax:6, flavortext:'big place, lots of zombies...',imgtag:'none'},
  {name:'Bakery',district:'Suburbs',fastmin:0, fastmax:1, medmin:1, medmax:3, slowmin:2, slowmax:4, flavortext:'the smell of baked bread used to linger here',imgtag:'none'},
  {name:'Coffee Shop',district:'Downtown',fastmin:0, fastmax:1, medmin:1, medmax:3, slowmin:2, slowmax:4, flavortext:'Could be some coffee beans somewhere',imgtag:'none'},
  {name:'Police Station',district:'Downtown',fastmin:0, fastmax:1, medmin:2, medmax:3, slowmin:3, slowmax:5, flavortext:'This is not a refuge...',imgtag:'none'},
  {name:'Fine Art Museum',district:'Downtown',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:4, flavortext:'Blood stains the walls, but you see nothing.',imgtag:'none'},
  {name:'Warehouse',district:'Wharf',fastmin:0, fastmax:1, medmin:2, medmax:3, slowmin:2, slowmax:5, flavortext:'Some shipping containers still lying around.',imgtag:'none'},
  {name:'Yacht',district:'Wharf',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:3, flavortext:'Where is the owner?',imgtag:'none'}
]
# item definitions
items = [
  {name:'Hammer',spawnarea:'All',effect:'Tools: +1',flavortext:'About time one of these showed up',imgtag:'none'},
  {name:'MREs',spawnarea:'All',effect:'Food: +1',flavortext:'Unopened emergency rations.',imgtag:'none'},
  {name:'Broken Computer',spawnarea:'All',effect:'Rare Material: +1',flavortext:'Unfixable, but could be useful parts',imgtag:'none'},
  {name:'Screwdriver Set',spawnarea:'All',effect:'Tools: +1',flavortext:'A well worn set of tools but perfectly functional',imgtag:'none'},
  {name:'Crowbar',spawnarea:'Suburbs',effect:'Attack: +1',flavortext:'Not as much reach as you would like.',imgtag:'none'},
  {name:'Board Games',spawnarea:'Downtown',effect:'Morale: +1',flavortext:"The toy store won't need it anymore",imgtag:'none'},
  {name:'Canned Seafood',spawnarea:'Wharf',effect:'Food: +1',flavortext:"Not the freshest but edible",imgtag:'none'},
  {name:'Matress',spawnarea:'Suburbs',effect:'Shelter: +1',flavortext:"A used matress, what could possibly go wrong?",imgtag:'none'},
  {name:'Camera',spawnarea:'Wharf',effect:'Common Materials: +1',flavortext:"Worthless junk...",imgtag:'none'},
  {name:'Herbs and Spices',spawnarea:'Wharf',effect:'Morale: +1',flavortext:"Makes all this crap food more palatable",imgtag:'none'},
  {name:'Food Stash',spawnarea:'All',effect:'Food: +3',flavortext:"Whoever was here left in a hurry.",imgtag:'none'},
  {name:'Crossbow',spawnarea:'Suburbs',effect:'Attack: +1',flavortext:"Includes bolts, convenient!",imgtag:'none'},
  {name:'Roll of Duct Tape',spawnarea:'Downtown',effect:'Tools: +1',flavortext:"Tape for everything",imgtag:'none'}
]

# recipes definitions
recipes = [
  {name:'Bicycle', starting:'false',tools:2, materials:'Common Material: -2, Uncommon Material: -1', effect: 'Actions: +1', flavortext:'Quiet and efficient transportation, no gas required.'},
  {name:'Electric Generator', starting:'false',tools:4, materials:'Uncommon Material: -3, Rare Material: -3', effect: 'Shelter: +2, Tools: +1', flavortext:'In good condition, can never get enough electricity.'},
  {name:'Portable stove', starting:'false',tools:2, materials:'Common Material: -1, Uncommon Material: -1', effect: 'Food: +2', flavortext:'Takes a while to warm up, but works.'},
  {name:'Space heater', starting:'false',tools:2, materials:'Common Material: -1, Uncommon Material: -1', effect: 'Shelter: +1', flavortext:'Great for small spaces'},
  {name:'Bat with nails', starting:'true',tools:1, materials:'Common Material: -2', effect: 'Attack: +1', flavortext:'Crude weapon, but gets the job done.'},
  {name:'Pointy stick', starting:'true',tools:1, materials:'Common Material: -2', effect: 'Attack: +1', flavortext:'Watch where you point it.'},
  {name:'Roof', starting:'true',tools:2, materials:'Common Material: -3', effect: 'Shelter: +1', flavortext:'A few holes but blocks most of the rain.'},
  {name:'Bridge Barricade', starting:'true',tools:1, materials:'Common Material: -5', effect: 'Shelter: +1', flavortext:'Just pile junk onto it to make it stronger.'},
  {name:'Walls', starting:'true',tools:2, materials:'Common Material: -4', effect: 'Shelter: +1', flavortext:'Tents only last so long.'}
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
