// priority: 100

ServerEvents.tags("worldgen/biome", (event) => {

  // Ice maze on Glacio
  event.add("aquamirae:ice_maze", "ad_astra:glacio_ice_peaks")

  // Prevent Ad Astra oil well from spawning
  event.removeAll("ad_astra:has_structure/oil_well")


  // -----------------
  // CUSTOM BIOME TAGS
  // -----------------

  // Create new birch forest biome tag
  event.add('perpendicular:is_birch_forest', [
    'biomeswevegone:aspen_boreal',
    'biomeswevegone:howling_peaks',
    'biomeswevegone:overgrowth_woodlands',
    'biomeswevegone:temperate_grove',
    'minecraft:birch_forest',
	  'minecraft:old_growth_birch_forest'
  ])
  
  // Create new meadow biome tag
  event.add('perpendicular:is_meadow', [
    'biomeswevegone:allium_shrubland',
    'biomeswevegone:coconino_meadow',
    'biomeswevegone:rose_fields',
    'minecraft:meadow',
    'neapolitan:strawberry_fields'
  ])
  
  // Create new tag to actually properly place BWG snowy biomes in a #snowy tag
  event.add('perpendicular:is_snowy', [
    '#forge:is_snowy',
    // 'biomeswevegone:eroded_borealis',
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:howling_peaks'
  ])

  // Create new tag to actually properly place BWG taiga biomes in a #taiga tag
  event.add('perpendicular:is_taiga', [
    '#minecraft:is_taiga',
    'biomeswevegone:black_forest',
    'biomeswevegone:canadian_shield',
    'biomeswevegone:cika_woods',
    'biomeswevegone:coniferous_forest',
    'biomeswevegone:dacite_ridges',
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:maple_taiga'
  ])

  // Create new River Redux biome tag
  event.add('perpendicular:river_redux_biomes', [
    'riverredux:gravelly_river',
    'riverredux:sandy_river',
    'riverredux:tropical_river'
  ])


  // ---------------------
  // FEATURES BIOME COMPAT
  // ---------------------
  // Add pink and white clovers from Buzzier Bees to BWG biomes
  event.add('buzzier_bees:has_feature/pink_clover', 'biomeswevegone:temperate_grove')
  event.add('buzzier_bees:has_feature/white_clover', [
    'biomeswevegone:orchard',
    'biomeswevegone:temperate_grove'
  ])

  // Add BWG biomes to Friends & Foes feature placement
  event.add('friendsandfoes:has_buttercup_patch', flowerbiomes)

  // Fix Quark fallen log tags
  event.add('quark:has_fallen_dark_oak', 'minecraft:dark_forest')
  event.add('quark:has_fallen_mangrove', 'minecraft:mangrove_swamp')

  // Add more BWG biomes to Some More Blocks feature placement
  event.add('somemoreblocks:generates_tiny_cactus', '#forge:is_desert')
  event.add('somemoreblocks:generates_small_lily_pads', [
      'biomeswevegone:bayou',
      'biomeswevegone:crag_gardens',
      'biomeswevegone:cypress_swamplands',
      'biomeswevegone:fragment_jungle',
      'biomeswevegone:tropical_rainforest',
      'biomeswevegone:white_mangrove_marshes'
  ])

  // Stop Some More Blocks tiny cactuses from spawning in forests
  event.remove('somemoreblocks:generates_tiny_cactus', '#minecraft:is_forest')

  // Add BWG biomes to Spelunkery feature placement
  event.add('spelunkery:has_desert_noise', '#forge:is_desert')
  event.add('spelunkery:has_end_noise', '#minecraft:is_end')
  event.remove('spelunkery:has_end_noise', 'minecraft:the_end')
  event.add('spelunkery:has_stone_noise', '#minecraft:is_overworld')
  event.remove('spelunkery:has_stone_noise', '#forge:is_cave')
  event.remove('spelunkery:has_stone_noise', '#minecraft:is_ocean')
  event.add('spelunkery:has_swamp_noise', '#forge:is_swamp')

  // Add BWG biomes to Twigs feature placement
  event.add('twigs:spawns_pebble', [
      '#forge:is_plains',
      '#forge:is_swamp',
      '#perpendicular:is_meadow'
  ])
  event.add('twigs:spawns_sea_shell', 'biomeswevegone:rainbow_beach')
  event.add('twigs:spawns_twig', '#forge:is_swamp')

  // Add extra biomes to Upgrade Aquatic feature placements
  event.add('upgrade_aquatic:has_feature/beachgrass', 'perpendicular:river_redux_biomes')
  event.add('upgrade_aquatic:has_feature/driftwood_river', 'perpendicular:river_redux_biomes')
  event.add('upgrade_aquatic:has_feature/flowering_rush', 'perpendicular:river_redux_biomes')
  event.add('upgrade_aquatic:has_feature/pickerelweed', 'perpendicular:river_redux_biomes')
  event.add('upgrade_aquatic:has_feature/river_tree', 'perpendicular:river_redux_biomes')
  

  // -----------------
  // MOBS BIOME COMPAT
  // -----------------
  // Add extra biome tags to Backported Wolves spawns
  event.add('backported_wolves:spawns_rusty_wolf', '#minecraft:is_jungle')
  event.add('backported_wolves:spawns_spotted_wolf', '#minecraft:is_savanna')
  event.add('backported_wolves:spawns_striped_wolf', '#minecraft:is_badlands')
  // POSSIBLE TO DO WOODS WOLF MINUS GROVE?
  // event.add('backported_wolves:spawns_woods_wolf', '#minecraft:is_forest')

  // Add all caves to Creeper Overhaul #is_cave tag
  event.add('creeperoverhaul:is_cave', '#forge:is_cave')


  // Make Enderman Overhaul enderman spawn in more biomes
  event.add('endermanoverhaul:cave_spawns', '#forge:is_cave')
  event.add('endermanoverhaul:flower_field_spawns', [
    '#biomeswevegone:floral',
    'neapolitan:strawberry_fields'
  ])

  // Add BWG flower biomes to Friends & Foes mob spawns
  let flowerbiomes = [
    'biomeswevegone:allium_shrubland',
    'biomeswevegone:amaranth_grassland',
    'biomeswevegone:orchard',
    'biomeswevegone:sakura_grove'
  ]
  event.add('friendsandfoes:has_moobloom/allium', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/azure_bluet', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/blue_orchid', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/buttercup', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/cornflower', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/dandelion', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/lilac', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/lily_of_the_valley', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/orange_tulip', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/oxeye_daisy', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/peony', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/pink_tulip', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/poppy', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/red_tulip', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/rose_bush', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/sunflower', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/white_tulip', flowerbiomes)

  event.add('friendsandfoes:has_crab', [
    'biomeswevegone:rainbow_beach',
    'biomeswevegone:white_mangrove_marshes'
  ])

  // Prevent Friends and Foes iceologer from spawning naturally
  event.removeAll('friendsandfoes:has_iceologer')

  // Add BWG biomes to Hamsters mod hamsters spawns
  event.add('hamsters:has_hamster', '#perpendicular:is_meadow')

  // Add BWG biomes to Let's Do Meadow buffalo spawns
  event.add('meadow:spawns_buffalo', '#perpendicular:is_taiga')

  // Prevent Naturalist dragonfly from spawning naturally
  event.removeAll('naturalist:has_dragonfly')

  // Add BWG biomes to Unusual Prehistory mob spawns
  event.add('unusualprehistory:is_megatherium_biome', '#minecraft:is_savanna')
  event.add('unusualprehistory:is_paracer_biome', '#minecraft:is_savanna')
  event.add('unusualprehistory:is_petrified_wood_forest_biome', [
      '#minecraft:is_badlands',
      '#forge:is_desert'
  ])
  // event.add('unusualprehistory:is_tar_biome', [
  //     '#forge:is_desert',
  //     '#forge:is_plains',
  //     '#minecraft:is_savanna',
  //     '#forge:is_swamp'
  // ])
  event.add('unusualprehistory:is_veloci_biome', '#forge:is_desert')

  // Add extra biomes to Upgrade Aquatic mob spawns
  event.add('upgrade_aquatic:has_spawn/pike', 'perpendicular:river_redux_biomes')
  event.add('upgrade_aquatic:has_spawn/squid', '#forge:is_swamp')


  // ----------------------
  // STRUCTURE BIOME COMPAT
  // ----------------------

  // Allow Better Archaeology structures to spawn in modded biomes
  event.add('betterarcheology:collections/badlands', '#minecraft:is_badlands')
  event.add('betterarcheology:collections/birch_forests', '#perpendicular:is_birch_forest')
  event.add('betterarcheology:collections/deserts', '#biomeswevegone:desert')
  event.add('betterarcheology:collections/forests', [
    '#minecraft:is_forest',
    'biomeswevegone:temperate_grove'
  ])
  event.add('betterarcheology:collections/jungles', '#minecraft:is_jungle')
  event.add('betterarcheology:collections/meadows', '#perpendicular:is_meadow')
  event.add('betterarcheology:collections/oceans', '#minecraft:is_ocean')
  event.add('betterarcheology:collections/plains', '#forge:is_plains')
  event.add('betterarcheology:collections/taigas', '#perpendicular:is_taiga')

  // Fix Beautify structure biome tags
  event.add('beautify:has_structure/botanist_house_desert_biomes', '#forge:is_desert')
  event.add('beautify:has_structure/botanist_house_plains_biomes', '#forge:is_plains')
  event.add('beautify:has_structure/botanist_house_savanna_biomes', '#minecraft:is_savanna')
  event.add('beautify:has_structure/botanist_house_snowy_biomes', '#perpendicular:is_snowy')
  event.add('beautify:has_structure/botanist_house_taiga_biomes', '#perpendicular:is_taiga')

  // INVESTIGATE THIS
  // Remove Beautify botanist house from spawning bc the botanist villager bed ai is wacked
  event.removeAll('beautify:has_structure/botanist_house_desert_biomes')
  event.removeAll('beautify:has_structure/botanist_house_plains_biomes')
  event.removeAll('beautify:has_structure/botanist_house_savanna_biomes')
  event.removeAll('beautify:has_structure/botanist_house_snowy_biomes')
  event.removeAll('beautify:has_structure/botanist_house_taiga_biomes')

  // Add some BWG biomes to YUNG's better dungeons
  event.add('betterdungeons:has_structure/skeleton_dungeon', '#biomeswevegone:icy')
  event.add('betterdungeons:has_structure/small_dungeon', '#biomeswevegone:icy')
  event.add('betterdungeons:has_structure/spider_dungeon', '#biomeswevegone:icy')
  event.add('betterdungeons:has_structure/zombie_dungeon', '#biomeswevegone:icy')

  // Add some biomes to YUNG's better mineshafts
  event.add('bettermineshafts:has_structure/better_mineshaft_acacia', '#biomeswevegone:savanna')
  event.add('bettermineshafts:has_structure/better_mineshaft_ice', '#biomeswevegone:icy')
  event.add('bettermineshafts:has_structure/better_mineshaft_oak', '#forge:is_plains')
  event.add('bettermineshafts:has_structure/better_mineshaft_overgrown', 'biomeswevegone:tropical_rainforest')
  event.remove('bettermineshafts:has_structure/better_mineshaft_spruce', 'biomeswevegone:frosted_taiga')
  event.add('bettermineshafts:has_structure/better_mineshaft_spruce', [
      'biomeswevegone:black_forest',
      'biomeswevegone:canadian_shield',
      'biomeswevegone:cika_woods',
      'biomeswevegone:dacite_ridges'
  ])
  event.add('bettermineshafts:has_structure/better_mineshaft_spruce_snowy', [
      'biomeswevegone:frosted_coniferous_forest',
      'biomeswevegone:frosted_taiga'
  ])

  // Add more biomes to Let's Do Blooming Nature structures
  event.add('bloomingnature:has_structure/jungle', '#minecraft:is_jungle')
  event.add('bloomingnature:has_structure/swamp', '#forge:is_swamp')
  event.add('bloomingnature:has_structure/taiga', '#perpendicular:is_taiga')
  event.add('bloomingnature:has_structure/temperate', [
      '#forge:is_plains',
      '#perpendicular:is_taiga'
  ])

  // Add more biomes to Bosses of Mass Destruction structures
  event.add('bosses_of_mass_destruction:collections/cold', '#forge:is_cold/overworld')
  event.add('bosses_of_mass_destruction:collections/in_end', '#minecraft:is_end')
  event.remove('bosses_of_mass_destruction:collections/in_end', 'minecraft:the_end')

  // Add more biomes to Dimensional Doors structures
  event.add('dimdoors:enclosed_endstone_gateway', '#minecraft:is_end')
  event.add('dimdoors:enclosed_gateway', [
      '#forge:is_coniferous',
      '#forge:is_plains',
      '#minecraft:is_beach',
      '#minecraft:is_forest',
      '#minecraft:is_hill',
      '#minecraft:is_mountain',
      '#minecraft:is_savanna',
      '#minecraft:is_taiga',
  ])
  event.add('dimdoors:enclosed_mud_gateway', '#forge:is_swamp')
  event.add('dimdoors:enclosed_prismarine_gateway', '#minecraft:is_ocean')
  event.add('dimdoors:enclosed_quartz_gateway', '#perpendicular:is_snowy')
  event.add('dimdoors:enclosed_red_sandstone_gateway', '#minecraft:is_badlands')
  event.add('dimdoors:enclosed_sandstone_gateway', '#forge:is_desert')

  // Add more biomes to Friends & foes structures
  event.add('friendsandfoes:has_structure/beekeeper_hut', [
    'biomeswevegone:coconino_meadow',
    'biomeswevegone:rose_fields'
  ])
  event.add('friendsandfoes:collections/snowy', '#perpendicular:is_snowy')
  event.add('friendsandfoes:collections/taigas', '#perpendicular:is_taiga')

  // Add more biomes to Integrated Villages structures
  event.add('integrated_villages:collections/any_taiga', '#perpendicular:is_taiga')
  event.add('integrated_villages:collections/floral', [
    '#biomeswevegone:floral',
    'neapolitan:strawberry_fields'
  ])
  event.add('integrated_villages:collections/mangroves', 'biomeswevegone:white_mangrove_marshes')
  event.add('integrated_villages:collections/plains', '#forge:is_plains')
  event.add('integrated_villages:collections/regular_forests', [
    "biomeswevegone:aspen_boreal",
    "biomeswevegone:black_forest",
    "biomeswevegone:canadian_shield",
    "biomeswevegone:cika_woods",
    "biomeswevegone:coniferous_forest",
    "biomeswevegone:dacite_ridges",
    "biomeswevegone:ebony_woods",
    "biomeswevegone:orchard",
    "biomeswevegone:redwood_thicket",
    "biomeswevegone:sakura_grove",
    "biomeswevegone:zelkova_forest"
  ])
  event.add('integrated_villages:collections/snowy_forests', [
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:howling_peaks'
  ])
  event.add('integrated_villages:collections/taigas', [ // they're talking about warm taigas here
    'biomeswevegone:black_forest',
    'biomeswevegone:canadian_shield',
    'biomeswevegone:cika_woods',
    'biomeswevegone:coniferous_forest',
    'biomeswevegone:dacite_ridges',
    'biomeswevegone:maple_taiga'
  ])
  event.add('integrated_villages:collections/warm_beaches', 'biomeswevegone:rainbow_beach')

  // Add more biomes to Iron's Spells & Spellbooks structures
  event.add('irons_spellbooks:has_structure/catacombs', '#minecraft:is_savanna')
  event.add('irons_spellbooks:has_structure/mountain_tower', [
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:howling_peaks',
  ])
  event.add('irons_spellbooks:has_structure/catacombs', [
    '#forge:is_desert',
    '#forge:is_plains',
    '#forge:is_swamp',
    '#minecraft:is_savanna'
  ])

  // Add more biomes to Minecraft structures
  event.add('minecraft:has_structure/mineshaft', [
    '#forge:is_desert',
    '#forge:is_plains',
    '#forge:is_swamp',
    '#minecraft:is_savanna'
  ])
  event.add('minecraft:has_structure/ruined_portal_desert', '#forge:is_desert')
  event.add('minecraft:has_structure/ruined_portal_swamp', '#forge:is_swamp')
  event.add('minecraft:has_structure/stronghold', '#minecraft:is_overworld')
  event.remove('minecraft:has_structure/stronghold', '#minecraft:is_ocean')

  // Add more biomes to Dungeons and Taverns (NovaStructures) structures
  event.add('nova_structures:illager_hideout', [
    '#forge:is_cave',
    '#forge:is_desert',
    '#forge:is_plains'
  ])
  event.add('nova_structures:collections/any_taiga', '#perpendicular:is_taiga')  
  event.add('nova_structures:collections/birch_forests', '#perpendicular:is_birch_forest')
  event.add('nova_structures:collections/cherry_forests', 'biomeswevegone:sakura_grove')
  event.add('nova_structures:collections/floral', [
    '#biomeswevegone:floral',
    'neapolitan:strawberry_fields'
  ])
  event.add('nova_structures:collections/giant_taigas', [ // they're talking about warm taigas here + redwood thicket
    'biomeswevegone:cika_woods',
    'biomeswevegone:coniferous_forest',
    'biomeswevegone:dacite_ridges',
    'biomeswevegone:redwood_thicket'
  ])
  event.add('nova_structures:collections/giant_trees', [
    'biomeswevegone:cika_woods',
    'biomeswevegone:coniferous_forest',
    'biomeswevegone:crag_gardens',
    'biomeswevegone:dacite_ridges',
    'biomeswevegone:ebony_woods',
    'biomeswevegone:jacaranda_jungle',
    'biomeswevegone:orchard',
    'biomeswevegone:redwood_thicket',
    'biomeswevegone:sakura_grove',
    'biomeswevegone:tropical_rainforest'
  ])
  event.add('nova_structures:collections/illager_camps', [
    '#forge:is_cave',
    '#forge:is_desert',
    '#forge:is_plains',
  ])
  event.add('nova_structures:collections/mangroves', 'biomeswevegone:white_mangrove_marshes')
  event.add('nova_structures:collections/meadows', '#perpendicular:is_meadow')
  event.add('nova_structures:collections/plains', '#forge:is_plains')
  event.add('nova_structures:collections/regular_forests', [
    "biomeswevegone:aspen_boreal",
    "biomeswevegone:black_forest",
    "biomeswevegone:canadian_shield",
    "biomeswevegone:cika_woods",
    "biomeswevegone:coniferous_forest",
    "biomeswevegone:dacite_ridges",
    "biomeswevegone:ebony_woods",
    "biomeswevegone:orchard",
    "biomeswevegone:redwood_thicket",
    "biomeswevegone:sakura_grove",
    "biomeswevegone:zelkova_forest"
  ])
  event.add('nova_structures:collections/rocky_mountains', 'biomeswevegone:canadian_shield')
  event.add('nova_structures:collections/snowy_forests', [
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:howling_peaks'
  ])
  event.add('nova_structures:collections/snowy_structures', [
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:howling_peaks'
  ])
  event.add('nova_structures:collections/spooky_forests', [
    'biomeswevegone:ebony_woods',
    'biomeswevegone:forgotten_forest',
    'biomeswevegone:overgrowth_woodlands',
    'biomeswevegone:weeping_witch_forest',
  ])
  event.add('nova_structures:collections/taiga', [ // they're talking about warm taigas here
    'biomeswevegone:black_forest',
    'biomeswevegone:canadian_shield',
    'biomeswevegone:cika_woods',
    'biomeswevegone:coniferous_forest',
    'biomeswevegone:dacite_ridges',
    'biomeswevegone:maple_taiga'
  ])

  // Add more biomes to It Takes a Pillage structures
  event.add('takesapillage:has_structure/pillager_structure', [
    'biomeswevegone:allium_shrubland',
    'biomeswevegone:amaranth_grassland',
    'biomeswevegone:araucaria_savanna',
    'biomeswevegone:baobab_savanna',
    'biomeswevegone:crimson_tundra',
    'biomeswevegone:coconino_meadow',
    'biomeswevegone:firecracker_chaparral',
    'biomeswevegone:prairie',
    'biomeswevegone:rose_fields'
  ])

  // Add more biomes to Tinkers' Construct structures
  event.add('tconstruct:islands/enderslime', '#minecraft:is_end')
  event.remove('tconstruct:islands/enderslime', 'minecraft:the_end')

});