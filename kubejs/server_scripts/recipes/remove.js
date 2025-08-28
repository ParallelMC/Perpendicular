// priority: 100

ServerEvents.recipes(event => {
  // By recipe ID
  [
    // -----------------
    // REDUNDANT ITEMS
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

  ].forEach((recipeID) => event.remove({id: recipeID}));

  // By output
  [
    // Toast
    'mynethersdelight:toasts'
  ].forEach((itemID) => event.remove({output: itemID}));

});