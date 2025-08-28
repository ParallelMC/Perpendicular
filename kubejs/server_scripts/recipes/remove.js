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

    // Meadow woodcutting recipes
    /meadow:wood_cutter/,

  ].forEach((recipeID) => event.remove({id: recipeID}));

});