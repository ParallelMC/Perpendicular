// priority: 100

ServerEvents.recipes(event => {
  // By recipe ID
  [
    // -----------------
    // Duplicate recipes
    // -----------------

    // Vanilla items
    'aether:aether_saddle',
    'essentials:name_tag',

    // Gears
    'enderio:iron_gear',
    'industrialforegoing:diamond_gear',
    'industrialforegoing:gold_gear',
    'industrialforegoing:iron_gear',

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

    // Sulfur
    'spelunkery:sulfur_block',

    // Gold bars
    'quark:building/crafting/gold_bars',
    'tconstruct:common/gold_bars',
    'tconstruct:smeltery/casting/metal/gold/bars',
    'tconstruct:smeltery/melting/metal/gold/nugget_3',

    // Building blocks
    'netherexp:twisting_polished_blackstone_bricks',
    'netherexp:weeping_polished_blackstone_bricks',
    'endergetic:cracked_end_stone_bricks',
    /somemoreblocks.*shingles/,

    // Quark azalea removal
    /railways:track_quark_azalea/,
    /dramaticdoors:.*quark_azalea/,
    /everycomp:.*quark.*azalea/,
    /productivebees:.*quark_azalea/,
    /supplementaries:quark.*azalea/,
    'shutter:azalea_quark_shutter',
    'iwannaskate:jei.skateboard_azalea_planks_slab',
    'iwannaskate:jei.skateboard_deck_azalea_planks_slab',
    'sullysmod:grindstone_polishing/cataclysm/polished_endstone_from_endstone',

    // Friends and Foes copper decor
    /friendsandfoes:.*copper_button/,
    /friendsandfoes:.*lightning_rod/,

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
    'cataclysm:stone_tiles',
    'cataclysm:stone_tile_slab',
    'cataclysm:stone_tile_stairs',
    'cataclysm:stone_tile_wall',
    'bbb:stone_tiles',
    'bbb:stone_tile_stairs',
    'bbb:stone_tile_slab',
    'bbb:stone_tile_layer',

  ].forEach((itemID) => event.remove({output: itemID}));

});