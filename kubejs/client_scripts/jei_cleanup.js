// priority: 0

// Hide items
JEIEvents.hideItems(event => {
  event.hide([

    // Wrenches
    '#ae2:quartz_wrench',
    'enderio:yeta_wrench',
    'etcetera:wrench',

    // Knives
    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    'refurbished_furniture:knife',

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