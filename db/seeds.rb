events = [
  {name: 'Food spoilage', effecttext: 'At end of turn, Food: -3', effect1: 'eotfood', val1: -3, flavortext: 'need more refrigerators'},
  {name: 'Fix the barricades', effecttext: 'At end of turn, Shelter: -1, Common Materials -2', effect1: 'eotshel', val1: -1, effect2: 'eotcmat', val2: -2, flavortext: "it's getting old and falling apart"},
  {name: 'Clear and sunny skies', effecttext: 'At end of turn, Morale: +1, Food: -2', effect1: 'eotmor', val1: 1, effect2: 'eotfood', val2: -2, flavortext: 'a sign of good things to come?'},
  {name: 'Roaches', effecttext: 'At end of turn, Food: -2', effect1: 'eotfood', val1: -2, flavortext: 'kill them with fire!'},
  {name: 'A Birthday!', effecttext: 'At end of turn, Food: -2, Morale: +1', effect1: 'eotfood', val1: -2, effect2: 'eotmor', val2: 1, flavortext: 'Celebrate life while you still have one.'},
  {name: 'Disease outbreak', effecttext: 'At end of turn, Morale: -1 and Food: -2', effect1: 'eotmor', val1: -1, effect2: 'eotfood', val2: -2, flavortext: 'Who didn\'t wash their hands?'},
  {name: 'Generator breakdown', effecttext: 'At end of turn, Shelter: -1, Food: -1', effect1: 'eotshel', val1: -1, effect2: 'eotfood', val2: -1, flavortext: 'No wonder this refrigerated food tastes so bad.'},
  {name: 'A thief!', effecttext: 'At end of turn, Food: -2, Rare Material: -1', effect1: 'eotfood', val1: -2, effect2: 'eotrmat', val2: -1, flavortext: 'Who did it?!.'},
  {name: 'Desperation', effecttext: 'For this turn, Reckless: +3, Thorough: +1', effect1: 'ueotreck', val1: +3, effect2: 'ueottho', val2: +1, flavortext: 'Time to do something really stupid...'},
  {name: 'Contagious insanity', effecttext: 'For this turn, Reckless: +4', effect1: 'ueotreck', val1: +4, flavortext: 'Has everyone gone mad?'},
  {name: 'Found Ammo Stash', effecttext: 'For this turn, Reckless: +3, Attack: +2', effect1: 'ueotreck', val1: +3, effect2: 'ueotatk', val2: +2, flavortext: 'Guaranteed to attract attention, but so what?'},
  {name: 'Too much alcohol', effecttext: 'For this turn, Reckless: +3', effect1: 'ueotreck', val1: +3, flavortext: 'Next time save the booze for the people not leaving camp.'},
  {name: 'Substandard building materials', effecttext: 'At end of turn, Shelter: -3', effect1: 'eotshel', val1: -3, flavortext: 'Looked fine, until there was wind.'},
  {name: 'Patch leaks', effecttext: 'At end of turn, Shelter: +2', effect1: 'eotshel', val1: 2, flavortext: 'Spending some time to plug holes and leaks.'}
]

locations = [
  {name: 'Gas Station', district:'Downtown',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:4, flavortext:'gas is long gone, might be a screwdriver somewhere',imgtag:'gasstation.jpg'},
  {name: 'Super mall', district:'Downtown',fastmin:2, fastmax:3, medmin:3, medmax:5, slowmin:5, slowmax:7, flavortext:'I doubt anything is left, looks like everyone ran through here',imgtag:'restaurant.jpg'},
  {name: 'Medical Office', district:'Suburbs',fastmin:0, fastmax:1, medmin:2, medmax:4, slowmin:3, slowmax:6, flavortext:'seems quiet, some bandages would be nice.',imgtag:'medbuilding.jpg'},
  {name: 'Candle Shop',district:'Suburbs',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:3, flavortext:'Quiet, but is there anything in here?',imgtag:'candleshop.jpg'},
  {name: 'Small House',district:'Suburbs',fastmin:0, fastmax:1, medmin:0, medmax:2, slowmin:2, slowmax:5, flavortext:'Seems safe to look inside.',imgtag:'smallhouse.jpg'},
  {name: 'Fire Station',district:'Suburbs',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:4, flavortext:'Might find some emergency supplies.',imgtag:'firestation.jpg'},
  {name:'Seafood Restaurant',district:'Wharf',fastmin:1, fastmax:2, medmin:2, medmax:5, slowmin:3, slowmax:8, flavortext:'big place, lots of zombies...',imgtag:'restaurant.jpg'},
  {name:'Bakery',district:'Suburbs',fastmin:0, fastmax:1, medmin:1, medmax:3, slowmin:2, slowmax:5, flavortext:'the smell of baked bread used to linger here',imgtag:'candleshop.jpg'},
  {name:'Coffee Shop',district:'Downtown',fastmin:0, fastmax:1, medmin:1, medmax:3, slowmin:2, slowmax:6, flavortext:'Could be some coffee beans somewhere',imgtag:'candleshop.jpg'},
  {name:'Police Station',district:'Downtown',fastmin:1, fastmax:3, medmin:2, medmax:5, slowmin:3, slowmax:8, flavortext:'This is not a refuge...',imgtag:'firestation.jpg'},
  {name:'Fine Art Museum',district:'Downtown',fastmin:0, fastmax:1, medmin:1, medmax:4, slowmin:2, slowmax:6, flavortext:'Blood stains the walls, but you see nothing.',imgtag:'medbuilding.jpg'},
  {name:'Warehouse',district:'Wharf',fastmin:0, fastmax:1, medmin:2, medmax:4, slowmin:4, slowmax:7, flavortext:'Some shipping containers still lying around.',imgtag:'medbuilding.jpg'},
  {name:'Bank',district:'Wharf',fastmin:0, fastmax:1, medmin:0, medmax:2, slowmin:0, slowmax:3, flavortext:'Locked up tight, but theres an open window.', imgtag:'medbuilding.jpg'},
  {name:'Yacht',district:'Wharf',fastmin:0, fastmax:1, medmin:1, medmax:2, slowmin:2, slowmax:3, flavortext:'Where is the owner?',imgtag:'yacht.jpg'}
]

items = [
  {name:'Hammer',spawnarea:'All',effect:'Tools: +1',flavortext:'About time one of these showed up'},
  {name:'Water gun',spawnarea:'Suburbs',effect:'Morale: +1',flavortext:'For the kids.'},
  {name:'Soap and Detergent',spawnarea:'All',effect:'Morale: +1',flavortext:'Helps get rid of the smell.'},
  {name:'MREs',spawnarea:'All',effect:'Food: +2',flavortext:'Unopened emergency rations.'},
  {name:'Condiment packages',spawnarea:'All',effect:'Food: +1',flavortext:'Ketchup! Mustard!'},
  {name:'Fresh roadkill',spawnarea:'All',effect:'Food: +2',flavortext:'There are still people around here that drive?'},
  {name:'Graphic novels',spawnarea:'Suburbs',effect:'Morale: +2',flavortext:'Everyone wants to pass the time.'},
  {name:'Car parts',spawnarea:'Suburbs',effect:'Uncommon Material: +2',flavortext:'Looks brand new.'},
  {name:'Office snack stash',spawnarea:'Downtown',effect:'Food: +2',flavortext:'Junk food is good food.'},
  {name:'Broken Computer',spawnarea:'All',effect:'Rare Material: +1',flavortext:'Unfixable, but could be useful parts'},
  {name:'Screwdriver Set',spawnarea:'All',effect:'Tools: +1',flavortext:'A well worn set of tools but perfectly functional'},
  {name:'Crowbar',spawnarea:'Suburbs',effect:'Attack: +1',flavortext:'Not as much reach as you would like.'},
  {name:'Board Games',spawnarea:'Downtown',effect:'Morale: +1',flavortext:"The toy store won't need it anymore"},
  {name:'Sports equipment',spawnarea:'Suburbs',effect:'Morale: +1',flavortext:"A brand new football."},
  {name:'Power drill',spawnarea:'Downtown',effect:'Tools: +1',flavortext:"Plugs right into the generator."},
  {name:'Canned Seafood',spawnarea:'Wharf',effect:'Food: +1',flavortext:"Not the freshest but edible"},
  {name:'Binoculars',spawnarea:'Wharf',effect:'Thorough: +1',flavortext:"Crisp and clear vision"},
  {name:'Boat engine',spawnarea:'Wharf',effect:'Rare Material: +1',flavortext:"doesn't work anymore, but some good parts"},
  {name:'Recycled electronics',spawnarea:'Downtown',effect:'Rare Material: +2',flavortext:"Lots of metals and plastics."},
  {name:'Salvaged auto',spawnarea:'Downtown',effect:'Uncommon Material: +2',flavortext:"Stripped down, barely anything left, barely..."},
  {name:'Matress',spawnarea:'Suburbs',effect:'Shelter: +1',flavortext:"A used matress, what could possibly go wrong?"},
  {name:'Sleeping bag',spawnarea:'Suburbs',effect:'Shelter: +1',flavortext:"With a few holes, and maybe a bloodstain."},
  {name:'Crab trap',spawnarea:'Wharf',effect:'Food: +3',flavortext:"All you need is bait and patience."},
  {name:'Meat locker',spawnarea:'Wharf',effect:'Food: +3',flavortext:"The power is gone but the meat hasn\'t spoiled yet."},
  {name:'Dried seafood',spawnarea:'Wharf',effect:'Food: +2',flavortext:"Still tasty."},
  {name:'Camera',spawnarea:'Wharf',effect:'Common Material: +2',flavortext:"Worthless junk..."},
  {name:'Sandbags',spawnarea:'All',effect:'Common Material: +2',flavortext:"Includes sand!"},
  {name:'Herbs and Spices',spawnarea:'Wharf',effect:'Morale: +1',flavortext:"Makes all this crap food more palatable"},
  {name:'Food Stash',spawnarea:'All',effect:'Food: +2',flavortext:"Whoever was here left in a hurry."},
  {name:'Emergency Kit',spawnarea:'All',effect:'Morale: +1',flavortext:"antiseptics, bandages, flares..."},
  {name:'Propane Tank',spawnarea:'Suburbs',effect:'Food: +1',flavortext:"There is a little left."},
  {name:'Crossbow',spawnarea:'Suburbs',effect:'Attack: +1',flavortext:"Includes bolts, convenient!"},
  {name:'Pipe',spawnarea:'All',effect:'Attack: +1',flavortext:"Feel from a sink, serves a new purpose."},
  {name:'Plywood',spawnarea:'All',effect:'Common Material: +3',flavortext:"Endless ways to use this."},
  {name:'Wires',spawnarea:'All',effect:'Common Material: +2',flavortext:"A whole coil of wires."},
  {name:'Kitchen knives',spawnarea:'Wharf',effect:'Tools: +1',flavortext:"Worn a bit so not great for stabbing."},
  {name:'Woodworking tools',spawnarea:'Suburbs',effect:'Tools: +1',flavortext:"Hammers, saws, screwdrivers, pliers."},
  {name:'Nails, screws, and washers',spawnarea:'All',effect:'Common Material: +2',flavortext:"Needed to keep things together."},
  {name:'Glass panes',spawnarea:'All',effect:'Common Material: +2',flavortext:"Clean and uncracked, makes a nice window."},
  {name:'Fishing lines',spawnarea:'Wharf',effect:'Uncommon Material: +1',flavortext:"High tensile strands."},
  {name:'Broken office furniture',spawnarea:'Downtown',effect:'Common Material: +3',flavortext:"Still has some salvagable material at least."},
  {name:'Scrapheap',spawnarea:'Downtown',effect:'Common Material: +5',flavortext:"Metal everywhere."},
  {name:'School supplies',spawnarea:'Suburbs',effect:'Common Material: +2',flavortext:"Glue, scissors, tape, paper."},
  {name:'Concrete Mix',spawnarea:'Suburbs',effect:'Common Material: +2',flavortext:"For serious building."},
  {name:'Roll of Duct Tape',spawnarea:'Downtown',effect:'Uncommon Material: +2',flavortext:"Tape for everything"}
]

recipes = [
  {name:'Bicycle', starting:'false',tools:2, materials:'Common Material: -2, Uncommon Material: -1', effect: 'Actions: +1', flavortext:'Quiet and efficient transportation, no gas required.'},
  {name:'Improvised Mortar', starting:'false',tools:3, materials:'Uncommon Material: -3, Rare Material: -2', effect: 'Attack: +2', flavortext:'Loud and destructive, makes a great diversion.'},
  {name:'Table saw', starting:'false',tools:2, materials:'Uncommon Material: -1, Rare Material: -1', effect: 'Tools: +1', flavortext:'Missing a couple crucial parts.'},
  {name:'Potato Gun', starting:'false',tools:2, materials:'Common Material: -2, Uncommon Material: -1', effect: 'Attack: +1', flavortext:'Made with stuff you can find in a school.'},
  {name:'Flashlight', starting:'false',tools:1, materials:'Common Material: -1', effect: 'Thorough: +1, Reckless: +1', flavortext:'Helps you see! And be seen...'},
  {name:'Metal Detector', starting:'false',tools:3, materials:'Uncommon Material: -1, Rare Material: -1', effect: 'Thorough: +1', flavortext:'Bottlecaps, nails, what else...'},
  {name:'Electric Generator', starting:'false',tools:4, materials:'Uncommon Material: -3, Rare Material: -3', effect: 'Shelter: +2, Tools: +1', flavortext:'In good condition, can never get enough electricity.'},
  {name:'Portable stove', starting:'false',tools:2, materials:'Common Material: -1, Uncommon Material: -1', effect: 'Food: +2', flavortext:'Takes a while to warm up, but works.'},
  {name:'Space heater', starting:'false',tools:2, materials:'Common Material: -1, Uncommon Material: -1', effect: 'Shelter: +1', flavortext:'Great for small spaces'},
  {name:'Pressure cooker', starting:'false',tools:2, materials:'Common Material: -2, Uncommon Material: -1', effect: 'Food: +2', flavortext:'Easy to use.'},
  {name:'Mini-fridge', starting:'false',tools:2, materials:'Common Material: -1, Uncommon Material: -3', effect: 'Food: +3', flavortext:'Holds more food than it looks.'},
  {name:'Sandbag walls', starting:'false',tools:1, materials:'Common Material: -4', effect: 'Shelter: +1', flavortext:'Keeps the water out.'},
  {name:'Bat with nails', starting:'true',tools:1, materials:'Common Material: -2', effect: 'Attack: +1', flavortext:'Crude weapon, but gets the job done.'},
  {name:'Pointy stick', starting:'true',tools:1, materials:'Common Material: -2', effect: 'Attack: +1', flavortext:'Watch where you point it.'},
  {name:'Water heater', starting:'false',tools:4, materials:'Uncommon Material: -2, Rare Material: -1', effect: 'Shelter: +2', flavortext:'While it works, hot water!'},
  {name:'Outhouse', starting:'false',tools:3, materials:'Common Material: -3, Uncommon Material: -2', effect: 'Shelter: +2', flavortext:'Quiet and away for your business.'},
  {name:'Fireplace', starting:'false',tools:1, materials:'Uncommon Material: -3', effect: 'Shelter: +1, Food: +1', flavortext:'For cooking and comfort.'},
  {name:'Roof', starting:'true',tools:2, materials:'Common Material: -3', effect: 'Shelter: +1', flavortext:'A few holes but blocks most of the rain.'},
  {name:'Simple furniture', starting:'true',tools:2, materials:'Common Material: -4', effect: 'Shelter: +1', flavortext:'Beats sleeping on the ground.'},
  {name:'Electric wiring', starting:'false',tools:3, materials:'Common Material: -4, Uncommon Material: -2', effect: 'Shelter: +2', flavortext:'Finally you can use electricity everywhere.'},
  {name:'Bridge Barricade', starting:'true',tools:1, materials:'Common Material: -5', effect: 'Shelter: +1', flavortext:'Just pile junk onto it to make it stronger.'},
  {name:'Brick wall', starting:'true',tools:1, materials:'Common Material: -5', effect: 'Shelter: +2', flavortext:'Takes a while to piece together, but solid.'},
  {name:'Hardwood flooring', starting:'true',tools:1, materials:'Common Material: -3', effect: 'Shelter: +1', flavortext:'Not the best wood, so a little warped.'},
  {name:'Insulation', starting:'false',tools:2, materials:'Uncommon Material: -3', effect: 'Shelter: +1', flavortext:'A bit of extra comfort.'},
  {name:'Structural Reinforcement', starting:'true',tools:2, materials:'Uncommon Material: -5', effect: 'Shelter: +2', flavortext:'Helps everything last longer.'},
  {name:'Walls', starting:'true',tools:2, materials:'Common Material: -4', effect: 'Shelter: +1', flavortext:'Tents only last so long.'}
]
# get all-------------
events.each do |ev|
  Event.create(
    name: ev[:name],
    effecttext: ev[:effecttext],
    effect1: ev[:effect1],
    val1: ev[:val1],
    effect2: ev[:effect2],
    val2: ev[:val2],
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
