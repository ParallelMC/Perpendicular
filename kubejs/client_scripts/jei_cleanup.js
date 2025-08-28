// priority: 0

// Hide items
JEIEvents.hideItems(event => {
  event.hide([

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

    // Salt
    'refurbished_furniture:sea_salt',

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

    // Sulfur
    'spelunkery:sulfur_block',

    // Gold bars
    'quark:gold_bars',
    'tconstruct:gold_bars',

    // Building blocks
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
    'cataclysm:stone_tiles',
    'cataclysm:stone_tile_slab',
    'cataclysm:stone_tile_stairs',
    'cataclysm:stone_tile_wall',
    'bbb:stone_tiles',
    'bbb:stone_tile_stairs',
    'bbb:stone_tile_slab',
    'bbb:stone_tile_layer',
    /somemoreblocks:.*shingles/,

    // Friends and Foes copper decor
    /friendsandfoes:.*copper_button/,
    /friendsandfoes:.*lightning_rod/,

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
    Item.of('iwannaskate:skateboard', '{Damage:0,Skateboard:{GripTape:-1,MadeOf:"quark:azalea_planks_slab",WheelType:-1}}'),
    Item.of('iwannaskate:skateboard_deck', '{Skateboard:{GripTape:-1,MadeOf:"quark:azalea_planks_slab",WheelType:-1}}'),
  ]);
});

// Add items
JEIEvents.addItems(event => {
  event.add([
  ]);
});

// Hide recipe categories
JEIEvents.removeCategories(event => {
  event.remove('refurbished_furniture:cutting_board_slicing')
  event.remove('meadow:woodcutting')
})