// priority: 100

ServerEvents.recipes(event => {
  // By recipe ID
  [
    // -----------------
    // Nerfs
    // -----------------
    
    // Disable oxidization through smelting
    /essentials:copper_oxidize/,

    // Disable Essentials fertile soil
    /essentials:fertile_soil/,

    // Remove some IF infinity items
    'industrialforegoing:dissolution_chamber/infinity_hammer',
    'industrialforegoing:dissolution_chamber/infinity_trident',
    'industrialforegoing:dissolution_chamber/infinity_launcher',
    'industrialforegoing:dissolution_chamber/infinity_nuke',
    
    // New recipe for mob imprisonment tool
    'industrialforegoing:mob_imprisonment_tool',

    // -----------------
    // Duplicate recipes
    // -----------------

    // Vanilla items
    'aether:aether_saddle',
    'essentials:name_tag',
    'essentials:piston',

    // Gears
    'enderio:iron_gear',
    'industrialforegoing:diamond_gear',
    'industrialforegoing:gold_gear',
    'industrialforegoing:iron_gear',

    // Crossroads materials
    'crossroads:base_materials/copper_ingot_nugg',
    'crossroads:base_materials/bronze_ingot_block',
    'crossroads:base_materials/bronze_ingot_nugg',
    'crossroads:base_materials/ruby_block',
    'crossroads:base_materials/tin_ingot_block',
    'crossroads:base_materials/ruby',
    'crossroads:base_materials/bronze_block',
    'crossroads:base_materials/copper_nugget',
    'crossroads:base_materials/bronze_nugget',
    'crossroads:base_materials/tin_nugget',
    'crossroads:base_materials/tin_block',
    'crossroads:base_materials/tin_ingot_nugg',
    'crossroads:base_materials/raw_tin_block',
    'crossroads:base_materials/tin_raw_block',

    // -----------------
    // Unification
    // -----------------

    // Wrenches
    'ae2:tools/certus_quartz_wrench',
    'ae2:tools/nether_quartz_wrench',
    'enderio:yeta_wrench',
    'etcetera:wrench',

    // Cheeses
    'tconstruct:common/cheese_ingot_from_block',
    'tconstruct:smeltery/casting/cheese_ingot_gold_cast',
    'tconstruct:smeltery/casting/cheese_ingot_sand_cast',
    'refurbished_furniture:cheese',

    // Flour
    'enderio:sag_milling/wheat',
    'enderio:alloy_smelting/cake_base',
    'enderio:alloy_smelting/cookie',
    'refurbished_furniture:combining/wheat_flour',

    // Dough
    'refurbished_furniture:dough',
    'minecraft:farmersdelight.dough',
    'enderio:smelting/create/smelting/bread',

    // Toast
    'refurbished_furniture:toasting/toast',

    // Salt
    'refurbished_furniture:baking/sea_salt',

    // Knives
    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    'refurbished_furniture:knife',

    // MrCrayfish cutting board recipes
    /refurbished_furniture:slicing/,
    'refurbished_furniture:combining/glow_berry_jam_toast',
    'refurbished_furniture:combining/sweet_berry_jam_toast',
    'refurbished_furniture:combining/raw_meatlovers_pizza',
    'refurbished_furniture:combining/raw_vegetable_pizza',
    'refurbished_furniture:combining/cheese_sandwich',

    // Meadow woodcutting recipes
    /meadow:wood_cutter/,

    // Storage blocks
    'vinery:apple_bag',
    'vinery:apples',
    'thermal:storage/apple_block',
    'thermal:storage/apple_from_block',
    'thermal:storage/potato_block',
    'thermal:storage/potato_from_block',
    'thermal:storage/carrot_block',
    'thermal:storage/carrot_from_block',
    'thermal:storage/beetroot_block',
    'thermal:storage/beetroot_from_block',
    'thermal:storage/sugar_cane_block',
    'thermal:storage/sugar_cane_from_block',
    'thermal:storage/gunpowder_block',
    'thermal:storage/gunpowder_from_block',
    'caverns_and_chasms:rotten_flesh_block',
    'caverns_and_chasms:rotten_flesh',

    // Sulfur
    'spelunkery:sulfur_block',

    // Gold bars
    'quark:building/crafting/gold_bars',
    'tconstruct:common/gold_bars',
    'tconstruct:smeltery/casting/metal/gold/bars',
    'tconstruct:smeltery/melting/metal/gold/nugget_3',

    // Building blocks
    'netherexp:cooking/cracked_quartz_bricks',
    'netherexp:twisting_polished_blackstone_bricks',
    'netherexp:weeping_polished_blackstone_bricks',
    'endergetic:cracked_end_stone_bricks',
    'sullysmod:grindstone_polishing/cataclysm/polished_endstone_from_endstone',
    /somemoreblocks.*shingles/,
    /bbb:.*ladder/,
    'twigs:cracked_bricks',
    'twigs:cracked_polished_tuff_bricks',
    'twigs:cracked_polished_calcite_bricks',
    'somemoreblocks:amethyst_bricks',
    'somemoreblocks:cracked_amethyst_bricks',
    'somemoreblocks:cut_amethyst',
    'somemoreblocks:cracked_cut_amethyst',
    'somemoreblocks:cracked_mud_bricks',
    'architects_palette:packed_ice_pillar',
    'architects_palette:chiseles_packed_ice',

    // Quark azalea removal
    /railways:track_quark_azalea/,
    /dramaticdoors:.*quark_azalea/,
    /everycomp:.*quark.*azalea/,
    /productivebees:.*quark_azalea/,
    /supplementaries:quark.*azalea/,
    'shutter:azalea_quark_shutter',

    // Copper blocks
    /friendsandfoes:.*copper_button/,
    /friendsandfoes:.*lightning_rod/,
    /twigs:.*copper_pillar/,

    //Misc entities
    'tconstruct:gadgets/fancy_frame/clear',
    'railways:jukeboxcart',

    // Rope
    'beautify:rope',
    'bbb:rope',
    'meadow:climbing_rope_topmount',

    // Misc decor
    'supplementaries:lunch_basket',

    // Equipment
    'thermal:tools/satchel',
    
    // XP
    'thermal:machines/centrifuge/centrifuge_experience_bottle',

    // Old Crossroads recipes with molten metal
    'crossroads:crucible/dust_copper',
    'crossroads:crucible/ingot_copper',
    'crossroads:crucible/nugget_copper',
    'crossroads:crucible/raw_copper',
    'crossroads:ind_blast_furnace/clump_copper',
    'crossroads:ind_blast_furnace/gravel_copper',
    'crossroads:ind_blast_furnace/raw_copper',

    'crossroads:crucible/dust_iron',
    'crossroads:crucible/ingot_iron',
    'crossroads:crucible/nugget_iron',
    'crossroads:crucible/raw_iron',
    'crossroads:crucible/iron_door',
    'crossroads:crucible/iron_trapdoor',
    'crossroads:crucible/iron_pressure_plate',
    'crossroads:crucible/cauldron',
    'crossroads:crucible/bucket',
    'crossroads:crucible/minecart',
    'crossroads:ind_blast_furnace/clump_iron',
    'crossroads:ind_blast_furnace/gravel_iron',
    'crossroads:ind_blast_furnace/raw_iron',
    'crossroads:fluid_cooling/molten_iron',

    'crossroads:crucible/dust_gold',
    'crossroads:crucible/ingot_gold',
    'crossroads:crucible/nugget_gold',
    'crossroads:crucible/raw_gold',
    'crossroads:crucible/gold_pressure_plate',
    'crossroads:ind_blast_furnace/clump_gold',
    'crossroads:ind_blast_furnace/gravel_gold',
    'crossroads:ind_blast_furnace/raw_gold',

    'crossroads:crucible/dust_tin',
    'crossroads:crucible/ingot_tin',
    'crossroads:crucible/nugget_tin',
    'crossroads:crucible/raw_tin',
    'crossroads:ind_blast_furnace/clump_tin',
    'crossroads:ind_blast_furnace/gravel_tin',
    'crossroads:ind_blast_furnace/raw_tin',

  ].forEach((recipeID) => event.remove({id: recipeID}));

  // By output
  [
    // Toast
    'mynethersdelight:toasts',

    // Building blocks
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
    'architects_palette:polished_packed_ice',
    'architects_palette:polished_packed_ice_slab',
    'architects_palette:polished_packed_ice_vertical_slab',
    'architects_palette:polished_packed_ice_stairs',
    'architects_palette:polished_packed_ice_wall',
    
    // Items for removed mobs
    'sullysmod:cooked_lanternfish',

  ].forEach((itemID) => event.remove({output: itemID}));

});