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

    // Knives
    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    'refurbished_furniture:knife',

    // MrCrayfish cutting board recipes
    /refurbished_furniture:slicing/,

    // Meadow woodcutting recipes
    /meadow:wood_cutter/,

  ].forEach((recipeID) => event.remove({id: recipeID}));

});