# event definitions
events = [
  {name: 'Food spoilage', effect: 'food: -2', flavortext: 'need more refrigerators', imgtag: 'none'},
  {name: 'Fix the barricades', effect: 'shelter: -1, common materials: -2, recipe: minor repairs', flavortext: "it's getting old and falling apart",imgtag: 'none'},
  {name: 'Clear and sunny skies', effect: 'morale: +1, food: -1', flavortext: 'a sign of good things to come?', imgtag: 'none'},
  {name: 'Roaches', effect: 'food: -2',flavortext: 'kill them with fire!',imgtag: 'none'}
]
# location definitions
locations = [
  {name:,district:,fastmin:, fastmax:, medmin:, medmax:, slowmin:, slowmax:, flavortext:,imgtag:},
  {name:,district:,fastmin:, fastmax:, medmin:, medmax:, slowmin:, slowmax:, flavortext:,imgtag:},
  {name:,district:,fastmin:, fastmax:, medmin:, medmax:, slowmin:, slowmax:, flavortext:,imgtag:},
  {name:,district:,fastmin:, fastmax:, medmin:, medmax:, slowmin:, slowmax:, flavortext:,imgtag:}
]
# item definitions
items = [
  {name:,spawnarea:,effect:,flavortext:,imgtag:},
  {name:,spawnarea:,effect:,flavortext:,imgtag:},
  {name:,spawnarea:,effect:,flavortext:,imgtag:},
  {name:,spawnarea:,effect:,flavortext:,imgtag:}
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
    imgtag: loc[:imgtag])
end

items.each do |item|
  Event.create(
    name: item[:name],
    spawnarea: item[:spawnarea],
    effect: item[:effect],
    flavortext: item[:flavortext],
    imgtag: item[:imgtag])
end
