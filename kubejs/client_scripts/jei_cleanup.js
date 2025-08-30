// priority: 0

// Hide items
JEIEvents.hideItems(event => {
  event.hide([

    // -----------------
    // Nerfs
    // -----------------
    
    // Disable Essentials fertile soil
    /essentials:fertile_soil/,

    // Remove some IF infinity items
    'industrialforegoing:infinity_hammer',
    'industrialforegoing:infinity_trident',
    'industrialforegoing:infinity_launcher',
    'industrialforegoing:infinity_nuke',

    // -----------------
    // Unification
    // -----------------

    // Wrenches
    '#ae2:quartz_wrench',
    'enderio:yeta_wrench',
    'etcetera:wrench',

    // Cheeses
    'tconstruct:cheese_ingot',
    'tconstruct:cheese_block',
    'refurbished_furniture:cheese',

    // Flour
    'create:wheat_flour',
    'enderio:flour',

    // Dough
    'create:dough',
    'refurbished_furniture:dough',

    // Sliced bread
    'refurbished_furniture:bread_slice',
    'mynethersdelight:slices_of_bread',

    // Toast
    'refurbished_furniture:toast',
    'mynethersdelight:toasts',

    // Eggs
    'farmersdelight:fried_egg',
    'naturalist:cooked_egg',

    // Salt
    'refurbished_furniture:sea_salt',
    'meadow:alpine_salt_ore',
    'spelunkery:rock_salt',
    'spelunkery:rock_salt_block',
    'spelunkery:rock_salt_stairs',
    'spelunkery:rock_salt_slab',
    'spelunkery:rock_salt_wall',    
    'v_slab_compat:spelunkery/rock_salt_vertical_slab',

    // Knives
    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    'refurbished_furniture:knife',

    // Storage blocks
    'vinery:apple_bag',
    'thermal:apple_block',
    'thermal:potato_block',
    'thermal:carrot_block',
    'thermal:beetroot_block',
    'thermal:sugar_cane_block',
    'thermal:gunpowder_block',
    'caverns_and_chasms:rotten_flesh_block',

    // Sulfur
    'spelunkery:sulfur_block',

    // Gold bars
    'quark:gold_bars',
    'tconstruct:gold_bars',

    // Building blocks
    'netherexp:cracked_quartz_bricks',
    'netherexp:twisting_polished_blackstone_bricks',
    'netherexp:weeping_polished_blackstone_bricks',
    'netherexp:nether_brick_pillar',
    'netherexp:polished_blackstone_pillar',
    'cataclysm:blackstone_pillar',
    'cataclysm:polished_end_stone',
    'cataclysm:polished_end_stone_slab',
    'cataclysm:polished_end_stone_stairs',
    'v_slab_compat:cataclysm/polished_end_stone_vertical_slab',
    'cataclysm:chiseled_end_stone_bricks',
    'cataclysm:end_stone_pillar',
    'architects_palette:chiseled_end_stone_bricks',
    'architects_palette:cracked_end_stone_bricks',
    'endergetic:chiseled_end_stone_bricks',
    'endergetic:cracked_end_stone_bricks',
    'cataclysm:stone_pillar',
    'cataclysm:stone_tiles',
    'cataclysm:stone_tile_slab',
    'cataclysm:stone_tile_stairs',
    'cataclysm:stone_tile_wall',
    'v_slab_compat:cataclysm/stone_tile_vertical_slab',
    'bbb:stone_tiles',
    'bbb:stone_tile_stairs',
    'bbb:stone_tile_slab',
    'bbb:stone_tile_layer',
    /somemoreblocks:.*shingles/,
    'caverns_and_chasms:cobblestone_bricks',
    'caverns_and_chasms:cobblestone_brick_stairs',
    'caverns_and_chasms:cobblestone_brick_slab',
    'caverns_and_chasms:cobblestone_brick_wall',
    'v_slab_compat:caverns_and_chasms/cobblestone_brick_vertical_slab',
    'caverns_and_chasms:mossy_cobblestone_bricks',
    'caverns_and_chasms:mossy_cobblestone_brick_stairs',
    'caverns_and_chasms:mossy_cobblestone_brick_slab',
    'caverns_and_chasms:mossy_cobblestone_brick_wall',
    'v_slab_compat:caverns_and_chasms/mossy_cobblestone_brick_vertical_slab',
    /bbb:.*ladder/,
    'twigs:cracked_bricks',
    'twigs:mossy_bricks',
    'twigs:mossy_brick_stairs',
    'twigs:mossy_brick_slab',
    'twigs:mossy_brick_wall',
    'v_slab_compat:twigs/mossy_brick_vertical_slab',
    'create:diorite_pillar',
    'create:cut_diorite_bricks',
    'create:cut_diorite_brick_stairs',
    'create:cut_diorite_brick_slab',
    'create:cut_diorite_brick_wall',
    'v_slab_compat:create/cut_diorite_brick_vertical_slab',
    'create:granite_pillar',
    'create:cut_granite_bricks',
    'create:cut_granite_brick_stairs',
    'create:cut_granite_brick_slab',
    'create:cut_granite_brick_wall',
    'v_slab_compat:create/cut_granite_brick_vertical_slab',
    'create:andesite_pillar',
    'create:cut_andesite_bricks',
    'create:cut_andesite_brick_stairs',
    'create:cut_andesite_brick_slab',
    'create:cut_andesite_brick_wall',
    'v_slab_compat:create/cut_granite_brick_vertical_slab',
    'architects_palette:dripstone_pillar',
    'create:polished_cut_dripstone',
    'create:polished_cut_dripstone_stairs',
    'create:polished_cut_dripstone_slab',
    'create:polished_cut_dripstone_wall',
    'create:dripstone_pillar',
    'create:cut_dripstone_bricks',
    'create:cut_dripstone_brick_stairs',
    'create:cut_dripstone_brick_slab',
    'create:cut_dripstone_brick_wall',
    'v_slab_compat:create/cut_dripstone_brick_vertical_slab',
    'caverns_and_chasms:tuff_slab',
    'caverns_and_chasms:tuff_stairs',
    'caverns_and_chasms:tuff_wall',
    'architects_palette:tuff_bricks',
    'architects_palette:tuff_brick_slab',
    'architects_palette:tuff_brick_vertical_slab',
    'architects_palette:tuff_brick_stairs',
    'architects_palette:tuff_brick_wall',
    'create:cut_tuff_bricks',
    'create:cut_tuff_brick_stairs',
    'create:cut_tuff_brick_slab',
    'create:cut_tuff_brick_wall',
    'v_slab_compat:create/cut_tuff_brick_vertical_slab',
    'twigs:polished_tuff_bricks',
    'twigs:cracked_polished_tuff_bricks',
    'twigs:polished_tuff_brick_stairs',
    'twigs:polished_tuff_brick_slab',
    'twigs:polished_tuff_brick_wall',
    'v_slab_compat:twigs/polished_tuff_brick_vertical_slab',
    'caverns_and_chasms:polished_tuff',
    'caverns_and_chasms:polished_tuff_stairs',
    'caverns_and_chasms:polished_tuff_slab',
    'create:polished_cut_tuff',
    'create:polished_cut_tuff_stairs',
    'create:polished_cut_tuff_slab',
    'create:polished_cut_tuff_wall',
    'v_slab_compat:create/polished_cut_tuff_vertical_slab',
    'twigs:polished_tuff',
    'twigs:polished_tuff_stairs',
    'twigs:polished_tuff_slab',
    'architects_palette:tuff_pillar',
    'create:tuff_pillar',
    'create:cut_calcite_bricks',
    'create:cut_calcite_brick_stairs',
    'create:cut_calcite_brick_slab',
    'create:cut_calcite_brick_wall',
    'v_slab_compat:create/cut_calcite_brick_vertical_slab',
    'twigs:polished_calcite_bricks',
    'twigs:cracked_polished_calcite_bricks',
    'twigs:polished_calcite_brick_stairs',
    'twigs:polished_calcite_brick_slab',
    'twigs:polished_calcite_brick_wall',
    'v_slab_compat:twigs/polished_calcite_brick_vertical_slab',
    'caverns_and_chasms:polished_calcite',
    'caverns_and_chasms:polished_calcite_stairs',
    'caverns_and_chasms:polished_calcite_slab',
    'create:polished_cut_calcite',
    'create:polished_cut_calcite_stairs',
    'create:polished_cut_calcite_slab',
    'create:polished_cut_calcite_wall',
    'v_slab_compat:create/polished_cut_calcite_vertical_slab',
    'twigs:polished_calcite',
    'twigs:polished_calcite_stairs',
    'twigs:polished_calcite_slab',
    'architects_palette:calcite_pillar',
    'create:calcite_pillar',
    'somemoreblocks:amethyst_bricks',
    'somemoreblocks:cracked_amethyst_bricks',
    'somemoreblocks:cut_amethyst',
    'somemoreblocks:cracked_cut_amethyst',
    'somemoreblocks:cracked_mud_bricks',
    'architects_palette:polished_packed_ice',
    'architects_palette:polished_packed_ice_slab',
    'architects_palette:polished_packed_ice_vertical_slab',
    'architects_palette:polished_packed_ice_stairs',
    'architects_palette:polished_packed_ice_wall',

    // Copper variants
    /friendsandfoes:.*copper_button/,
    /friendsandfoes:.*lightning_rod/,
    /twigs:.*copper_pillar/,

    // Amber
    'alexscaves:amber',
    'unusualprehistory:amber_block',

    // Dragon loot
    'irons_spellbooks:dragonskin',

    // Grasses
    'biomeswevegone:beach_grass',
    'biomeswevegone:tall_beach_grass',
    'upgrade_aquatic:beachgrass',
    'upgrade_aquatic:tall_beachgrass',

    // Misc natural blocks
    'bloomingnature:quicksand',
    'unusualprehistory:permafrost',

    // Quark azalea removal
    /railways:track_quark_azalea/,
    /dramaticdoors:.*quark_azalea/,
    /everycomp:.*quark.*azalea/,
    /productivebees:.*quark_azalea/,
    /supplementaries:quark.*azalea/,
    'shutter:azalea_quark_shutter',

    //Misc entities
    'tconstruct:clear_item_frame',
    'railways:jukeboxcart',

    // Rope
    'beautify:rope',
    'bbb:rope',
    'meadow:climbing_rope_topmount',

    // Misc decor
    'supplementaries:lunch_basket',

    // Equipment
    'thermal:satchel',

    // Items for removed mobs
    'friendsandfoes:copper_golem_spawn_egg',
    'friendsandfoes:glare_spawn_egg',
    'friendsandfoes:iceologer_spawn_egg',
    'friendsandfoes:totem_of_freezing',
    'friendsandfoes:moobloom_spawn_egg',
    'naturalist:snail_spawn_egg',
    'naturalist:snail_eggs',
    'naturalist:snail_bucket',
    'naturalist:snail_shell',
    'naturalist:tortoise_spawn_egg',
    'naturalist:tortoise_egg',
    'sullysmod:lanternfish_spawn_egg',
    'sullysmod:lanternfish_bucket',
    'sullysmod:lanternfish',
    'sullysmod:cooked_lanternfish',
    'whatareyouvotingfor:crab_spawn_egg',
    'whatareyouvotingfor:crab_claw',

    // Silicon
    'ae2:silicon',

    // Fluids
    'tconstruct:molten_lead_bucket',
    'tconstruct:molten_steel_bucket',
    'tconstruct:molten_bronze_bucket',
    'crossroads:molten_iron_bucket',
    'crossroads:molten_gold_bucket',
    'crossroads:molten_copper_bucket',
    'crossroads:molten_tin_bucket',

    // Latex
    'thermal:latex_bucket',

    // Rubber
    'thermal:rubber',
    'industrialforegoing:tinydryrubber',

    // Milk
    'farmersdelight:milk_bottle',

    // Oil
    'ad_astra:oil_bucket',
    'thermal:crude_oil_bucket',

  ]);
});

// Hide fluids
JEIEvents.hideFluids(event => {
  event.hide([
    'tconstruct:molten_lead',
    'tconstruct:molten_steel',
    'tconstruct:molten_bronze',
    'crossroads:molten_iron',
    'crossroads:molten_gold',
    'crossroads:molten_copper',
    'crossroads:molten_tin',
    'thermal:latex',
    'ad_astra:oil',
    'thermal:crude_oil',
  ]);
});


// Add items
JEIEvents.addItems(event => {
  event.add([
    // Create: Big Cannons hides the Create buckets for some reason
    'create:chocolate_bucket',
    'create:honey_bucket'
  ]);
});

// Hide recipe categories
JEIEvents.removeCategories(event => {
  event.remove('refurbished_furniture:cutting_board_slicing')
  event.remove('meadow:woodcutting')
})